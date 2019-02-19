jQuery(function ($) { "use strict";
	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
		
	});
	
	$("#features").slick({
		infinite: true,
		arrows:false,
		autoplay: true,
  		autoplaySpeed: 4000
	});
	$("#navigation").sticky({
		topSpacing : 0
	});
	$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, 
    callbacks: {
        beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
});

});

	var wow = new WOW(
		{
		  offset:       100,          
		  mobile:       false     
		}
	 );
	 wow.init();
	var scroll = new SmoothScroll('a[href*="#"]');
	function initialize() {

		var myLatLng = new google.maps.LatLng(22.333851, 91.812256);

		var roadAtlasStyles = [{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#2F3238"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#FFFFFF"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#50525f"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#808080"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#808080"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#3071a7"
			}, {
				"saturation": -65
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#bbbbbb"
			}]
		}];

		var mapOptions = {
			zoom: 14,
			center: myLatLng,
			disableDefaultUI: true,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
			}
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: '',
		});


		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

		var styledMapOptions = {
			name: 'US Road Atlas'
		};

		var usRoadMapType = new google.maps.StyledMapType(
			roadAtlasStyles, styledMapOptions);

		map.mapTypes.set('roadatlas', usRoadMapType);
		map.setMapTypeId('roadatlas');
	}

	google.maps.event.addDomListener(window, "load", initialize);

