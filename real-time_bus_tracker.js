mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhZ3Vzc29uaSIsImEiOiJja3M3OW1haHMwaW1lMnVwczc0YnN6OW5jIn0.me0IHFk903TP1wMuumH6uw'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-71.10274708825546,42.34079360971765],
    zoom: 12
});

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	var marker = new mapboxgl.Marker({'color': '#0000ff'})
	.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude])
	.addTo(map)
	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=8&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

var collegeMarker = new mapboxgl.Marker({'color': '#ffd700'})
.setLngLat([-71.10274708825546,42.34079360971765])
.addTo(map)


