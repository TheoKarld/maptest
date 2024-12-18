var maper = (() => {
  var map_1 = "",
    map_2 = "",
    key = "7OevsHku8lQwYYKVGxtt",
    acuObj = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    },
    def = [9.7866631, 8.8525467];

  function startmap() {
    if (map_1) return;
    map_1 = newmap("map");
    geolocate(map_1);
    buttonup(map_1, "map_1_rack");

    // map_2 = newmap("map2");
    // geolocate(map_2);
    // buttonup(map_2, "map_2_rack");
  }

  function buttonup(o, id) {
    var rd = document.getElementById(id),
      loc = DIV("", "m-2 widthun");
    o.lock = loc;
    feedme(rd, [
      DIV("", "m-2 my-3", "", [
        loc,
        but("start tracking", "button", "key1", "btn btn-md btn-success"),
        but("stop tracking", "button", "key2", "btn btn-md btn-warning"),
      ]),
    ]);
    function myf1(v) {
      o.track = v;
    }
    addEvent(rd, "click", (e) => {
      e = ee(e);
      if (e.id == "key1") myf1(true);
      if (e.id == "key2") myf1(false);
    });
  }

  function newmap(v, fnc) {
    var map = L.map(v, {
        center: L.latLng(0, 0),
        zoom: 5,
        measureControl: true,
        "pointer-event": "none",
        minZoom: 1,
      }),
      eo = { map: map, markers: {}, track: true };
    mapinteraction(map, true);
    L.tileLayer(
      `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
      {
        //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 2,
        crossOrigin: true,
        detectRetina: true,
      }
    ).addTo(map);
    map
      .locate({ setView: true, watch: true })
      .on("locationfound", function (e) {
        //clg(e);

        // var circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
        //   weight: 1,
        //   color: "blue",
        //   fillColor: "#cacaca",
        //   fillOpacity: 0.2,
        // });
        if (!eo.markers.myMark) {
          var marker = L.marker([e.latitude, e.longitude]);
          eo.markers.myMark = marker;
          map.addLayer(marker);
        } else {
          var v1 = new L.LatLng(e.latitude, e.longitude);
          if (!eo.view) {
            map.setView(v1, 5);
            eo.view = true;
          }
          clg("new marker location set");
          if (eo.track) {
            eo.markers.myMark.setLatLng(v1);
          } else {
            clg("tracking disabled");
          }
        }
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
      var v1 = new L.LatLng(res.coords.latitude, res.coords.longitude);
      clg("geoposition log");
      if (mp.lock)
        mp.lock.innerHTML = `Lat - ${res.coords.latitude} / Lng - ${res.coords.longitude}`;
      if (mp.markers && mp.markers.myMark) {
        if (mp.track) {
          mp.markers.myMark.setLatLng(v1);
          clg("new marker location set");
        } else {
          clg("tracking disabled");
        }
      }
      clg(res);
      clg("LatLng data");
      clg(v1);
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
    clg(o);
    //var ax = await fetch("/myLocation", { method: "POST", body: Js(o) });
    //clg(ax);
    //sendxml({ t: "data", o: o, r: "/myLocation" });
  }

  return {
    init: startmap,
  };
})();
