/*global jQuery,L,ozyStoreLocatorData,ozyStoreLocatorSettings,ozy_headerType,ozyCheckFirefox */

L.mapbox.accessToken = ozyStoreLocatorSettings.api_key;

var separator = "";
var mapData = jQuery.parseJSON(ozyStoreLocatorData);
var geojson = '[{"type": "FeatureCollection","features": [';
mapData.forEach(function(key) {
	"use strict";
	geojson += separator + '{"type": "Feature", "geometry": {"type": "Point","coordinates": ['+ key[3] +', '+ key[2] +']},"properties": {"image": "","websiteText": "","url":"","property": "'+ key[0] +'", "firm": "",              "country": "", "crossStreet": "'+ key[1] +'", "phoneNumber": "'+ key[5] +'", "rank": "0", "ora": "0", "state": "", "icon": "'+ (key[4] ? key[4] : ozy_headerType.theme_url + '/images/assets/placeholder.png') +'"}}';
	separator = ",";
});
geojson += ']}]';

geojson = jQuery.parseJSON(geojson);

var map = L.mapbox.map(ozyStoreLocatorSettings.el_id, 'hanleywood.kv1s8aor').setView([ozyStoreLocatorSettings.latitude,ozyStoreLocatorSettings.longitude], ozyStoreLocatorSettings.zoom);

map.scrollWheelZoom.disable();

var listings = document.getElementById('listings');
var locations = L.mapbox.featureLayer().addTo(map);

locations.setGeoJSON(geojson);

function setActive(el) {
	"use strict";
	var siblings = listings.getElementsByTagName('div');
	for (var i = 0; i < siblings.length; i++) {
		siblings[i].className = siblings[i].className.replace(/active/, '').replace(/\s\s*$/, '');
	}

	el.className += ' active';
}

locations.eachLayer(function(locale) {
	"use strict";
	// Shorten locale.feature.properties to just `prop` so we're not
	// writing this long form over and over again.
	var prop = locale.feature.properties;

	// Each marker on the map.
	var popup = '<h3>'+ prop.property + '</h3>';

	var listing = listings.appendChild(document.createElement('div'));
	listing.className = 'item';

	var link = listing.appendChild(document.createElement('a'));
	link.href = '#';
	link.className = 'title';

    link.innerHTML = prop.property;
    if (prop.crossStreet) {
		link.innerHTML += '</br><small class="quiet">' + prop.crossStreet + '<br>' + prop.phoneNumber + '</small>';
		popup += '<p>' + prop.crossStreet + '<br>' + prop.phoneNumber + '</p>';
    }

    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.firm;
    if (prop.websiteURL) {
		details.innerHTML;
    }

    link.onclick = function() {
		setActive(listing);

		// When a menu item is clicked, animate the map to center
		// its associated locale and open its popup.
		map.setView(locale.getLatLng(), 16);
		locale.openPopup();
		return false;
    };

    // Marker interaction
    locale.on('click', function() {
		// 1. center the map on the selected marker.
		map.panTo(locale.getLatLng());

		// 2. Set active the markers associated listing.
		setActive(listing);
    });

    popup += '</div>';
    locale.bindPopup(popup);

    locale.setIcon(L.icon({
		iconUrl: prop.icon,
		iconSize: [32, 32],
		iconAnchor: [19, 19],
		popupAnchor: [0, -26]
    }));
	
	setTimeout(function(){ jQuery(window).resize(); map.invalidateSize(); }, 500);
	
	if(!ozyCheckFirefox()) {
		jQuery('#listings').niceScroll({autohidemode:"false", cursorwidth: "5px", cursorcolor: jQuery('.menu-circle').css('border-color'), cursorborder: "none"});															
	}else{
		jQuery('#listings').css('overflow-y', 'scroll');
	}
	jQuery('#listings').scrollLock();	
});