var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');
var Promise = require('bluebird');

/*
--Callback Hell Method
Hotels
	Restaurants
		thingsToDo   --code below follows a synchronous flow
*/

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	models.Hotel.find({}, function(err, hotels) {
//     	models.Restaurant.find({}, function(err, restaurants) {
//         	models.ThingToDo.find({}, function(err, thingsToDo) {
// 	            res.render('index', {
// 	                all_hotels: hotels,
// 	                all_restaurants: restaurants,
// 	                all_things_to_do: thingsToDo
// 	            });
// 	        });
// 	    });
// 	});
// });

//method 2: async
// var async = require('async');
// router.get('/', function(req, res, next) {
// 	async.parallel({
// 		hotels: function(done) {
// 			models.hotel.find(done)
// 		},
// 		restaurants: function(done) {
// 			models.restaurants.find(done)
// 		},
// 		thingsToDo: function(done) {
// 			models.thingToDo.find(done)
// 		},

// 	}, function(err, resultHash) {
// 		res.json(resultHash)
// 	})
// })

router.get('/', function(req, res, next) {
  Promise.join(
    models.Restaurant.find().exec(),
    models.ThingToDo.find().exec(),
    models.Hotel.find().exec()
  )
  .spread(function(restaurants, thingsToDo, hotels) {
    res.render('index', {
      hotels: hotels,
      restaurants: restaurants,
      thingsToDo: thingsToDo
    })
  })
})



module.exports = router;
