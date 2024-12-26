var maper = (() => {
  var map_1 = "",
    map_2 = "",
    key = "7OevsHku8lQwYYKVGxtt",
    acuObj = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0,
    },
    def = new L.LatLng(9.7869931, 8.8525467),
    mapTiles = {
      satelite: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      terrain: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    },
    driver = "";

  //map initialization object
  function startmap() {
    if (map_1) return;
    map_1 = newmap("map");
    geoposition(map_1);
    map_1.map.on("click", (e) => {
      onMapClick(e, map_1);
    });
    map_1.lock = document.getElementById("map_1_rack");
    loopmarks(map_1);
  }
  function loopmarks(mp) {
    setInterval(myf1, 3000);
    function myf1() {
      if (offMap) return;
      if (ocn(driverCoords) && mp.track) mp.track = false;
      if (driverCoords) {
        var { id, name, coord } = driverCoords,
          { latitude, longitude } = coord,
          lat = new L.LatLng(latitude, longitude),
          dist = coordistance({
            map: mp.map,
            dist_1: def,
            dist_2: lat,
            km: true,
          });
        mp.lock.textContent = `You are currently tracking ${name} who is currently ${dist}K/M away from You`;
        if (!mp.markers[id]) {
          clg(id);
          var ic = iconer("animated-icon-2"),
            mark = L.marker([latitude, longitude], { icon: ic, title: name });
          mark.addTo(mp.map).bindPopup(`<h1>${name}</h1>`).openPopup();
          mp.markers[id] = mark;
          mp.map.setView(lat, 17);
        } else {
          mp.markers[id].setLatLng(lat).openPopup();
          mp.map.panTo(lat);
        }
      }
    }
  }
  //add function buttons to map
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
    L.Control.geocoder().addTo(map);
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

  function iconer(c) {
    var icon = L.divIcon({
      iconSize: [17, 17],
      iconAnchor: [10, 10],
      popupAnchor: [0, 0],
      shadowSize: [0, 0],
      className: c,
    });
    return icon;
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

  function checkDriver(id) {
    fetch("/mapAuth/driver", {
      method: "POST",
      headers: { accessToken: userToken, "Content-Type": "application/json" },
      body: Js({ id: id }),
    })
      .then(async (resp) => {
        var data = await resp.json();
        if (data.error) {
          alert(data.error);
          return;
        }
        if (did) socket.emit("leaveRoom", { id: did });
        driverCoords = data;
        did = data.id;
        drivers[id] = data;
        offMap = false;
        socket.emit("joinRoom", { id: data.id });
        showdrivers();
        flash.f1("driver found");
      })
      .catch((err) => {
        clg(err);
      });
  }
  function sendmylocation(o) {
    fetch("/mapAuth/location", {
      method: "POST",
      headers: { accessToken: userToken, "Content-Type": "application/json" },
      body: Js(o),
    })
      .then(async (resp) => {
        var data = await resp.json();
      })
      .catch((err) => {
        clg(err);
      });
  }
  function rmvMarker(id) {
    if (!map_1) return;
    if (map_1.markers[id]) {
      map_1.markers[id].removeFrom(map_1.map);
      map_1.track = true;
      map_1.map.panTo(def);
      map_1.lock.textContent = `${driverCoords.name} went off the radar`;
      delete map_1.markers[id];
    }
  }
  function showdrivers() {
    var e = document.getElementById("drivers");
    e.innerHTML = "";
    for (var i in drivers) APP(e, myboy(i));
    function myboy(v) {
      var v1 = DIV("", "ml-2 flex flex-col", "", [
          DIV(
            "",
            "leading-snug text-sm text-gray-900 font-bold",
            "",
            drivers[v].name
          ),
          DIV(
            drivers[v].online || (did == v && !offMap) ? "green" : "",
            "leading-snug text-xs text-gray-600 fw-bold",
            "",
            did == v
              ? offMap
                ? "currently off the radar"
                : "Tracking"
              : drivers[v].online
              ? "Online"
              : "Offline"
          ),
        ]),
        v2 = DIV("", "flex items-center", "", [
          img("/images/user.jpg", "box3", "rad100"),
          v1,
        ]),
        v3 = DIV(
          "",
          "p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200",
          "",
          [
            v2,
            did == v
              ? par("")
              : but(
                  "Track",
                  "button",
                  "tkey",
                  (drivers[v].online ? " bgreen white " : "text-blue-400 ") +
                    "h-8 px-3 text-md font-bold border border-blue-400 rounded-full hover:bg-blue-100"
                ),
          ]
        );
      addEvent(v3, "click", (e) => {
        e = ee(e);
        if (e.id == "tkey") myf1(v);
      });
      return v3;
    }
    function myf1(v) {
      flash.f1("Searching for driver");
      checkDriver(v);
    }
  }
  // <div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
  //       <div class="flex items-center">
  //           <img class="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/girl">
  //           <div class="ml-2 flex flex-col">
  //               <div class="leading-snug text-sm text-gray-900 font-bold">Jane doe</div>
  //               <div class="leading-snug text-xs text-gray-600">@jane</div>
  //           </div>
  //       </div>
  //       <button class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">Follow</button>
  //   </div>

  return {
    init: startmap,
    loopmarks,
    rmvMarker,
    showdrivers,
    lockText: (t) => {
      if (!map_1) return;
      map_1.lock.textContent = t;
    },
  };
})();
