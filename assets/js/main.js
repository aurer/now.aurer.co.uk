// Setup the canvas

// Draw the main infogram
Now.init().draw();

// Draw the labels
Labels.init().draw();

// Draw the markers
Markers.init().draw();

// Refresh the markers every 2 seconds
setInterval(function(){
	Markers.draw();
}, 2000);


navigator.geolocation.getCurrentPosition(function(a){
	var lat = a.coords.latitude;
	var lng = a.coords.longitude;
	
	var request = new XMLHttpRequest();
	request.onload = reqListener;
	request.responseType = 'json';
	request.open('get', '/sun.php?lat=' + lat + '&lng=' + lng, true);
	request.send();
});


function reqListener () {
  var sunrise = this.response.sunrise;
  var sunset = this.response.sunset;
  Now.drawSegments(Now.skySegments(sunrise, sunset), 26.5, .5);
}