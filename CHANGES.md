# Changes to carry over to the live site (valenciawineries.org)

Each change made in this preview copy, and how to make it in WordPress.

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
