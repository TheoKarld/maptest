var murl = "mongodb://127.0.0.1:27017",
  url = "mongodb+srv://codeplay:cDoV4OgCwMcMwSAD@cluster0.u9bv6.mongodb.net/",
  express = require("express"),
  app = express(),
  http = require("http"),
  server = http.Server(app),
  io = require("socket.io")(server),
  cors = require("cors"),
  { MongoClient } = require("mongodb"),
  fs = require("fs"),
  bodyParser = require("body-parser"),
  path = require("path"),
  _dirname = path.resolve(),
  dbn = "codeplay",
  defRoom = "room_12345",
  db = "",
  SOK = {},
  UA = "username,email".split(","),
  DA = "username,email,phone number".split(","),
  UO = "userID,info,base_address,trackings".split(","),
  DO = "driversID,info,status,activities".split(","),
  COL = ["users"],
  OID = ["users_log", "drivers_log"],
  USC,
  usersLog = "",
  driversLog = "",
  tok =
    "075664f2a5214520b9db2e8b9125d666_8dc082bafcf2964ee11cdf206f598bfe5b7c0aa38073539f2c03ecde6796c949";

calldb();

app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.static(_dirname));
app.use(express.static(_dirname + "/public"));
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
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password, phone, user_type } = req.body;
  clg(req.body);
  try {
    const existingUser = checkUser(req.body);
    clg(existingUser);
    if (ocn(existingUser)) return res.status(400).json(existingUser);

    const hashedPassword = await bcrypt.hash(password, 10);
    var uid = `user_${hashedPassword}`,
      user = mrgarrays(UO, [
        uid,
        {
          username: name,
          email,
          password: hashedPassword,
          phoneNumber: phone,
          user_type,
        },
        "",
        {},
      ]);
    usersLog.users[uid] = user;
    writelog("usr");
    res.status(201).json(user);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

function mrgarrays(a, b) {
  var o = {};
  for (var i in a) o[a[i]] = b[i];
  return o;
}
function checkUser(o) {
  var ex = {},
    a = usersLog.user;
  for (var i in a) {
    if (a[i].email == o.email) {
      ex.msg = "Email already exists";
      break;
    }
    if (a[i].username == o.name) {
      ex.msg = "Username already exists";
      break;
    }
  }
  return ex;
}

app.post("/", (req, res) => {
  var a = req.body;
});
app.post("/myLocation", (req, res) => {
  var a = req.body;
  clg(a);
  res.json({ hello: true });
});

async function calldb() {
  var plug = new MongoClient(murl);
  await plug.connect();
  dL = plug;
  db = await plug.db(dbn);
  USC = await db.collection(COL[0]);
  //MFS();
  //readlog();
  //updatedata(col,{fid:'data-1'},{fid:'data-2',users:{paul_123:{name:'Paul Mike',city:'jos'}}});
  //findone(col,'fid','data-2',(err,v)=>{(!v)?clg('data not found'):clg(v);});

  //callplg();calladm();
  clg("mongodb connected");
}
function readlog() {
  findone(USC, "fid", OID[0], (v) => {
    if (!v) return;
    usersLog = v;
    clg(v);
  });
  findone(USC, "fid", OID[1], (v) => {
    if (v) driversLog = v;
  });
}
function insert2db(cl, o) {
  findone(USC, "fid", o.fid, (v) => {
    if (v) {
      clg(`${o.fid} already exist`);
      return;
    }
    myf1();
  });
  function myf1() {
    cl.insertOne(o, (err) => {
      if (err) {
        clg(err);
        return;
      }
      clg("data added successfully...");
    });
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
    if (!v) insert2db(USC, userslog());
  });
  findone(USC, "fid", OID[1], (v) => {
    if (!v) insert2db(USC, driverslog());
  });
}
async function findone(cl, m, o, oc) {
  if (!db || !cl) return;
  var doc = await cl.find({ [m]: o }).toArray()[0];
  oc(ocn(doc) ? doc : false);
}
function writelog(d) {
  if (d == "usr") updatedata(USC, { fid: OID[0] }, usersLog);
  if (d == "drv") updatedata(USC, { fid: OID[1] }, driversLog);
}
function updatedata(cl, o, n) {
  cl.findOneAndReplace(o, n, { upsert: true });
  clg("data updated siuccessfully");
}
function ocn(o) {
  var c = 0;
  for (var i in o) {
    c += 1;
  }
  return c;
}
function fswrite(l, o) {
  var a = typeof o == "object" ? Js(o) : o;
  fs.createWriteStream(l).write(a);
  clg("fs write successfully!!");
  a = "";
}
function fsread(l) {
  if (!edey(l)) return "";
  return fs.readFileSync(l, "utf8");
}
function edey(l) {
  return fs.existsSync(l);
}

var userslog = () => {
  var a = { fid: OID[0], users: {} };
  return a;
};
var driverslog = () => {
  var a = { fid: OID[0], drivers: {} };
  return a;
};
server.listen(3003, clg);
console.log("express server active");
io.on("connection", (socket) => {
  if (!SOK[socket.id]) {
    SOK[socket.id] = { s: socket };
    socket.emit("ios", { i: socket.id });
  }

  socket.join(defRoom);
  io.to(defRoom).emit("groupMsg", { hello: "room mates" });
  //socket.leave(defRoom);
  socket.on("newuser", (obj) => {
    socket.emit("usercreated", array);
  });
  socket.on("mylocation", (o) => {
    io.to(defRoom).emit("coords", o);
  });
});
