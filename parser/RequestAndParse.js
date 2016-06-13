var fooTestData = {data: "data"};
var request = require("request"); // importing request model .



exports.setApp = function (app) {

app.use('/test',function(req,res){

request({
  uri: "https://status.github.com/api/messages.json",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function(error, response, body) {
	
  //console.log(body);
 // console.log(response);
    res.setHeader('Content-Type', 'application/jsonp');
  //res.send((body));
  res.jsonp(body);
});
	
	
});

 

    // more REST stuff and other foo-specific code
};








