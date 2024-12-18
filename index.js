var murl = "mongodb://127.0.0.1:27017",
  url = "mongodb+srv://codeplay:cDoV4OgCwMcMwSAD@cluster0.u9bv6.mongodb.net/",
  express = require("express"),
  app = express(),
  cors = require("cors"),
  { MongoClient } = require("mongodb"),
  fs = require("fs"),
  path = require("path"),
  _dirname = path.resolve(),
  dbn = "codeplay",
  db = "",
  tok =
    "075664f2a5214520b9db2e8b9125d666_8dc082bafcf2964ee11cdf206f598bfe5b7c0aa38073539f2c03ecde6796c949";

calldb();

app.use(express.json());
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

app.post("/", (req, res) => {
  var a = req.body;
});

async function calldb() {
  var plug = new MongoClient(url);
  await plug.connect();
  dL = plug;
  db = await plug.db(dbn);
  var col = db.collection("code");
  //updatedata(col,{fid:'data-1'},{fid:'data-2',users:{paul_123:{name:'Paul Mike',city:'jos'}}});
  //findone(col,'fid','data-2',(err,v)=>{(!v)?clg('data not found'):clg(v);});

  //callplg();calladm();
  clg("mongodb connected");
}
function insert2db(cl, o) {
  clg(o);
  cl.insertOne(o, (err) => {
    if (err) {
      clg(err);
      return;
    }
    clg("data added successfully...");
  });
}
function rmvdata(cl, o) {
  cl.findOneAndDelete(o);
  clg("data deleted successfully...");
}

function clg(t) {
  console.log(t);
}

async function findone(cl, m, o, oc) {
  if (!db || !cl) return;
  var doc = await cl.find({ [m]: o }).toArray();
  oc("", ocn(doc) ? doc : false);
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

app.listen(3003);
console.log("express server active");
