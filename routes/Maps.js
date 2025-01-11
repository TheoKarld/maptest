var express = require("express"),
  { validateToken } = require("../middlewares/AuthMiddleware"),
  mapRoute = express.Router(),
  { jp, clg } = require("./basics"),
  UA = "username,email,password,phone,account".split(","),
  UO = "userID,info,base_address,trackings".split(","),
  DO = "driversID,info,status,activities".split(","),
  io,
  rooms = ["usersRoom", "driversRoom"],
  acct = "Driver,Customer".split(","),
  coords = {},
  trackable = {},
  broadcast,
  findDriver;

mapRoute.get("/track/:id/:tog", validateToken, (req, res) => {
  var { id, tog } = req.params;
  clg(req.params);
  trackable[id] = tog == "on" ? true : false;

  broadcast({
    room: rooms[0],
    event: tog == "on" ? "driveron" : "driveroff",
    msg: { id: id },
  });
  res.json({ success: true });
});
mapRoute.post("/location", validateToken, (req, res) => {
  var user = req.user,
    data = req.body;
  coords[user.id] = data;
  if (user.account == acct[0] && trackable[user.id])
    castMe(user, { ...data, online: true });

  res.json({});
});
mapRoute.post("/driver", validateToken, (req, res) => {
  var { id } = req.body,
    a = findDriver(id.toLowerCase());
  id = id.toLowerCase();
  if (!a) return res.json({ error: "this Driver does not exist!!!" });
  if (!coords[id] || (coords[id] && !trackable[id]))
    return res.json({ error: "this Driver is not enroute" });
  res.json({ id: id, coord: coords[id], name: a[DO[1]][UA[0]], online: true });
});

function castMe(driver, data) {
  var { id, username } = driver;
  broadcast({
    room: id,
    event: "mylocation",
    msg: { id: id, coord: data, name: username },
  });
}
function passMapCast(fnc) {
  broadcast = fnc;
}
function mapDrivers(fnc) {
  findDriver = fnc;
}
function newtrackable(o, rt) {
  if (o) trackable[o.id] = o.stats ? true : false;
  if (rt) return trackable;
}
module.exports = { mapDrivers, passMapCast, mapRoute, newtrackable };
