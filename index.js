const { validateToken } = require("./middlewares/AuthMiddleware");

var murl = "mongodb://127.0.0.1:27017",
  url = "mongodb+srv://codeplay:cDoV4OgCwMcMwSAD@cluster0.u9bv6.mongodb.net/",
  express = require("express"),
  app = express(),
  http = require("http"),
  server = http.Server(app),
  io = require("socket.io")(server),
  { fsread, fswrite, edey, ocn, mrgarrays } = require("./routes/basics"),
  cors = require("cors"),
  { MongoClient } = require("mongodb"),
  fs = require("fs"),
  bodyParser = require("body-parser"),
  { userRoute, passUserLog, userWriter } = require("./routes/Users"),
  { driverRoute, driverWriter, passDriverLog } = require("./routes/Drivers"),
  {
    mapRoute,
    passMapCast,
    mapDrivers,
    newtrackable,
  } = require("./routes/Maps"),
  path = require("path"),
  _dirname = path.resolve(),
  dbn = "codeplaytest",
  defRoom = "room_12345",
  db = "",
  SOK = {},
  UA = "username,email,password,phone,account".split(","),
  UO = "userID,info,base_address,trackings".split(","),
  DO = "driversID,info,status,activities".split(","),
  rooms = ["usersRoom", "driversRoom"],
  COL = ["users"],
  OID = ["users_log", "drivers_log"],
  USC,
  usersLog = "",
  driversLog = "",
  tok =
    "075664f2a5214520b9db2e8b9125d666_8dc082bafcf2964ee11cdf206f598bfe5b7c0aa38073539f2c03ecde6796c949";

calldb();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(_dirname));
app.use(express.static(_dirname + "/public"));
app.use("/userAuth", userRoute);
app.use("/driverAuth", driverRoute);
app.use("/mapAuth", mapRoute);
app.use(cors());
passMapCast(newbroadcast);
mapDrivers(driverById);
userWriter(writelog);
driverWriter(writelog);
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Expose-Headers", "*");
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(fsread("index.html"));
});
app.get("/signup", (req, res) => {
  res.send(fsread("signup.html"));
});

app.post("/", (req, res) => {
  var a = req.body;
});
app.get("/drivers", validateToken, (req, res) => {
  var x = newtrackable("", true),
    a = driversLog.drivers,
    b = {};
  for (var i in a)
    b[i] = { name: a[i][DO[1]][UA[0]], id: i, online: x[i] ? true : false };
  res.json(b);
});
function newbroadcast(cast) {
  io.to(cast.room).emit(cast.event, cast.msg);
}
function driverById(id) {
  return !driversLog || !driversLog.drivers[id]
    ? false
    : driversLog.drivers[id];
}

async function calldb() {
  var plug = new MongoClient(url);
  await plug.connect();
  dL = plug;
  db = await plug.db(dbn);
  USC = db.collection(COL[0]);
  //wipedb();
  //MFS();
  readlog();
  clg("mongodb connected");
}
function readlog() {
  findone(USC, "fid", OID[0], (v) => {
    if (!v) return;
    usersLog = v;
    passUserLog(usersLog);
    clg(`${v.fid} loaded with ${ocn(v.users)} user(s)`);
  });
  findone(USC, "fid", OID[1], (v) => {
    if (!v) return;
    driversLog = v;
    passDriverLog(driversLog);
    clg(`${v.fid} loaded with ${ocn(v.drivers)} driver(s)`);
  });
}
function insert2db(cl, o) {
  if (!cl) return;
  findone(cl, "fid", o.fid, (v) => {
    if (v) {
      clg(`${o.fid} already exist`);
      return;
    }
    myf1();
  });
  async function myf1() {
    var a = await cl.insertOne(o);
    clg(
      a.acknowledged
        ? `${o.fid} was added successfully`
        : `there was an error inserting ${o.fid}`
    );
  }
}
function rmvdata(cl, o) {
  cl.findOneAndDelete(o);
  clg("data deleted successfully...");
}
function clg(t) {
  console.log(t);
}
function MFS() {
  findone(USC, "fid", OID[0], (v) => {
    if (!v) {
      insert2db(USC, userslog());
    } else {
      clg("userlog dey");
    }
  });
  findone(USC, "fid", OID[1], (v) => {
    if (!v) {
      insert2db(USC, driverslog());
    } else {
      clg("driverlog dey");
    }
  });
}
async function findone(cl, m, o, oc) {
  if (!db || !cl) return;
  var doc = await cl.find({ [m]: o }).toArray(),
    dcc = doc[0];
  oc(dcc ? dcc : false);
}
function writelog(d) {
  if (d == "usr") updatedata(USC, { fid: OID[0] }, usersLog);
  if (d == "drv") updatedata(USC, { fid: OID[1] }, driversLog);
}
function updatedata(cl, o, n) {
  cl.findOneAndReplace(o, n, { upsert: true });
  clg(`${o.fid} updated siuccessfully`);
}
function wipedb() {
  if (!db) return;
  var a = [USC];
  for (var i in a) if (a[i]) removeall(a[i]);
}
function removeall(cl) {
  if (!db || !cl) return;
  clg(cl);
  cl.remove({});
}

var userslog = () => {
  var a = { fid: OID[0], users: {} };
  return a;
};
var driverslog = () => {
  var a = { fid: OID[1], drivers: {} };
  return a;
};
server.listen(3003, clg);
console.log("express server active");
io.on("connection", (socket) => {
  if (!SOK[socket.id]) {
    SOK[socket.id] = { s: socket };
    socket.emit("ios", { i: socket.id });
    clg("new connection");
  }
  socket.on("who", (obj) => {
    if (SOK[obj.ios]) SOK[obj.ios] = { ...SOK[obj.ios], ...obj };
    clg(`${obj.id} just connected`);
    if (obj.customer) socket.join(rooms[0]);
    if (obj.driver && obj.track) newtrackable({ id: obj.id, stats: true });
  });
  socket.once("disconnect", async function () {
    var id = socket.id;
    if (SOK[id]) {
      if (SOK[id].driver) {
        io.to(SOK[id].id).emit("ileft", { id: SOK[id].id });
        io.to(rooms[0]).emit("diveroff", { id: SOK[id].id });
        newtrackable({ id: SOK[id].id, stats: false });
        clg(`${SOK[id].id} went off`);
      }
      delete SOK[id];
    }

    clg("user diconnected..");
  });

  //socket.join(defRoom);
  //io.to(defRoom).emit("groupMsg", { hello: "room mates" });
  //socket.leave(defRoom);
  socket.on("joinRoom", (obj) => {
    clg("joinroom");
    socket.join(obj.id);
  });
  socket.on("leaveRoom", (obj) => {
    socket.leave(obj.id);
  });
});
