var bcrypt = require("bcrypt"),
  express = require("express"),
  writeFnc = "",
  {
    clg,
    cta,
    cleaname,
    ocn,
    datemap,
    parse,
    mrgarrays,
    jp,
    Js,
    fsread,
    cto,
  } = require("./basics"),
  driverRoute = express.Router(),
  { validateToken } = require("../middlewares/AuthMiddleware"),
  { sign } = require("jsonwebtoken"),
  UA = "username,email,password,phone,account,licenseNumber".split(","),
  DO = "driversID,info,status,activities,earnings".split(","),
  driversLog = "",
  driversToken = {},
  months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
  app,
  writeFnc;

driverRoute.get("/users", async (req, res) => {
  var data = cta(ll.drivers);
  res.json(data);
});
driverRoute.get("/validToken", validateToken, (req, res) => {
  res.json(req.user);
});
driverRoute.post("/", async (req, res) => {
  var data = jp(req.body),
    idey = checkDriver(data);
  if (ocn(idey)) {
    res.json({ err: idey });
    return;
  }
  newDriver(data, (don) => {
    clg("driver registered successfully...");
    res.json({ route: don.id });
  });
});
driverRoute.get("/myinfo/:id", async (req, res) => {
  var id = req.params.id,
    a = driversLog.drivers[id],
    b;
  if (!a) {
    res.send("invalid Driver");
    return;
  }
  var { username, email } = a[DO[1]];
  if (!driversToken[id]) driversToken[id] = signMe(a);
  b = await fsread("index4.html")
    .toString()
    .replace("userData", driversToken[id]);
  res.send(b);
});

driverRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = driverDey(email);
  if (!password) {
    res.json({ error: "password was not passed" });
    return;
  }
  if (!user) {
    res.json({ error: "Driver doesn't exist" });
    return;
  }
  bcrypt.compare(password, user[DO[1]][UA[2]]).then((same) => {
    if (!same) {
      res.json({ error: "Wrong email And Password Combination" });
      return;
    }
    if (!driversToken[user.id]) driversToken[user.id] = signMe(user);
    res.json({ route: driversToken[user.id] });
  });
});

function earnrack() {
  var a = driversLog.drivers,
    b = "",
    y = datemap().y;
  for (var i in a)
    if (!a[i][DO[4]] || !a[i][DO[4]][y] || !a[i][DO[3]][y]) {
      if (!b) b = true;
      if (!a[i][DO[4]])
        driversLog.drivers[i][DO[4]] = {
          [y]: cto(months, { funds: {}, active: {}, deliveries: {} }),
        };
      if (!a[i][DO[4]][y])
        a[i][DO[4]][y] = cto(months, { funds: {}, active: {}, deliveries: {} });
      if (!a[i][DO[3]][y]) a[i][DO[3]][y] = cto(months, {});
    }
}
function signMe(user) {
  var Sign = sign(user, "SmartMoveTokenSecret");
  return Sign;
}
function newDriver(o, fn) {
  if (driverDey(o[UA[0]])) return;
  if (!driversLog.drivers) driversLog.drivers = {};
  var a = driversLog.drivers,
    { username, password, email } = o,
    lastUser = ocn(a) ? parse(Object.keys(a)[ocn(a) - 1].split("_")[1]) : 0,
    obj,
    id,
    dte = datemap();
  bcrypt.hash(password, 10).then((hash) => {
    o.password = hash;
    id = `driver_${lastUser + 1}_${dte.key}`;
    obj = mrgarrays(DO, [
      id,
      o,
      "",
      { [dte.y]: cto(months, { funds: {}, active: {}, deliveries: {} }) },
      { [dte.y]: cto(months, { funds: {}, active: {}, deliveries: {} }) },
    ]);
    obj.created = dte;
    obj.id = id;
    driversLog.drivers[id] = obj;
    clg("new driver added");
    writeFnc && writeFnc("drv");
    fn(obj);
  });
}
//search for martching user details
function checkDriver(o) {
  var ex = {},
    a = driversLog.drivers;
  for (var i in a) {
    if (a[i][DO[1]][UA[0]] == o[UA[0]]) {
      ex[UA[0]] = "Username already exists";
    }
    if (a[i][DO[1]][UA[1]] == o[UA[1]]) {
      ex[UA[1]] = "Email already exists";
    }
    if (a[i][DO[1]][UA[3]] == o[UA[3]]) {
      ex[UA[3]] = "Phone Number already taken";
    }
    if (a[i][DO[1]][UA[5]] == o[UA[5]]) {
      ex[UA[5]] = "licenseNumber already taken";
    }
  }
  return ex;
}
//find user in driversLog
function driverDey(k) {
  if (!driversLog || !driversLog.drivers) return false;
  var d = false,
    p = driversLog.drivers;
  for (var i in p)
    if (cleaname(p[i][DO[1]][UA[1]]) == cleaname(k)) {
      d = p[i];
      break;
    }
  return d;
}
function driverWriter(fnc) {
  writeFnc = fnc;
}
function passDriverLog(o) {
  driversLog = o;
  earnrack();
}

module.exports = { driverRoute, driverWriter, passDriverLog };
