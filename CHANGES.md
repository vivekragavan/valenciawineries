# Changes to carry over to the live site (valenciawineries.org)

Each change made in this preview copy, and how to make it in WordPress.

## Live site status (updated November 15, 2026)

**All 12 changes below are live on valenciawineries.org.** They were applied in WordPress on November 14–15, 2026, and each was checked on the live site afterwards.

How some of them were actually done on the live site (where it differed from the notes below):
- **Pages removed (changes 2–4):** 36 pages trashed. On the live site, WooCommerce uses the labelled pages "Cart — Cart Page", "Checkout — Checkout Page" and "My Account — My Account Page" (addresses /cart/, /checkout/, /my-account/); the plain 2018 duplicates were the ones trashed. The Wine tab (/shop/) is the plain "Shop" page; "Shop — Shop Page" (/shop-1/) is WooCommerce's own product list and was kept but hidden from search engines (All in One SEO > Advanced > No Index). Both broken "Wines" pages (they redirected to themselves) were also trashed.
- **Demo login menu (change 5):** on the live site it was called "FAQ Menu" (locations Account Menu / Logged in Account Menu). Deleted, along with the unused "Footer Menu".
- **Privacy Policy (change 5):** replaced via WPBakery > Classic Mode > Code tab; dated November 15, 2026.
- **Online buying off (change 7):** prices cleared on both wines; "Dummy product" draft trashed; WooCommerce PayPal Payments plugin deactivated; Direct Bank Transfer, Check and Cash on Delivery disabled; Reserve category deleted. The header cart bubble, ORDER LIST drawer, Login/Register icon, SKU/Category line and Wine-tab "Read more" buttons are hidden with Additional CSS (Appearance > Customize > Additional CSS), which also holds the change 12 slider fix and the change 10 "Something similar" rule:

```css
.menu-item-account, a.cart-contents, #cart-overlay, #woocommerce-cart-wrapper { display: none !important; }
.single-product .product_meta { display: none !important; }
.woocommerce ul.products li.product a.button { display: none !important; }
.single-product section.related.products { display: none !important; }
```

- **Homepage buttons (change 7):** in the Hero Slider and the Our Signature Wines (Tilt Carousel) items, the button text is the link's title: edit item > Link > Select URL > Link Text.
- **Contact Us (change 8):** Contact Form 7 plugin deactivated.

**Other work done on the live site (not in the preview):**
- Backup made first (UpdraftPlus, November 15, 2026).
- Spam removed: Terms and Conditions page (escort spam) and the gambling post.
- Admin accounts deleted: "wordpress" (ID 123456, backdoor-style account), "Theme support" (gfxbandits), "Valencia" (Techinfinity) and "Vivek" (ID 1, gfxbandits; its content was moved to vivekragavan). vivekragavan is now the only admin.
- Plugins: 8 unused or vulnerable plugins deleted (Booked, Elementor, Elementor Pro, Essential Addons, All-in-One WP Migration, Slider Revolution, Ultimate Addons for Elementor, WP File Manager) plus Timetable and Event Schedule; 12 plugins updated.
- Settings: "Anyone can register" turned off; WooCommerce "Completed order" customer email turned off.
- Orders: 2019 test orders #2414 and #2415 cancelled; #4578 (Nov 2025, $195) marked Completed pending a phone check with the customer; #4458 and #4454 settled.

**Still open:**
1. **WPBakery licence:** WPBakery 8.7.2 can't be updated to 9.1 (security fixes) without a licence. Low risk for now (single admin, no registration, hidden login), but it should be resolved.
2. **Theme licence:** WordPress warns "Your Diwine – Child theme purchase code seems used for other domains too". Ask Sahil where the theme came from; if there is no licence in our name, buy one on ThemeForest and reinstall the theme from the official download (after a fresh backup). This may also cover WPBakery updates, since it is often bundled with the theme.

## 1. "Our Team" photos no longer clickable (homepage)
- **Preview change:** Nick Painter's photo (IMG_6333) and Peter Kirchner's photo (Artboard 11) linked to the theme's demo shop, https://diwine.freevision.me/shop/. The link was removed; the photos display as before but clicking does nothing.
- **Live site (WordPress):** Pages > Home > edit with WPBakery > "Our Team" row > each Single Image element > "On click action" = None (and clear the link field) > Update. Afterwards check that both photos still appear (this theme hides un-linked images unless it adds its own reveal effect).

## 2. All other links to the DiWine demo site removed (32 links on 10 pages)
- **Preview change:** every link pointing to https://diwine.freevision.me/... was removed. The buttons and picture boxes stay on the page but no longer go anywhere.
- **Live site (WordPress):** edit each page with WPBakery, open the element listed, and clear its link (or point it at the matching Valencia Wineries page) > Update.

| Page | Element (button / box text) | Was linking to diwine.freevision.me… |
|---|---|---|
| Estate > Our Land (/estate/our-land/) | PLAN YOUR VISIT NOW button | /visit/ |
| Estate > Our Winemakers (/estate/our-winemakers/) | PLAN YOUR VISIT NOW button | /visit/ |
| Estate > Wine Tourism (/estate/wine-tourism/) | "Private Events" box | /estate/events/ |
| Estate > Wine Tourism | "Restaurant" box | /estate/restaurant/ |
| Estate > Winemaking (/estate/winemaking/) | TO KNOW MORE button | /estate/wine-tourism/ |
| Visit (/visit/) | BOOK NOW button (3 times) | /estate/wine-tourism/#booking |
| Shop > Custom Product Page 02 (/shop/custom-product-page-02/) | CONTINUE SHOPPING button | /shop/ |
| Homepage 02 (/homepage-02/) | "Explore Winery", "Visit Us", "Dining" boxes; OUR WINES button; 3 MORE buttons | /estate/our-land/, /visit/, /estate/restaurant/, /wines/all-wine-series/, /estate/events/, /wine-club/, /news/blog-masonry/ |
| Homepage 03 (/homepage-03/) | ABOUT US, OUR WINES buttons | /estate/about-us/, /wines/all-wine-series/ |
| Homepage 04 (/homepage-04/) | OUR STORY, THE WINES, SHOP ONLINE NOW buttons; "Visit", "Our Vineyards", "Wine Club", "Private Events" boxes | /estate/about-us/, /wines/all-wine-series/, /shop/, /visit/, /estate/our-land/, /wine-club/, /estate/events/ |
| Homepage 05 (/homepage-05/) | same as Homepage 02 | same as Homepage 02 |

Note: Homepage 02–05 are leftover theme demo pages; deleting them in WordPress (Pages > Trash) would be simpler than editing them.

## 3. Leftover demo pages, demo posts and the spam post removed
- **Preview change:** the pages and posts below were deleted from the preview. None of them are in the site menu, and no remaining page links to them.
- **Live site (WordPress):** move each to Trash, then empty the Trash.

**Pages** (WordPress: Pages > All Pages > hover the title > Trash)
| Page | Address |
|---|---|
| Visit (demo stock photos, "BOOK NOW" buttons) | /visit/ |
| Booking an Event (sub-page of Visit) | /visit/booking-an-event/ |
| Homepage 02 | /homepage-02/ |
| Homepage 03 | /homepage-03/ |
| Homepage 04 | /homepage-04/ |
| Homepage 05 | /homepage-05/ |
| Sample Page | /sample-page/ |
| News, Blog Masonry, Blog Mosaic, Blog Regular (only listed the posts below) | /news/, /news/blog-masonry/, /news/blog-mosaic/, /news/blog-regular/ |

**Posts** (WordPress: Posts > All Posts > hover the title > Trash)
| Post | Address |
|---|---|
| **SPAM:** Three Main Articles About Problem Gambling in the UK (links to casino sites) | /three-main-articles-about-problem-gambling-in-the-uk/ |
| 1992 Diwine Cabernet Sauvignon Allegra Valley | /1992-diwine-cabernet-sauvignon-allegra-valley/ |
| Vintage Report: What Made 2016 Such a Marvelous Year for Sangiovese | /vintage-report-what-made-2016-such-a-marvelous-year-for-sangiovese/ |
| Show Us Your Corks: 2018 California Wine Month Cork Photo Contest | /show-us-your-corks-2018-california-wine-month-cork-photo-contest/ |
| DiWine Flies High at Air New Zealand Wine Awards 2018 | /diwine-flies-high-at-air-new-zealand-wine-awards-2018/ |
| Our Selection of Wines for Your Holiday Meals | /our-selection-of-wines-for-your-holiday-meals/ |
| The Size of Our Vineyards Offer You the Best of the 2018 Vintage | /the-size-of-our-vineyards-offer-you-the-best-of-the-2018-vintage/ |
| Japan DiWine Estate Honored at Sakura Awards | /japan-diwine-estate-honored-at-sakura-awards/ |
| Meet Angela Cohen, Wine Ambassador | /meet-angela-cohen-wine-ambassador/ |
| DiWine Winery 2018 Holiday Gift Guide | /diwine-winery-2018-holiday-gift-guide-elegant-gifts-for-wine-lovers/ |

**Category and tag pages** (/category/…, /tag/…) were also removed from the preview because they only listed these posts. Not needed on the live site. They disappear by themselves once the posts are deleted; also delete the categories and tags themselves under Posts > Categories and Posts > Tags (tick all > Bulk actions > Delete; "Uncategorized" can't be deleted, which is fine).

**After deleting the spam post:** change the WordPress admin passwords and check Users for any account you don't recognise. The spam post suggests someone got access.

## 4. Site trimmed to the five menu tabs (61 more pages removed)
- **Keep:** Home, About Us, Wine (the shop), The Vineyard, Contact Us, plus what they need: the 2 wine products (Cabernet Sauvignon 2017 and 2018), the "Reserve" product category, the WooCommerce Cart / Checkout / My Account pages, and the footer pages Privacy Policy, Terms and Conditions, Refund and Returns Policy.
- **Preview change:** every other page was deleted. None were in the menu or linked from the pages above.
- **Live site (WordPress):**

**Pages** (Pages > All Pages > tick > Bulk actions > Move to Trash, then empty Trash)
| Page | Address |
|---|---|
| Estate and all its sub-pages: About1, Coming Soon Page, Events, FAQ, Our History, Our Land, Our Region, Our Winemakers, Restaurant, Tasting Room, Wedding & Events, Wine Tourism, Winemaking | /estate/ and /estate/… |
| Wines 1 and its sub-pages: All Wine Series, Classic, Heritage, Reserve, Sparkling | /wines-1/ and /wines-1/… |
| Wine Club | /wine-club/ |
| Shop 1 (duplicate shop) | /shop-1/ |
| Custom Product Page 01 and 02 | /shop/custom-product-page-01/, /shop/custom-product-page-02/ |
| Where to Buy (demo store-locator map) | /shop/where-to-buy/ |
| Custom Header | /custom-header/ |
| Cart 2, Checkout 2, My Account 2 (duplicates; keep the plain Cart, Checkout, My Account pages) | /cart-2/, /checkout-2/, /my-account-2/ |

Careful: before trashing Cart 2 / Checkout 2 / My Account 2, check WooCommerce > Settings > Advanced > Page setup still points at the plain Cart, Checkout and My Account pages, not the "-2" ones.

**Event calendar** (demo events from the "Timetable and Event Schedule" plugin: weddings, DiWineFest 2019, tastings, dinners…, about 35 pages under /timetable/)
- Timetable > Events > select all > Move to Trash; Timetable > Columns > select all > Move to Trash; empty the Trash.
- Then Plugins > "Timetable and Event Schedule" > Deactivate > Delete (it isn't used anywhere else).

## 5. Footer "Quick Links" removed, Terms and Refund pages deleted (incl. escort spam), short Privacy Policy, demo Login menu removed
- **Preview changes:**
  - Footer: the "Quick Links" column (Privacy Policy, Terms and Conditions, Refund and Returns Policy) is gone from every page. The "Quick Menu" column stays. A small "Privacy Policy" link was added under "©2020 Valencia Wineries. Designed and Developed by ©Techinfinity".
  - Terms and Conditions page deleted. It ended with a planted **escort spam paragraph** linking to nycescortmodels.com.
  - Refund and Returns Policy page deleted (no online sales planned).
  - Privacy Policy replaced with a short policy (contact form only, no tracking, Do Not Track, under-21, your choices, contact). The old long e-commerce policy had ~40 broken links to http://127.0.0.1:5500/... Kept because the Contact Us form collects name, phone and email (California's CalOPPA).
  - "Login / Register" (person icon, top right): its demo drop-down (Pricing, Order, Making Changes, Wine Tasting & What's Included, Refund Issues, Dine & Drink, Vinery Tours, Make a Reservation, Reservation by Calling, Reservation for Large Groups) removed.
- **Live site (WordPress):**
  1. **Footer Quick Links:** Appearance > Widgets > Footer area > remove the "Quick Links" (Custom Menu / Navigation Menu, menu "Footer Menu") widget > Update. Optionally Appearance > Menus > "Footer Menu" > Delete Menu.
  2. **Privacy link in the copyright line:** Appearance > Widgets > Footer area > the block with "©2020 Valencia Wineries…" > add a line "Privacy Policy" linked to /privacy-policy/ > Update.
  3. **Terms and Conditions:** Pages > All Pages > Terms and Conditions > Trash. **Refund and Returns Policy:** same. Empty the Trash. Then WooCommerce > Settings > Advanced > "Terms and conditions" page = none (if set).
  4. **Privacy Policy:** Pages > Privacy Policy > Edit > replace all the text with the new wording on the preview page (https://vivekragavan.github.io/valenciawineries/privacy-policy/) > Update. Settings > Privacy should still point to this page.
  5. **Login / Register drop-down:** Appearance > Menus > select "My Account Menu" > Delete Menu (or remove all its items) > Save. If the person icon is no longer wanted after online sales are switched off, that is part of a later change.
  6. **Security:** after removing the spam, change all WordPress admin passwords and check Users for unknown accounts.

## 6. Footer credit line removed
- **Preview change:** "©2020 Valencia Wineries. Designed and Developed by ©Techinfinity" removed from the footer of every page (it appeared nowhere else). The small "Privacy Policy" link stays in that spot.
- **Live site (WordPress):** Appearance > Widgets > Footer area > the block containing "©2020 Valencia Wineries… Techinfinity" > delete that text, leaving only the "Privacy Policy" link (added in change 5) > Update. If the text isn't in Widgets, look in Appearance > Customize > Footer (theme options) for a "copyright" field.

## 7. Online buying turned off (wine shown, not sold)
- **Preview changes:**
  - Top right of every page: shopping-cart bubble ("$0.00"), its "ORDER LIST" drawer and the "Login / Register" person icon removed. Search icon kept.
  - Wine tab (/shop/): heading "Shop" → "Our Wines"; prices and "Add to cart" buttons removed. Both wines still shown with photos, linking to their pages.
  - Wine pages (Cabernet Sauvignon 2017 and 2018): price, quantity box, "Add to cart", "ADD CASE (1 x 6)", PayPal button, SKU and "Category: Reserve" removed. Description, photos and "Can we interest you in… Something similar" (the other wine) kept.
  - Homepage: the three slideshow "Shop Now" buttons → "See Our Wines"; "Our Signature Wines" slider "BUY NOW" buttons → "VIEW WINE"; the "Shop our Wines" box heading → "Our Wines" and its "Shop Now" button → "See Our Wines". The box text ("…A number of our red wines are ready now") was left as is.
  - "Reserve" wine category page (/product-category/reserve/) deleted.
- **Live site (WordPress):** take WooCommerce out of selling mode while keeping the wine pages:
  1. **Back up first** (Hostinger hPanel > Backups, or a backup plugin).
  2. **Make the wines non-purchasable:** Products > All Products > edit each wine > Product data > General > clear "Regular price" > Update. With no price, WooCommerce hides the price and "Add to cart". (If the theme still shows "ADD CASE", note it and I'll find the setting.)
  3. **PayPal:** WooCommerce > Settings > Payments > turn off PayPal (and any other method).
  4. **Header cart bubble and Login / Register icon:** Appearance > Customize > (theme) Header / WooCommerce options > turn off the cart / account icons. If there's no option, tell me and I'll find where the theme adds them.
  5. **Homepage wording:** Pages > Home > edit with WPBakery:
     - Slideshow (Ozy Hero Slider) > each of the 3 slides > button text "Shop Now" → "See Our Wines".
     - "Our Signature Wines" (Ozy Tilt Product Slider) > each slide > button "BUY NOW" → "VIEW WINE".
     - "Shop our Wines" hover box > heading → "Our Wines"; button "Shop Now" → "See Our Wines". > Update.
  6. **Wine tab heading:** Pages > Shop > edit with WPBakery > heading "Shop" → "Our Wines" > Update.
  7. **Reserve category:** Products > Categories > "Reserve" > Delete (the wines fall back to "Uncategorized").
  8. Optional later: once nothing is sold, the Cart, Checkout and My Account pages can be trashed (Pages), and WooCommerce > Settings > Advanced page settings cleared.

## 8. Contact Us page reduced to one line
- **Preview change:** the Contact Us page now shows only: "For more information, contact us at vivek@ragavan.org" (the address is a clickable email link). Removed: "How can we help?", "Bookings & Inquiries: vivek@ragavan.org", "Our Address" and "SF Wine Lockers, 440 Talbert Street, Daly City, CA – 94014", "Drop a message for us" and the contact form (Enquiry/Feedback, Name, Last Name, Phone, Email, Question/Comments, Send Message), and the Google map of San Francisco Wine Lockers.
- **Privacy Policy updated to match:** "Information we collect" now says the site has no forms and that we only receive what people send by email.
- **Live site (WordPress):**
  1. Pages > Contact Us > edit with WPBakery > delete the two rows below the heading (left column: "How can we help?", "Bookings & Inquiries", "Our Address", address; right column: "Drop a message for us" + contact form; and the map row).
  2. Add a Text Block with: For more information, contact us at vivek@ragavan.org (select the email and link it to mailto:vivek@ragavan.org) > Update.
  3. Optional: Contact > Contact Forms (Contact Form 7) — the form is no longer used; the plugin can be deactivated (Plugins > Contact Form 7 > Deactivate).
  4. Pages > Privacy Policy > Edit > replace the first paragraph under "Information we collect" with: "We do not sell anything through this website, it has no forms, and we do not use advertising or tracking services. If you email us at the address on our Contact Us page, we receive your email address and whatever you choose to include in your message." > Update.
  5. Search description: All in One SEO builds the page description from the page text, so it updates by itself. If Contact Us has a custom description (Pages > Contact Us > Edit > AIOSEO Settings box at the bottom > Meta Description), set it to "For more information, contact us at vivek@ragavan.org".

## 9. "Ragavino Cabernet Sauvignon" added under "Our Wines" (Wine tab)
- **Preview change:** on the Wine tab (/shop/), a second heading "Ragavino Cabernet Sauvignon" sits directly under "Our Wines", same font (Abril Fatface), size and centering. The space below "Our Wines" was reduced so the two lines sit together, with the original space kept before the wine photos.
- **Live site (WordPress):** Pages > Shop > edit with WPBakery > hover the "Our Wines" Custom Heading > Clone (copy icon) > edit the copy: Text = Ragavino Cabernet Sauvignon > Save. Then on the original "Our Wines" heading > Design Options > padding-bottom 10px; on the new heading > Design Options > padding-top 0, padding-bottom 80px > Update. (Without the padding tweak the two lines will just have a bigger gap between them.)

## 10. 2017 wine address fixed, "Something similar" removed, unused demo styles removed
- **Preview changes:**
  - Cabernet Sauvignon 2017's web address changed from the demo leftover /product/2009-white-wine-soave-750ml/ to **/product/cabernet-sauvignon-2017/**; every link to it (homepage, Wine tab, 2018 page) updated.
  - On both wine pages, the "Can we interest you in… / Something similar" section and the other wine's photo under it removed.
  - Two unused style rules removed (About Us and Wine tab) that pointed at stock photos on the DiWine theme's own server (s3-eu-west-1.amazonaws.com/diwine/…). They were invisible; this is tidy-up only.
- **Live site (WordPress):**
  1. **2017 address:** Products > All Products > Cabernet Sauvignon 2017 > Edit > next to the title, "Permalink: …/2009-white-wine-soave-750ml/" > Edit > type cabernet-sauvignon-2017 > OK > Update. (WordPress normally redirects the old address to the new one automatically.) Then check the homepage "Our Signature Wines" slider's "VIEW WINE" button for 2017 still opens the wine; if not, set its link to /product/cabernet-sauvignon-2017/.
  2. **"Can we interest you in… Something similar":** this is WooCommerce's "Related products". Simplest: Appearance > Customize > WooCommerce > Product page (or the theme's WooCommerce options) > turn off Related products. If there's no switch, tell me and I'll give an alternative (a small code snippet or a plugin setting).
  3. **Unused demo styles:** nothing to do by hand; they disappear when About Us and Shop are next saved with WPBakery (Edit > Update).

## 11. Homepage "Our Wines" hover-box sentence reworded
- **Preview change:** on the homepage, the back of the "Our Wines" box (shown when hovering over the wine bottle photo, in the row of three boxes below "About Us") now reads "We have a variety of Ragavino Cabernet Sauvignon wines for you to experience". It used to read "From Cabernet Sauvignon, we have a variety of aged wines for you to experience. A number of our red wines are ready now".
- **Live site (WordPress):** Pages > Home > edit with WPBakery > the Hover Box with the wine bottle photo (heading "Our Wines") > edit > "Back side" content text > replace the sentence > Save > Update.

## 12. Homepage "Our Signature Wines" strip: buttons no longer cut off
- **Problem:** in narrower browser windows (laptop half-screen, small laptops, tablets) the wine names in the black "Our Signature Wines" strip wrap onto three large lines and push the gold "VIEW WINE" buttons below the strip's bottom edge, so only the top half of each button shows. Full-width desktop windows were fine.
- **Preview change:** on screens narrower than 1300px the wine names scale down a little and the strip no longer clips its contents, so the whole button shows. Wide screens look exactly as before.
- **Live site (WordPress):** Appearance > Customize > Additional CSS > paste at the end, then Publish:

```css
/* Our Signature Wines slider: keep wine names and VIEW WINE buttons inside the strip on narrower screens */
@media only screen and (max-width: 1300px) {
  .ozy-tilt_product_slider .carousel-cell>.caption-box h2 { font-size: clamp(18px, 2.6vw, 36px) !important; line-height: 1.25 !important; margin-bottom: 14px !important; }
  .ozy-tilt_product_slider .carousel-cell>.caption-box { top: 45%; }
  .ozy-tilt_product_slider .flickity-viewport { overflow: visible !important; }
  .ozy-tilt_product_slider { padding-bottom: 40px; }
}
```

## 13. Homepage welcome slide: "Producers of Ragavino Cabernet Sauvignon" added
- **Change:** the first homepage slide now reads "Welcome to Valencia Wineries", then the SEE OUR WINES button, then "Producers of Ragavino Cabernet Sauvignon" below the button, so heading and tagline frame the button symmetrically. Same font as the subtitles on slides 2 and 3.
- **Live site:** valenciawineries.org is now the static copy on GitHub Pages (no WordPress); published by rebuilding with `tools/build_live.py --github` and pushing vivekragavan/valenciawineries-live.

## 14. Privacy Policy: postal address removed from "Contact us"
- **Change:** the "Contact us" section at the end of the Privacy Policy no longer shows "Valencia Wineries, 45 Valencia Court, Portola Valley, CA 94028, United States"; only "Email: vivek@ragavan.org" remains.
- **Live site:** published via vivekragavan/valenciawineries-live.
