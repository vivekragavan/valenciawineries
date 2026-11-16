# valenciawineries.org — static site

Static copy of https://valenciawineries.org (originally WordPress on Hostinger). It is used two ways:

1. **Preview** (this repository as-is): https://vivekragavan.github.io/valenciawineries/ — every page has `noindex,nofollow` and links use the `/valenciawineries/` base path.
2. **Real site**: built from this repository and uploaded to Hostinger to replace WordPress.

## Tools

- `python3 tools/clean_pages.py` — strips leftover WordPress plugin code (booking, spam filter, PayPal, contact form, slider, cart, Jetpack stats, emoji), the header search, and the price/stock data in the wine pages' search-engine data. Safe to re-run.
- `python3 tools/build_live.py <folder>` — builds the real site into `<folder>` plus `<folder>.zip`: root links, no `noindex`, absolute canonical addresses, `robots.txt`, `sitemap.xml`, `404.html`, `.htaccess` (forwards old WordPress addresses), and leaves out files no page uses.
- `python3 tools/mirror.py <output-dir>` — the original crawler (only needed to re-copy the old WordPress site).

## Publishing the real site (Hostinger)

1. `python3 tools/build_live.py ~/valenciawineries-live`
2. Hostinger hPanel > File Manager > `public_html`: move the old files into a folder (e.g. `old-wordpress`), upload `valenciawineries-live.zip`, Extract.

Theme note: `core/views/569b9d3e36/scripts/diwine.js` has its page fade-in fallback shortened from 3000 ms to 500 ms (`timeoutCountdown`), so fast page loads don't sit blank for 3 seconds.
