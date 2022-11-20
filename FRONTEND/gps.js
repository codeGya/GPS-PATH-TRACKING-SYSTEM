let map
let point

function initMap(){
    navigator.geolocation.getCurrentPosition(getCoordinates)
    
    async function getCoordinates(x)
    {
        const data={
            latitude:x.coords.latitude,
            longitude:x.coords.longitude,
            particularTime:x.timestamp

        }
        axios.post('http://localhost:5000/save/coord/daily',data)
        point=new google.maps.LatLng(x.coords.latitude, 
            x.coords.longitude)

        map = new google.maps.Map(document.getElementById("map") , {
            center:point,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });

          new google.maps.Marker({
            position: point,
            map: map
          });

    }


  
}

async function autoupdate()
{

    navigator.geolocation.getCurrentPosition(getCoordinates)
    
    async function getCoordinates(x)
    {
        const data={
            latitude:x.coords.latitude,
            longitude:x.coords.longitude,
            particularTime:x.timestamp

        }
        axios.post('http://localhost:5000/save/coord/daily',data)
        point=new google.maps.LatLng(x.coords.latitude, 
            x.coords.longitude)

        map = new google.maps.Map(document.getElementById("map") , {
            center:point,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });

          new google.maps.Marker({
            position: point,
            map: map
          });

          

     
          setInterval(autoupdate,60000)
    }



}
autoupdate()
