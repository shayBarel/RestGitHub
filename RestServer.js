var express = require('express');   // using ths server downloaded fron node js.
var app = express();				// express server model .
require('./parser/RequestAndParse.js').setApp(app); // requset model from server .




app.listen(3000,function(){
	
	console.log('app is listening on 3000...');
	
});	