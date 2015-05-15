$(document).ready(function() {
	var removerMarkArr = [];
	var removedHotel;
	var removedRestaurant;
	var removedThing;

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
		removerMarkArr.push({keyName: hotelChoice, marker: hotMarker, day: dayTracker, type: "hotel", location: hLocay});
		console.log(hLocay);
		console.log(hotMarker);
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
		removerMarkArr.push({keyName: restaurantChoice, marker: resMarker, day: dayTracker, type: "restaurant", location: rLocay});
		console.log(removerMarkArr);

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
		removerMarkArr.push({keyName: thingToDo, marker: ttMarker, day: dayTracker, type: "thingtodo", location: tTD});
		console.log(removerMarkArr);
	});

	$(".list-group1").delegate("#remove1", "click", function() {
		var hotelTarg = $("#hotel-input").text();
		$("#itenar1div").remove();
		// var removedHotel;
		for (var i = 0; i < removerMarkArr.length; i++) {
			if(removerMarkArr[i].keyName === hotelTarg) {
				removerMarkArr[i].marker.setMap(null);
				removerMarkArr.splice(i, 1);
				console.log(removerMarkArr);
			}
		};
	});


	$(".list-group2").delegate("#remove21", "click", function() {
		console.log("we removed a hotel");
		var restaurantTarg = $("#restaurant-input").text();
		console.log($("#restaurant-input"));
		$("#itenar21div").remove();
		// var removedRestaurant;
		for (var i = 0; i < removerMarkArr.length; i++) {
			if(removerMarkArr[i].keyName === restaurantTarg) {
				removerMarkArr[i].marker.setMap(null);
				removerMarkArr.splice(i, 1);
				console.log(removerMarkArr);
			}
		};
	});


	$(".list-group3").delegate("#remove31", "click", function() {
		console.log("we removed a hotel");
		var ttdTarg = $("#thingtodo-input").text();
		$("#itenar31div").remove();
		// var removedThing;
		for (var i = 0; i < removerMarkArr.length; i++) {
			if(removerMarkArr[i].keyName === ttdTarg) {
				removerMarkArr[i].marker.setMap(null);
				removerMarkArr.splice(i, 1);
				console.log(removerMarkArr);
			}
		};

	});

	var butCounter = 1;
	$(".day-buttons").delegate("#day-button-matcher", "click", function() {
			dayTracker = $(this).text();
			// if($("#itenar1div") !== undefined || $("#itenar21div") !== undefined || $("#itenar31div") !== undefined) {
				$(".list-group1").empty();
				$(".list-group2").empty();
				$(".list-group3").empty();
				removerMarkArr.forEach(function(itnObj) {
					// if (itnObj.day !== dayTracker) {
						itnObj.marker.setMap(null);
					// }
					if(itnObj.day === dayTracker) {
						if(itnObj.type === "hotel") {
							$(".list-group1").append('<div class="itinerary-item" id="itenar1div"><span class="title" id="hotel-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove1">x</button></div>');
							$("#hotel-input").text(itnObj.keyName);
						drawLocation(itnObj.location);
						}
						if(itnObj.type === "restaurant") {
							$(".list-group2").append('<div class="itinerary-item" id="itenar21div"><span class="title" id="restaurant-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove21">x</button></div>');
							$("#restaurant-input").text(itnObj.keyName);
						drawLocation(itnObj.location);
						}
						if(itnObj.type === "thingtodo") {
							$(".list-group3").append('<div class="itinerary-item" id="itenar31div"><span class="title" id="thingtodo-input"></span><button class="btn pull-right btn-xs btn-danger remove btn-circle" id="remove31">x</button></div>');
							$("#thingtodo-input").text(itnObj.keyName);
						drawLocation(itnObj.location);
						console.log(itnObj.location);
						console.log(itnObj.marker);
						}
					}
				});
			// }
		console.log("it kinda works");
	});
	var dayTracker;


	$("#day-adder").on("click", function() {
		$('<button class="btn btn-circle day-btn current-day" id="day-button-matcher">'+butCounter+'</button>').insertBefore('#day-adder');
		butCounter ++;

	});

});