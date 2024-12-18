var maper = (() => {
  var map_1 = "",
    map_2 = "",
    key = "7OevsHku8lQwYYKVGxtt",
    acuObj = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  function startmap() {
    if (map_1) return;
    map_1 = newmap("map");
    geolocate(map_1.map);
    map_2 = newmap("map2");
    geolocate(map_2.map);
  }

  function newmap(v, fnc) {
    var map = L.map(v, {
        center: L.latLng(0, 0),
        zoom: 13,
      }),
      eo = { map: map, markers: {} };

    L.tileLayer(
      `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
      {
        //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        crossOrigin: true,
        detectRetina: true,
      }
    ).addTo(map);
    map
      .locate({ setView: true, watch: true })
      .on("locationfound", function (e) {
        //clg(e);
        var marker = L.marker([e.latitude, e.longitude]);
        // var circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
        //   weight: 1,
        //   color: "blue",
        //   fillColor: "#cacaca",
        //   fillOpacity: 0.2,
        // });
        eo.markers.myMark = marker;
        map.addLayer(marker);
        map.setView(new L.LatLng(e.latitude, e.longitude), 13);
      })
      .on("locationerror", function (e) {
        console.log(e);
        eo.error = e;
        alert("Location access denied.");
      });

    return eo;
  }

  function geoposition(mp) {
    if (!navigator.geolocation) {
      alert("device not allowing live tracking!!");
      return;
    }
    navigator.geolocation.watchPosition(respFnc, errFnc, acuObj);

    function respFnc(res) {
      clg("geoposition log");
      mp.setView(new L.LatLng(res.coords.latitude, res.coords.longitude), 13);
      clg(res);
      clg("LatLng data");
      clg(new L.LatLng(res.coords.latitude, res.coords.longitude));
    }
    function errFnc(err) {
      clg("position error");
      clg(err);
    }
  }

  async function geolocate(mp) {
    await L.Control.geocoder().addTo(mp);
    geoposition(mp);
  }

  return {
    init: startmap,
  };
})();
