#!/usr/bin/env python3
"""Strip leftover WordPress plugin code from the static pages.

The pages were saved from a WordPress site. Many of the scripts and styles they
load belong to plugins that do nothing on a static site (booking calendar,
spam filter, PayPal, contact form, slider, cart, Jetpack visitor statistics,
emoji loader...). This removes them, plus the header search (WordPress search
can't work without WordPress). Theme scripts, WPBakery and the WooCommerce
styles the wine pages use are kept.

Safe to run more than once. Files keep their CRLF line endings.

    python3 tools/clean_pages.py            # clean every index.html
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent

# <script id="..."> / <link id="..."> prefixes to drop (WordPress gives every
# enqueued file an id; inline "-js-extra", "-js-before", "-js-after" share it).
DROP_IDS = [
    "apbct-", "ct_bot_detector", "cleantalk-",            # CleanTalk spam filter
    "booked-",                                             # Booked appointments
    "contact-form-7", "swv-",                              # Contact Form 7
    "wp-hooks-", "wp-i18n-",                               # only used by CF7/Booked
    "jquery-ui-core-", "jquery-ui-datepicker-",            # only used by Booked
    "date-time-picker",                                    # theme booking picker
    "mptt-",                                               # Timetable plugin
    "tp-tools-", "revmin-", "rs-plugin-settings",          # Slider Revolution
    "wc-ppcp-", "ppcp-fraudnet",                           # PayPal
    "WCPAY_", "wcpay-",                                    # WooPayments
    "wc-add-to-cart", "vc_woocommerce-add-to-cart",        # cart
    "wc-cart-fragments", "wc-order-attribution", "sourcebuster-",
    "woocommerce-analytics",                               # Jetpack/Woo tracking
    "jetpack-stats",                                       # Jetpack stats
    "wp-emoji-settings",                                   # emoji loader
]

# Inline scripts (no id) recognised by their content.
DROP_INLINE = [
    "ctPublicFunctions", "var ctPublic", "window._wca", "setREVStartSize",
    "window.RS_MODULES", "window.wcAnalytics", 'script#wp-emoji-settings',
]

# <link> tags that only make sense with WordPress running.
DROP_LINK_RE = re.compile(
    r"""<link\b[^>]*\brel=["'](?:profile|dns-prefetch|shortlink|EditURI|https://api\.w\.org/|alternate)["'][^>]*>[ \t]*\r?\n?""",
    re.I,
)


def id_dropped(tag_id: str) -> bool:
    return any(tag_id.startswith(p) for p in DROP_IDS)


def clean(html: str) -> str:
    # 1. <script ...>...</script> blocks
    def script_sub(m: re.Match) -> str:
        attrs, body = m.group(1), m.group(2)
        mid = re.search(r"""\bid=["']([^"']+)["']""", attrs)
        if mid and id_dropped(mid.group(1)):
            return ""
        if 'type="speculationrules"' in attrs:
            return ""
        if "src=" not in attrs and any(k in body for k in DROP_INLINE):
            return ""
        if re.search(r"src=[\"']https://(stats\.wp\.com|fd\.cleantalk\.org)", attrs):
            return ""
        return m.group(0)

    html = re.sub(r"<script\b([^>]*)>(.*?)</script>[ \t]*\r?\n?", script_sub, html, flags=re.S)

    # 2. stylesheet <link id="..."> for dropped plugins
    def link_sub(m: re.Match) -> str:
        mid = re.search(r"""\bid=["']([^"']+)["']""", m.group(0))
        return "" if mid and id_dropped(mid.group(1)) else m.group(0)

    html = re.sub(r"<link\b[^>]*>[ \t]*\r?\n?", link_sub, html)
    html = DROP_LINK_RE.sub("", html)

    # 2b. inline <style id="..."> blocks for dropped plugins and the emoji loader
    def style_sub(m: re.Match) -> str:
        sid = m.group(1)
        return "" if id_dropped(sid) or sid.startswith("wp-emoji-styles") else m.group(0)

    html = re.sub(r"""<style id=["']([^"']+)["'][^>]*>.*?</style>[ \t]*\r?\n?""", style_sub, html, flags=re.S)

    # 2c. product data for search engines: drop price / stock ("offers"),
    #     since the wines are shown but no longer sold
    def ldjson_sub(m: re.Match) -> str:
        body = m.group(2)
        if '"@type":"Product"' not in body or '"offers"' not in body:
            return m.group(0)
        try:
            data = json.loads(body)
        except ValueError:
            return m.group(0)
        data.pop("offers", None)
        return m.group(1) + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + m.group(3)

    html = re.sub(r'(<script type="application/ld\+json">)(.*?)(</script>)', ldjson_sub, html, flags=re.S)

    # 3. header search icon and its pop-up form
    html = re.sub(r'<li class="menu-item menu-item-search">.*?</li>', "", html, flags=re.S)
    html = re.sub(r'<div id="search-overlay">.*?</form>\s*</div>', "", html, flags=re.S)
    html = re.sub(r'<span class="mobile-searh-menu">\s*<a href="#search"[^>]*>.*?</a>\s*</span>', "", html, flags=re.S)
    return html


def main() -> None:
    for f in sorted(ROOT.glob("**/index.html")):
        if ".git" in f.parts:
            continue
        with open(f, encoding="utf-8", newline="") as fh:
            old = fh.read()
        new = clean(old)
        if new != old:
            with open(f, "w", encoding="utf-8", newline="") as fh:
                fh.write(new)
            print(f"cleaned {f.relative_to(ROOT)}  ({len(old) - len(new):,} bytes removed)")


if __name__ == "__main__":
    main()
