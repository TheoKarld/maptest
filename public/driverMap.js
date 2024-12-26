var maper = (() => {
  var map_1 = "",
    map_2 = "",
    key = "7OevsHku8lQwYYKVGxtt",
    acuObj = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0,
    },
    def = new L.LatLng(9.7866631, 8.8525467),
    mapTiles = {
      satelite: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      terrain: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    };

  //map initialization object
  function startmap() {
    if (map_1) return;
    map_1 = newmap("map");
    geoposition(map_1);
    map_1.map.on("click", (e) => {
      onMapClick(e, map_1);
    });
    buttonup(map_1, "map_1_rack");
    //loopmarks(map_1);
  }
  function loopmarks(mp) {
    setInterval(myf1, 5000);
    function myf1() {
      for (var i in mapCoords) {
        if (!ocn(mapCoords[i])) continue;
        if (!mp.markers[i]) {
          clg(i);
          var mark = L.marker([mapCoords[i].latitude, mapCoords[i].longitude]);
          mark.addTo(mp.map).bindPopup(`<h1>${i}</h1>`).openPopup();
          mp.markers[i] = mark;
        } else {
          mp.markers[i].setLatLng(
            new L.LatLng(mapCoords[i].latitude, mapCoords[i].longitude)
          );
        }
      }
    }
  }
  //add function buttons to map

  function buttonup(o, id) {
    var rd = document.getElementById(id),
      loc = DIV("", "m-2 widthun", "", [
        par(user.username),
        par(`driver's ID - ${uid}`),
      ]);
    o.lock = loc;
    feedme(rd, [
      DIV("", "m-2 my-3", "", [
        loc,
        but("Toggle Tracking", "button", "key3", "btn btn-md btn-primary"),
      ]),
    ]);
    function myf1() {
      o.track = o.track ? false : true;
      trackable = o.track;
      alert(o.track ? "Tracking Active" : "Tracking Deactivated...");
      fetch(`/mapAuth/track/${uid}/${o.track ? "on" : "off"}`, {
        method: "GET",
        headers: { accessToken: driverToken },
      })
        .then((resp) => {})
        .catch((err) => {});
    }
    function myf2() {
      alert("please click any where once to mark point");
      o.mark = true;
    }
    function myf3() {
      alert("Mark 1 Set");
      if (!o.mark_1) {
        o.mark_1 = new L.LatLng(def.lat, def.lng);
      } else {
      }
    }
    addEvent(rd, "click", (e) => {
      e = ee(e);
      if (e.id == "key1") myf1s(true);
      if (e.id == "key2") myf1(false);
      if (e.id == "key3") myf1();
      if (e.id == "key4") myf3();
    });
  }

  function coordistance(o) {
    var v1 = !o.km
      ? o.map.distance(o.dist_1, o.dist_2).toFixed(2)
      : rnd(o.map.distance(o.dist_1, o.dist_2) / 1000, 2);
    clg(v1);
    return v1;
  }

  function newmap(v, fnc) {
    var map = L.map(v, {
        center: L.latLng(9.7866631, 8.8525467),
        zoom: 5,
        measureControl: true,
        "pointer-event": "none",
        minZoom: 1,
      }),
      eo = { map: map, markers: {}, track: false, mark_1: "" };
    L.Control.geocoder().addTo(map);
    //mapinteraction(map, true); //https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}
    L.tileLayer(mapTiles.terrain, {
      //style URL
      tileSize: 512,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      zoomOffset: -1,
      minZoom: 2,
      crossOrigin: true,
      detectRetina: true,
    }).addTo(map);
    map
      .locate({ setView: false, watch: false })
      .on("locationfound", function (e) {
        //liveTrack(eo, e);
      })
      .on("locationerror", function (e) {
        console.log(e);
        eo.error = e;
        alert("Location access denied.");
      });

    return eo;
  }

  //map loaction marker function
  function onMapClick(e, map) {
    clg(e);
    //map_1.map.setView(new L.LatLng(e.latlng.lat, e.latlng.lng), 6);
    var dis = coordistance({
      map: map.map,
      dist_1: new L.LatLng(e.latlng.lat, e.latlng.lng),
      dist_2: def,
      km: true,
    });
    if (map.mark) {
      L.popup()
        .setLatLng(e.latlng)
        .setContent(`You are currently ${dis}K/M away from this position`)
        .openOn(map.map);
      map.mark = false;
    }
  }

  //live tracking function
  function geoposition(mp) {
    if (!navigator.geolocation) {
      alert("device not allowing live tracking!!");
      return;
    }
    navigator.geolocation.watchPosition(
      (res) => {
        liveTrack(mp, res.coords);
      },
      errFnc,
      acuObj
    );

    function errFnc(err) {
      clg("position error");
      clg(err);
    }
  }
  function iconer(c) {
    var icon = L.divIcon({
      iconSize: [17, 17],
      iconAnchor: [10, 10],
      popupAnchor: [0, 0],
      shadowSize: [10, 0],
      className: c,
    });
    return icon;
  }
  function liveTrack(mp, res) {
    var { latitude, longitude } = res,
      v1 = new L.LatLng(latitude, longitude),
      v2;
    def = v1;
    clg("geoposition log");
    if (mp.lock && mp.mark_1) {
      v2 = coordistance({ map: mp.map, dist_1: mp.mark_1, dist_2: v1 });
      mp.lock.innerHTML = `You are currently ${v2}Metres away from your Mark 1`;
    }
    if (!mp.markers[uid]) {
      def = new L.LatLng(latitude, longitude);
      var ic = iconer("animated-icon-2"),
        marker = L.marker([latitude, longitude], {
          icon: ic,
          title: user.usernme,
        });
      mp.markers[uid] = marker;
      marker.addTo(mp.map).bindPopup(`<h1>${user.username}</h1>`).openPopup();
      mp.map.setView(def, 19);
    } else {
      mp.markers[uid].setLatLng(v1);
      if (mp.track) {
        //mp.map.setView(def, 18);
        mp.map.panTo(v1);
        clg("new marker location set");
      } else {
        clg("tracking disabled");
      }
    }
    clg("LatLng data");
    sendmylocation({
      latitude,
      longitude,
      time: datemap(),
    });
  }

  function mapinteraction(map, state) {
    if (state) {
      map.dragging.enable();
      clg(map);
      map.scrollWheelZoom.enable();
    }
  }

  async function sendmylocation(o) {
    fetch("/mapAuth/location", {
      method: "POST",
      headers: { accessToken: driverToken, "Content-Type": "application/json" },
      body: Js(o),
    })
      .then(async (resp) => {
        var data = await resp.json();
      })
      .catch((err) => {
        clg(err);
      });
  }

  return {
    init: startmap,
  };
})();

//static
// googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
//   maxZoom: 20,
//   subdomains:['mt0','mt1','mt2','mt3']
// });
// Hybrid,

// googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
//   maxZoom: 20,
//   subdomains:['mt0','mt1','mt2','mt3']
// });
// satellite,

// googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//   maxZoom: 20,
//   subdomains:['mt0','mt1','mt2','mt3']
// });
// Terrain

// googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
//   maxZoom: 20,
//   subdomains:['mt0','mt1','mt2','mt3']
// });
// Note that difference in the "lyrs" parameter in the URL:

// Hybrid: s,h;
// Satellite: s;
// Streets: m;
// Terrain: p;
