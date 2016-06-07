var express = require('express');
var router = express.Router();
var db = require('../db');
var jsonfile = require('jsonfile');

// example data
// var currentdate = new Date(); 
// var date = currentdate.getDate() + "/"
// + (currentdate.getMonth()+1)  + "/" 
// + currentdate.getFullYear();
// var time = currentdate.getHours() + ":"  
// + currentdate.getMinutes() + ":" 
// + currentdate.getSeconds();
// data = {
// 	tags:["cool","learning"],
// 	title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
// 	subtitle:"",
// 	date: date,
// 	time:time,
// 	goals: [
// 		["FCC", 9],
// 		['QuodeCopter', 3],
// 		['Money Reading', 2]
// 	]
// }


router.get('/', function(req, res) {

	db.find({
		
	}, function(err, data){
		res.json(data);
	})
});

router.get('/post/list', function (req, res) {
	db.find({}, function(err, data) {
		res.json(data);
	});
});

router.post('/post/add', function (req, res) {
	var highlightData = {
		title: req.body.title,
		tags: req.body.tags,
		date: new Date()
	};
	db.insert(highlightData, function(err, data) {
		var file =  'data/posts/' + data._id + '.json';
		console.log(file);
		jsonfile.writeFile(file, req.body, {spaces: 4}, function (err) {
			console.log(err);
			res.json({success:true});
		});
	});
});


module.exports = router;
