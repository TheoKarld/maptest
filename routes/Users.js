var bcrypt = require("bcrypt"),
  express = require("express"),
  writeFnc = "",
  {
    jp,
    clg,
    cta,
    cleaname,
    ocn,
    fsread,
    Js,
    datemap,
    parse,
    mrgarrays,
  } = require("./basics"),
  userRoute = express.Router(),
  { validateToken } = require("../middlewares/AuthMiddleware"),
  { sign } = require("jsonwebtoken"),
  UA = "username,email,password,phone,account".split(","),
  UO = "userID,info,base_address,trackings".split(","),
  usersLog = "",
  usersToken = {},
  app;
writeFnc;

userRoute.get("/users", async (req, res) => {
  var data = cta(ll.users);
  res.json(data);
});
userRoute.get("/validToken", validateToken, (req, res) => {
  res.json(req.user);
});
userRoute.post("/", async (req, res) => {
  var data = jp(req.body),
    idey = checkUser(data);
  if (ocn(idey)) {
    res.json({ err: idey });
    return;
  }
  newUser(data, (don) => {
    clg("user registered successfully...");
    res.json({ route: don.id });
  });
});
userRoute.get("/myinfo/:id", async (req, res) => {
  var id = req.params.id,
    a = usersLog.users[id],
    b;
  if (!a) {
    res.send("invalid User");
    return;
  }
  var { username, email } = a[UO[1]];
  if (!usersToken[id]) usersToken[id] = signMe(username, id);
  b = fsread("index3.html").replace("userData", usersToken[id]);
  res.send(b);
});

userRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = userDey(username);
  if (!password) {
    res.json({ error: "password was not passed" });
    return;
  }
  if (!user) {
    res.json({ error: "User doesn't exist" });
    return;
  }
  bcrypt.compare(password, user[UO[1]][UA[2]]).then((same) => {
    if (!same) {
      res.json({ error: "Wrong Username And Password Combination" });
      return;
    }
    if (!usersToken[user.id]) usersToken[user.id] = signMe(username, user.id);
    res.json({ route: user.id });
  });
});

function signMe(name, id) {
  var Sign = sign(
    { username: name, id: id, account: "Customer" },
    "SmartMoveTokenSecret"
  );
  return Sign;
}
function newUser(o, fn) {
  if (userDey(o.username)) return;
  var a = usersLog.users,
    { username, password, email } = o,
    lastUser = ocn(a) ? parse(Object.keys(a)[ocn(a) - 1].split("_")[1]) : 0,
    obj,
    id,
    dte = datemap();
  bcrypt.hash(password, 10).then((hash) => {
    o.password = hash;
    id = `user_${lastUser + 1}_${dte.key}`;
    obj = mrgarrays(UO, [id, o, "", {}]);
    obj.created = dte;
    obj.id = id;
    usersLog.users[id] = obj;
    clg("new user added");
    writeFnc && writeFnc("usr");
    fn(obj);
  });
}
//search for martching user details
function checkUser(o) {
  var ex = {},
    a = usersLog.user;
  for (var i in a) {
    if (a[i][UO[1]][UA[0]] == o[UA[0]]) {
      ex[UA[0]] = "Username already taken";
    }
    if (a[i][UO[1]][UA[1]] == o[UA[1]]) {
      ex[UA[1]] = "Email already taken";
    }
    if (a[i][UO[1]][UA[3]] == o[UA[3]]) {
      ex[UA[1]] = "Phone Number already taken";
    }
  }
  return ex;
}
//find user in usersLog
function userDey(k) {
  if (!usersLog || !usersLog.users) return false;
  var d = false,
    p = usersLog.users;
  for (var i in p)
    if (cleaname(p[i][UO[1]][UA[0]]) == cleaname(k)) {
      d = p[i];
      break;
    }
  return d;
}
function userWriter(fnc) {
  writeFnc = fnc;
}
function passUserLog(o) {
  usersLog = o;
}

module.exports = { userRoute, userWriter, passUserLog };
