var app = angular.module('Myapp', []);

app.controller('MyCon', function($scope,$http) {
  $scope.name = 'alldata';
  $scope.notify = function( message ){
    alert( message || 'clicked' );
	  var container = document.getElementById('but');
	$('#submit-btn').remove(); 
    $('#par2').remove(); 
	
	var urlA = "http://localhost:3000/test?callback=JSON_CALLBACK";
	
$http.jsonp(urlA)
    .success(function(data){

		console.log(data);
		
		angular.forEach(data, function(item){
				   console.log(item.status);
				   
			$('#section').append('<li class="article">'+'<p>'+'status : '+ item.status
			+'</p>' +'<p>'+'details:'+item.body+'</p>'+'<p>'+'created on:'+item.created_on+'</p>'+'</li>');
  
               })
		
		
    });
	

  }
  
});
