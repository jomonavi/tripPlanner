$(document).ready(function() {
	var removerMarkArr = [];
	$("#add-Hbutton").on("click", function(){
		var hotelChoice = $("#hotel-select").val();
		$(".list-group1").append('<div class="itinerary-item" id="itenar1div"><span class="title" id="hotel-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove1">x</button></div>');
		$("#hotel-input").text(hotelChoice);
		var hLocay;
		all_hotels.forEach(function(hotel) {
			if(hotelChoice === hotel.name) {
				hLocay = hotel.place["0"].location;
			}
		});
		var hotMarker = drawLocation(hLocay);
		removerMarkArr.push({keyName: hotelChoice, marker: hotMarker});
	});

	$("#add-Rbutton").on("click", function(){
		var restaurantChoice = $("#restaurant-select").val();
		$(".list-group2").append('<div class="itinerary-item" id="itenar21div"><span class="title" id="restaurant-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove21">x</button></div>');
		$("#restaurant-input").text(restaurantChoice);
		var rLocay;
		all_restaurants.forEach(function(restaurant) {
			if(restaurantChoice === restaurant.name) {
				rLocay = restaurant.place["0"].location;
			}
		});
		var resMarker = drawLocation(rLocay);
		removerMarkArr.push({keyName: restaurantChoice, marker: resMarker});
	});

	$("#add-Tbutton").on("click", function(){
		var thingToDo = $("#thingtodo-select").val();
		$(".list-group3").append('<div class="itinerary-item" id="itenar31div"><span class="title" id="thingtodo-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove31">x</button></div>');
		$("#thingtodo-input").text(thingToDo);
		var tTD;
		all_things_to_do.forEach(function(aThing) {
			if(thingToDo === aThing.name) {
				tTD = aThing.place["0"].location;
			}
		});
		var ttMarker = drawLocation(tTD);
		removerMarkArr.push({keyName: thingToDo, marker: ttMarker});
	});

	$(".list-group1").delegate("#remove1", "click", function() {
		var hotelTarg = $("#hotel-input").text();
		$("#itenar1div").remove();
		var removedHotel;
		removerMarkArr.forEach(function(hotel) {
			if(hotelTarg === hotel.keyName) {
				removedHotel = hotel;
			}
		});
		removedHotel.marker.setMap(null);
	});


	$(".list-group2").delegate("#remove21", "click", function() {
		console.log("we removed a hotel");
		var restaurantTarg = $("#restaurant-input").text();
		console.log($("#restaurant-input"));
		$("#itenar21div").remove();
		var removedRestaurant;
		removerMarkArr.forEach(function(restaurant) {
			if(restaurantTarg === restaurant.keyName) {
				// console.log(removedRestaurant);
				removedRestaurant = restaurant;
			}
		});
		// console.log(removedRestaurant);
		removedRestaurant.marker.setMap(null);
	});


	$(".list-group3").delegate("#remove31", "click", function() {
		console.log("we removed a hotel");
		var ttdTarg = $("#thingtodo-input").text();
		$("#itenar31div").remove();
		var removedThing;
		removerMarkArr.forEach(function(thing) {
			if(ttdTarg === thing.keyName) {
				// console.log(removedRestaurant);
				removedThing = thing;
			}
		});
		// console.log(removedRestaurant);
		removedThing.marker.setMap(null);

	});

	var count = 2;


	$("#day-adder").on("click", function() {
		$('<button class="btn btn-circle day-btn current-day">'+count+'</button>').insertBefore('#day-adder');
		count ++;

	});

});