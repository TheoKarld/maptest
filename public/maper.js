var maper = (() => {
  var map_1 = "",
    map_2 = "",
    key = "7OevsHku8lQwYYKVGxtt",
    acuObj = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0,
    },
    def = new L.LatLng(9.7866631, 8.8525467),
    mapTiles = {
      static: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      hybrid: "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      satelite: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      terrain: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    };

  //map initialization object
  function startmap() {
    if (map_1) return;
    map_1 = newmap("map");
    geolocate(map_1);
    map_1.map.on("click", (e) => {
      onMapClick(e, map_1);
    });
    buttonup(map_1, "map_1_rack");

    // map_2 = newmap("map2");
    // geolocate(map_2);
    // buttonup(map_2, "map_2_rack");
  }

  //add function buttons to map
  function buttonup(o, id) {
    var rd = document.getElementById(id),
      loc = DIV("", "m-2 widthun");
    o.lock = loc;
    feedme(rd, [
      DIV("", "m-2 my-3", "", [
        loc,
        but("start tracking", "button", "key1", "btn btn-md btn-success"),
        but("stop tracking", "button", "key2", "btn btn-md btn-warning"),
        but("mark location", "button", "key3", "btn btn-md btn-primary"),
        but("mark distance", "button", "key4", "btn btn-md btn-primary"),
      ]),
    ]);
    function myf1(v) {
      o.track = v;
      alert(v ? "Tracking Active" : "Tracking Deactivated...");
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
      if (e.id == "key1") myf1(true);
      if (e.id == "key2") myf1(false);
      if (e.id == "key3") myf2();
      if (e.id == "key4") myf3();
    });
  }
  //get the distance between two coords in k/m
  function coordistance(o) {
    //o.map.distance(o.dist_1, o.dist_2).toFixed()
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
      eo = { map: map, markers: {}, track: true, mark_1: "" };
    mapinteraction(map, true); //https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}
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
        //clg(e);

        // var circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
        //   weight: 1,
        //   color: "blue",
        //   fillColor: "#cacaca",
        //   fillOpacity: 0.2,
        // });

        if (!eo.markers.myMark) {
          def = new L.LatLng(e.latitude, e.longitude);
          var marker = L.marker([e.latitude, e.longitude]);
          eo.markers.myMark = marker;
          map.addLayer(marker);
          map.setView(def, 19);
        }
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
    navigator.geolocation.watchPosition(respFnc, errFnc, acuObj);

    function respFnc(res) {
      var v1 = new L.LatLng(res.coords.latitude, res.coords.longitude),
        v2;
      def = v1;
      clg("geoposition log");
      if (mp.lock && mp.mark_1) {
        v2 = coordistance({ map: mp.map, dist_1: mp.mark_1, dist_2: v1 });
        mp.lock.innerHTML = `You are currently ${v2}Metres away from your Mark 1`;
      }
      if (mp.markers && mp.markers.myMark) {
        if (mp.track) {
          mp.markers.myMark.setLatLng(v1);
          //mp.map.setView(def, 18);
          mp.map.panTo(v1);
          clg("new marker location set");
        } else {
          clg("tracking disabled");
        }
      }
      clg("LatLng data");
      sendmylocation({ user: "", coords: { ...v1 } });
    }
    function errFnc(err) {
      clg("position error");
      clg(err);
    }
  }

  function mapinteraction(map, state) {
    if (state) {
      map.dragging.enable();
      clg(map);
      map.scrollWheelZoom.enable();
    }
  }
  async function geolocate(mp) {
    await L.Control.geocoder().addTo(mp.map);
    geoposition(mp);
  }

  async function sendmylocation(o) {
    // clg(o);
    //var ax = await fetch("/myLocation", { method: "POST", body: Js(o) });
    //clg(ax);
    //sendxml({ t: "data", o: o, r: "/myLocation" });
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
