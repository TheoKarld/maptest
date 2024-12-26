/*
	keycodes....
	27=esc;

*/
var Notifier = null,
  ICN = {
    film: "glyphicon glyphicon-film",
    tele: "glyphicon glyphicon-phone-alt",
    trash: "glyphicon glyphicon-trash",
    settings: "glyphicon glyphicon-cog",
    wrench: "glyphicon glyphicon-wrench",
    tright: "glyphicon glyphicon-triangle-right",
    tleft: "glyphicon glyphicon-triangle-left",
    voption: "glyphicon glyphicon-option-vertical",
    hoption: "glyphicon glyphicon-option-horizontal",
    off: "glyphicon glyphicon-off",
    save: "glyphicon glyphicon-save",
    pencil: "glyphicon glyphicon-pencil",
    tower: "glyphicon glyphicon-tower",
    ok: "glyphicon glyphicon-ok",
    cok: "glyphicon glyphicon-ok-circle",
    plus: "glyphicon glyphicon-plus",
    user: "glyphicon glyphicon-user",
    folder: "glyphicon glyphicon-folder-close",
    home: "glyphicon glyphicon-home",
    remove: "glyphicon glyphicon-remove",
    edit: "glyphicon glyphicon-edit",
    ques: "glyphicon glyphicon-question-sign",
    check: "glyphicon glyphicon-check",
    handup: "glyphicon glyphicon-hand-up",
    thumbsup: "glyphicon glyphicon-thumbs-up",
    thumbsdown: "glyphicon glyphicon-thumbs-down",
    cloudupload: "glyphicon glyphicon-cloud-upload",
    tent: "glyphicon glyphicon-tent",
    leaf: "glyphicon glyphicon-leaf",
    refresh: "glyphicon glyphicon-refresh",
    record: "glyphicon glyphicon-record",
    copy: "glyphicon glyphicon-copy",
    paste: "glyphicon glyphicon-paste",
    screenshot: "glyphicon glyphicon-screenshot",
    asterisk: "glyphicon glyphicon-asterisk",
    cloud: "glyphicon glyphicon-cloud",
    book: "glyphicon glyphicon-book",
    infosign: "glyphicon glyphicon-info-sign",
    calendar: "glyphicon glyphicon-calendar",
    comment: "glyphicon glyphicon-comment",
    stats: "glyphicon glyphicon-stats",
    alerti: "glyphicon glyphicon-alert",
    savefile: "glyphicon glyphicon-save-file",
    music: "glyphicon glyphicon-music",
    cplay: "glyphicon glyphicon-play-circle",
    play: "glyphicon glyphicon-play",
    download: "glyphicon glyphicon-download-alt",
    mapmark: "glyphicon glyphicon-map-marker",
    oksign: "glyphicon glyphicon-ok-sign",
    link: "glyphicon glyphicon-link",
    lock: "glyphicon glyphicon-lock",
    list: "glyphicon glyphicon-list-alt",
    estar: "glyphicon glyphicon-star-empty",
    star: "glyphicon glyphicon-star",
    file: "glyphicon glyphicon-file",
  },
  INC = {
    clock: "bi bi-clock",
    list: "bi bi-list",
    list2: "bi bi-list-nested",
    list3: "bi bi-list-columns-recverse",
    fclock: "bi bi-clock-fill",
    esmile: "bi bi-emoji-smile",
    efsmile: "bi bi-emoji-smile-fill",
    lfcarrow: "bi bi-left-circle-fill",
    rfcarrow: "bi bi-right-circle-fill",
    larrow: "bi bi-arrow-left",
    rarrow: "bi bi-arrow-right",
    rparrow: "bi bi-arrow-repeat",
    lrarrow: "bi bi-arrow-left-right",
    lbarrow: "bi bi-arrow-bar-left",
    rbarrow: "bi bi-arrow-bar-right",
    arrowdf: "bi bi-arrow-down-square-fill",
    printer: "bi bi-printer",
    fprinter: "bi bi-printer-fill",
    power: "bi bi-power",
    personx: "bi bi-person-x",
    aperson: "bi bi-person-plus",
    faperson: "bi bi-person-plus-fill",
    fpersonx: "bi bi-person-x-fill",
    huricane: "bi bi-hurricane",
    people: "bi bi-people",
    person: "bi bi-person",
    cperson: "bi bi-person-circle",
    fpeople: "bi bi-people-fill",
    server: "bi bi-server",
    shield: "bi bi-shield",
    cshield: "bi bi-shield-check",
    cfshield: "bi bi-shield-fill-check",
    fshield: "bi bi-shield-fill",
    trophy: "bi bi-trophy",
    ftrophy: "bi bi-trophy-fill",
    xcircle: "bi bi-x-circle",
    fxcircle: "bi bi-x-circle-fill",
    x: "bi bi-x",
    xlg: "bi bi-x-lg",
    txtarea: "bi bi-textarea",
    sticky: "bi bi-stickies",
    fsticky: "bi bi-stickies-fill",
    stick: "bi bi-sticky",
    fsticky: "bi bi-sticky-fill",
    stack: "bi bi-stack",
    stacko: "bi bi-stack-overflow",
    chkperson: "bi bi-person-check",
    persons: "bi bi-person-square",
    personf: "bi bi-person-lines-fill",
    personrd: "bi bi-person-rolodex",
    personws: "bi bi-person-workspace",
    personv: "bi bi-person-video2",
    personbb: "bi bi-person-bounding-box",
    fchkperson: "bi bi-person-check-fill",
    daperson: "bi bi-person-dash",
    fdaperson: "bi bi-person-dash-fill",
    minode: "bi bi-node-minus",
    fminode: "bi bi-node-minus-fill",
    plus: "bi bi-plus",
    plnode: "bi bi-node-plus",
    fplnode: "bi bi-node-plus-fill",
    mortarb: "bi bi-mortarboard",
    fmortarb: "bi bi-mortarboard-fill",
    jplus: "bi bi-journal-plus",
    jminus: "bi bi-journal-minus",
    jcheck: "bi bi-journal-check",
    fow: "bi bi-foward",
    ffow: "bi bi-foward-fill",
    lboxa: "bi bi-box-arrow-in-left",
    rboxa: "bi bi-box-arrow-in-right",
    checkc: "bi bi-check-circle",
    checkf: "bi bi-check-circle-fill",
    book: "bi bi-book",
    hbook: "bi bi-book-half",
    fbook: "bi bi-book-fill",
    bookm: "bi bi-bookmark",
    cbookm: "bi bi-bookmark-check",
    fbookm: "bi bi-bookmark-fill",
    griph: "bi bi-grip-horizontal",
    gripv: "bi bi-grip-vertical",
    medium: "bi bi-medium",
    phone: "bi bi-phone",
    phonef: "bi bi-phone-fill",
    phonel: "bi bi-phone-landscape",
    phonelf: "bi bi-phone-landscape-fill",
    signp: "bi bi-signpost",
    signpf: "bi bi-signpost-fill",
    signp2: "bi bi-signpost-2",
    signp2f: "bi bi-signpost-2-fill",
    slack: "bi bi-slack",
    viewl: "bi bi-view-list",
    views: "bi ib-view-stacked",
    bwidth: "bi bi-border-width",
    bank: "bi bi-bank",
    bank2: "bi bi-bank2",
    calendar: "bi bi-calendar",
    fcalendar: "bi bi-calendar-fill",
    rcalendar: "bi bi-calendar-range",
    frcalendar: "bi bi-calendar-range-fill",
    wcalendar: "bi bi-calendar4-week",
    ccalendar: "bi bi-calendar-check",
    fcccalendar: "bi bi-calendar-check-fill",
    dtcalendar: "bi bi-calendar-date",
    fdtcalendar: "bi bi-calendar-date-fill",
    dycalendar: "bi bi-calendar-day",
    fdycalendar: "bi bi-calendar-day-fill",
    ecalendar: "bi bi-calendar-event",
    fecalendar: "bi bi-calendar-event-fill",
    cardhead: "bi bi-card-heading",
    cardcheck: "bi bi-card-checklist",
    cardlist: "bi bi-card-list",
    command: "bi bi-command",
    malign: "bi bi-align-middle",
    app: "bi bi-app",
    appin: "bi bi-app-indicator",
    barstep: "bi bi-bar-chart-steps",
    pcloud: "bi bi-cloud-plus",
    fpcloud: "bi bi-cloud-plus-fill",
    lock: "bi bi-lock",
    flock: "bi bi-lock-fill",
    activity: "bi bi-activity",
    geo: "bi bi-geo",
    geof: "bi bi-geo-fill",
    geoalt: "bi bi-geo-alt",
    fgeoalt: "bi bi-geo-alt-fill",
    chatd: "bi bi-chart-dotted",
    pencil: "bi bi-pencil",
    fpencil: "bi bi-pencil-fill",
    pen: "bi bi-pen",
    fpen: "bi bi-pen-fill",
    pencils: "bi bi-pencil-square",
    house: "bi bi-house",
    fhouse: "bi bi-house-fill",
    image: "bi bi-image",
    fimage: "bi bi-image-fill",
    speedometer: "bi bi-speedometer",
    images: "bi bi-images",
    aimage: "bi bi-image-alt",
    film: "bi bi-film",
    efilep: "bi bi-file-earmark-person",
    credcard: "bi bi-credit-card",
    cart: "bi bi-cart",
    cart2: "bi bi-cart2",
    cart3: "bi bi-cart3",
    cart4: "bi bi-cart4",
    cartc: "bi bi-cart-check",
    cartcf: "bi bi-cart-check-fill",
    cartp: "bi bi-cart-plus",
    cartpf: "bi bi-cart-plus-fill",
    cartdf: "bi bi-cart-dash-fill",
    cartx: "bi bi-cart-x",
    cartxf: "bi bi-cart-x-fill",
    cartf: "bi bi-cart-fill",
    cartd: "bi bi-cart-dash",
    cash: "bi bi-cash",
    cashs: "bi bi-cash-stack",
    envelope: "bi bi-envelope",
    envelopef: "bi bi-envelope-fill",
    envelopeat: "bi bi-envelope-at",
    tele: "bi bi-telephone",
    telef: "bi bi-telephone-fill",
    telefw: "bi bi-telephone-foward",
    teleff: "bi bi-telephone-foward-fill",
    telei: "bi bi-telephone-inbound",
    teleif: "bi bi-telephone-inbound-fill",
    telep: "bi bi-telephone-plus",
    telepf: "bi bi-telephone-plus-fill",
    telem: "bi bi-telephone-minus",
    telemf: "bi bi-telephone-minus-fill",
    teleo: "bi bi-telephone-outbound",
    teleof: "bi bi-telephone-outbound-fill",
    telex: "bi bi-telephone-x",
    telexf: "bi bi-telephone-x-fill",
    togon: "bi bi-toggle-on",
    togof: "bi bi-toggle-off",
    right_chev: "bi bi-chevron-right",
    tog2on: "bi bi-toggle2-on",
    tog2of: "bi bi-toggle2-off",
    togs: "bi bi-toggles",
    togs2: "bi bi-toggles2",
    send: "bi bi-send",
    sendf: "bi bi-send-fill",
  },
  A1 = ["lg", "md", "sm", "xs"],
  bets = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(","),
  CC1 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  CC2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  scriptcall = false,
  UB = "";

(function () {
  function _$(els) {
    if (els.length == 1 && els[0] == "body") {
      element = document.body;
      return element;
    }

    this.elements = [];
    for (i = 0; i < els.length; i++) {
      var element = els[i];
      if (typeof element == "string") {
        element = document.getElementById(element);
        if (els.length == 1) return element;
      }
      element = document.getElementById(element);
      this.elements.push(element);
    }
  }

  _$.prototype = {
    each: function (fn) {
      for (i = 0; i < this.elements.length; i++) {
        fn.call(this, this.elements[i]);
      }
      return this;
    },

    setStyle: function (prop, val) {
      this.each(function (el) {
        el.style[prop] = val;
      });
      return this;
    },

    show: function () {
      var that = this;
      this.each(function (el) {
        that.setStyle("display", "block");
      });
      return this;
    },
    hide: function () {
      var that = this;
      this.each(function (el) {
        that.setStyle("display", "none");
      });
      return this;
    },
    addEvent: function (type, fn) {
      var add = function (el) {
        if (window.addEventListener) {
          el.addEventListener(type, fn, false);
        } else if (window.attachEvent) {
          el.attachEvent("on" + type, fn);
        }
      };
      this.each(function (el) {
        add(el);
      });
      return this;
    },
  };

  window.installHelp = function (scope, interface) {
    scope[interface] = function () {
      return new _$(arguments);
    };
  };
})();

addEvent = function (element, event, func) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    return element.attachEvent("on" + event, func);
  } else {
    return element.addEventListener(event, func);
  }
};
var T_ = function (en) {
  if (!typeof en == "string") throw new Error("Name passed must be a String");

  var tg = document.getElementsByTagName(en);
  return tg;
};
var $$ = function (el, tn) {
  var te = el.getElementsByTagName(tn);
  return te;
};
function $$$(e, i, c, at, y) {
  var d = document.createElement(e);
  if (i) d.id = i;
  if (c) d.className = c;
  attme(d, at);
  if (y)
    if (typeof y == "object") {
      feedme(d, y);
    } else {
      d.innerHTML = y;
    }
  return d;
}
function style(rd, p, m, l, r, t, b, w, h, bc, cl) {
  var a = [
      "position",
      "margin",
      "left",
      "right",
      "top",
      "bottom",
      "width",
      "height",
      "background",
      "color",
    ],
    ba = [p, m, l, r, t, b, w, h, bc, cl];
  for (var i = 0; i < a.length; i++) if (ba[i]) rd.style[a[i]] = ba[i];
}
var myEditor = function (element, father, who) {
  var el = element,
    pa = father,
    rd = DIV("styleit"),
    hd = DIV("sit-hd"),
    h = he(1, "StyleIt", "sit-h"),
    xb = bottle("---", "", "xsit"),
    ws = DIV("sit-ws"),
    ta = $$$("textarea", "sit-ta"),
    bb = DIV("sit-bb"),
    nd = DIV("sit-nvd"),
    lb = bottle("Left", "sitnv", "sitln"),
    rb = bottle("Right", "sitnv", "sitrn"),
    cb = bottle("Center", "sitnv", "sitcn"),
    od = DIV("sit-opd"),
    ms = bottle("-", "sitob", "sitms"),
    ps = bottle("+", "sitob", "sitps"),
    fb = bottle("<>", "", "sitfl"),
    pos = "r",
    op = 1,
    dis = false,
    cod,
    wp = bottle("wipe BC", "sbcd", "sitwbc"),
    ik = par("", "mye-ik"),
    bd = DIV("sit-bcd"),
    wo = false;
  MYE = rd;
  APP(rd, hd);
  APP(rd, ws);
  APP(rd, bb);
  APP(hd, h);
  APP(hd, xb);
  APP(ws, ta);
  APP(bb, ik);
  APP(bb, nd);
  APP(bb, od);
  APP(bb, bd);
  APP(nd, lb);
  APP(nd, cb);
  APP(nd, rb);
  APP(od, ms);
  APP(od, ps);
  APP(pa, fb);
  APP(bd, wp);
  style(fb, "fixed", "", "", "1em", "", "1em");
  style(rd, "fixed", "auto", "", "1em", "", "4em");

  var xx = setTimeout(valme, 4000);

  function showid(me) {
    ik.innerHTML =
      "tagName : " +
      me.tagName +
      " ID :" +
      me.id +
      ",papa ID :" +
      fada(me).id +
      " || Class : " +
      me.className +
      ". papa Class : " +
      fada(me).className;
  }
  function valme() {
    cod = TD.css && TD.css[who] && TD.css[who].code ? TD.css[who].code : false;
    ta.value = cod ? cod : el.innerHTML;
    if (!cod) wp.style.display = "none";
  }
  function snd4save() {
    if (TD.css[who]) TD.css[who].code = ta.value;
    socket.emit("css", { css: ta.value, w: who });
  }
  function snd4wipe() {
    socket.emit("xcss");
    socket.on("cssx", function (ob) {
      TD.css = ob;
      wp.style.display = "none";
    });
  }
  function zhow() {
    if (dis) {
      X(rd);
      dis = false;
    } else {
      APP(pa, rd);
      dis = true;
    }
  }
  function repcode() {
    var v = ta.value;
    el.innerHTML = v;
  }
  function move(n) {
    if (n == pos) return;
    var lf, rt;
    if (n == "r") {
      rt = "1em";
      lf = "";
    }
    if (n == "l") {
      rt = "";
      lf = "1em";
    }
    if (n == "c") {
      rt = 0;
      lf = 0;
    }
    rd.style.left = lf;
    rd.style.right = rt;
    pos = n;
  }
  function opac(fw) {
    if (fw) {
      if (op < 1) op += 0.1;
    } else {
      if (op > 0.2) op -= 0.1;
    }
    rd.style.opacity = op;
  }
  addEvent(fb, "click", zhow);
  addEvent(document.body, "mouseover", function (e) {
    e = ee(e);
    showid(e);
  });
  addEvent(ta, "input", function (e) {
    var c = e.data,
      sk = e.inputType;
    repcode();
    if (c == "}" || c == ";" || sk == "insertLineBreak") snd4save();
  });
  addEvent(rd, "click", function (e) {
    e = ee(e);
    if (e.id == "xsit-button") zhow();
    if (e.id == "sitrn-button") move("r");
    if (e.id == "sitln-button") move("l");
    if (e.id == "sitcn-button") move("c");
    if (e.id == "sitms-button") opac();
    if (e.id == "sitps-button") opac(true);
    if (e.id == "sitwbc-button") snd4wipe();
  });
};
var _IE = function () {
  if (navigator.appName == "Microsoft Internet Explorer") {
    return true;
  } else {
    return false;
  }
};
var Switch = function (p, CTA, CTR) {
  POP(p, CTR);
  APP(p, CTA);
};
var APP = function (p, c) {
  try {
    p.appendChild(c);
  } catch (err) {
    var pi = iso(p) && p.id ? p.id : "",
      ci = iso(c) && c.id ? p.id : "";
    console.log(pi + "-----" + ci);
  }
};
var POP = function (p, c) {
  p.removeChild(c);
};
var bottle = function (nam, c, id) {
  var b = $$$("button");
  if (id) {
    b.id = id + "-button";
  } else {
    b.id = nam + "-button";
  }
  if (nam == "X") {
    b.style.position = "absolute";
    b.style.right = ".2em";
    b.style.top = 0;
    b.style.border = 0;
  }
  if (c) b.className = c + "-but";
  b.innerHTML = nam;
  return b;
};
var Notify = function (stats, content, par) {
  var holder = par ? par : document.body;
  var bd = null;

  if (document.getElementById("notifier") != null) {
    bd = document.getElementById("notifier");
    bd.parentNode.removeChild(bd);
  }

  content = content.split(":");
  if (Notifier) {
    var ndiv = Notifier;
    var head = $$(ndiv, "h1")[0];
    var nspan = $$(ndiv, "span")[0];
  } else {
    var ndiv = $$$("div");
    ndiv.style.border = "1px solid green";
    ndiv.id = "notifier";
    ndiv.style.zIndex = "99";
    ndiv.style.background = "white";
    var head = $$$("h1");
    head.style.color = "green";
    var nspan = $$$("span");
    nspan.style.color = "green";
    APP(ndiv, head);
    APP(ndiv, nspan);
    Notifier = ndiv;
  }

  if (stats == "pass") {
    head.innerHTML = content[0];
    nspan.innerHTML = content[1];
  } else {
    ndiv.style.background = "red";
    head.innerHTML = content[0];
    nspan.innerHTML = content[1];
  }
  holder.appendChild(ndiv);
  ndiv.style.animation = "showMe 3s";

  setTimeout(function () {
    ndiv.style.animation = "rollUp 3s";

    var t = setTimeout(function () {
      if (document.getElementById("notifier") != null) {
        bd = document.getElementById("notifier");
        bd.style.animation = "";
        bd.parentNode.removeChild(bd);
      }

      clearTimeout(t);
    }, 3000);
  }, 6000);
};
var Theme = function (arr, time, el) {
  var al = arr.length;
  var cnt = 0;
  setInterval(function () {
    el.style.backgroundImage = "url(" + arr[cnt] + ")";
    cnt++;
    if (cnt == al) cnt = 0;
  }, time);
};
var ik = function (key, s) {
  var pa = $$$("p");
  pa.id = key;
  pa.className = "input-field";
  if (!s) {
    var sp = $$$("span");
    sp.style.display = "block";
    if (key.indexOf("_") > 0) {
      var sk = "";
      key = key.split("_");
      for (var k = 0; k < key.length; k++) {
        sk = sk + key[k] + " ";
      }
      key = sk;
    }
    sp.innerHTML = key;
    APP(pa, sp);
  }
  var ifd = $$$("input");
  ifd.id = key;
  ifd.className = "info-input";
  ifd.style.display = "block";
  APP(pa, ifd);

  return pa;
};
function DIV(id, c, at, cl) {
  var rd = $$$("div", id, c);
  if (at) attme(rd, at);

  if (cl) feedme(rd, cl);
  return rd;
}
var hb = function (title, c, id) {
  var xb,
    h,
    hd = DIV("head-bar");
  if (title) {
    h = $$$("h5", "tb-head");
    h.innerHTML = title;
    APP(hd, h);
  }
  if (c) {
    if (id) {
      xb = bottle("X", false, id);
    } else {
      xb = bottle("X");
    }
    APP(hd, xb);
    xb.style.position = "absolute";
    xb.style.right = "1%";
    xb.style.top = "1%";
  }

  return hd;
};
var tib = function (id, h, ar, b, x) {
  var rd, hd, h4, ul, li, d, bt;
  rd = DIV(id, "bad");
  if (h) {
    hd = DIV("bad-hd");
    h4 = $$$("h5");
    h4.innerHTML = h;
    APP(hd, h4);
    APP(rd, hd);
    if (x) APP(hd, x);
  }
  ul = $$$("ul", id + "-ul");
  APP(rd, ul);
  for (var o in ar) {
    li = $$$("li");
    d = Ie(ar[o], false);
    APP(li, d);
    APP(ul, li);
  }
  bt = bottle(b, "bad", b.replace(b.charAt(1), ""));
  APP(rd, bt);
  return rd;
};
var Ie = function (n, s, d, sl, a, r, ir) {
  var re,
    t,
    se,
    st = r ? "inline-block" : "block",
    id = ir ? ir : n;
  re = DIV(id + "-ie", "ie");
  t = $$$("span", "dtag");
  t.style.position = "relative";
  t.style.display = st;
  t.innerHTML = n + " : ";
  APP(re, t);
  if (s) {
    se = $$$("p", "", "ie-se");
    se.innerHTML = d;
    se.style.WebkitMarginBefore = 0;
    se.style.WebkitMarginAfter = 0;
    APP(re, se);
  } else if (sl) {
    se = $$$("select", sl, "ie-se");
    se.name = sl;
    APP(re, se);
    for (var i in a) {
      t = $$$("option");
      t.value = a[i];
      t.innerHTML = a[i];
      APP(se, t);
    }
  } else {
    se = $$$("input", "", "ie-se");
    se.id = n;
    APP(re, se);
    if (d) se.value = d;
  }
  se.style.position = "relative";
  se.style.display = st;
  return re;
};
function Rl(lst, ar, typ, cls) {
  var l, s;
  lst.innerHTML = null;
  for (var i = 0; i < ar.length; i++) {
    l = $$$("li");
    s = $$$(typ, ar[i], cls);
    if (typ == "span") {
      s.innerHTML = ar[i];
    }
    if (typ == "input") {
      s.value = ar[i];
    }
    APP(l, s);
    APP(lst, l);
  }
}
var dobo = function (ve, od) {
  var sx, rh, dh, s, d, da, m, mo, y, ma, sh, ss, sd, md, ms, m;

  ma = CC1;
  rh = DIV("dob-a-s", "pair-holder");
  sx = ["Male", "Female"];

  dh = DIV("date-holder");
  dh.style.position = "relative";
  dh.style.display = "inline-block";
  s = $$$("span", "dtag");
  s.innerHTML = "Date of Birth";
  APP(dh, s);
  d = DIV("date-of-birth");
  da = $$$("input", "date", "di");
  da.style.position = "relative";
  da.style.display = "inline-block";
  APP(d, da);
  m = $$$("select", "month");
  m.name = "month";
  m.style.position = "relative";
  m.style.display = "inline-block";
  for (var i = 0; i < ma.length; i++) {
    mo = $$$("option");
    mo.value = ma[i];
    mo.innerHTML = ma[i];
    APP(m, mo);
  }
  APP(d, m);
  y = $$$("input", "year", "di");
  APP(d, y);
  ve["dob"] = d;
  APP(dh, d);
  APP(rh, dh);

  return dh;
};
var gendv = function (v) {
  var sh,
    ss,
    sd,
    md,
    ms,
    m,
    sx = ["Male", "Female"];

  sh = DIV("gender-holder");
  sh.style.position = "relative";
  sh.style.display = "inline-block";
  ss = $$$("span", "dtg");
  ss.innerHTML = "Gender";
  APP(sh, ss);
  sd = DIV("gndv-hld");
  APP(sh, sd);
  for (var s = 0; s < sx.length; s++) {
    md = DIV(sx[s] + "-div", "gender-div");
    md.style.position = "relative";
    md.style.display = "inline-block";
    ms = $$$("img", "gn-i");
    ms.src = sx[s] + ".png";
    APP(md, ms);
    m = $$$("input", sx[s], "gender-radio");
    m.type = "radio";
    m.name = sx[s];
    m.value = sx[s];
    APP(md, m);
    v[sx[s]] = m;
    APP(sd, md);
  }

  return sh;
};
var PI = function (id, f, s, ve, t, r, no) {
  var h,
    fe,
    se,
    el = t ? "p" : "input",
    ct = t ? 1 : 0,
    so = no ? no[1] : s,
    fo = no ? no[0] : f;
  id = id ? id : f.split(" ")[0];
  h = DIV(id, "pair-holder");
  fe = Ie(f, t, "", "", "", r, "pie1");
  fe.style.position = "relative";
  fe.style.display = "inline-block";
  APP(h, fe);
  se = Ie(s, t, "", "", "", r, "pie2");
  se.style.position = "relative";
  se.style.display = "inline-block";
  if (ve) {
    ve[fo] = Cld(fe, ct);
    ve[so] = Cld(se, ct);
  }
  APP(h, se);

  return h;
};
function Se(pe) {
  var se = pe.childNodes[1],
    et = [se.id, se.className],
    cnt,
    txt = se.tagName == "P" ? se.innerHTML : se.value;

  if (se.tagName == "P") {
    cnt = $$$("input", et[0], et[1]);
    cnt.value = txt;
  } else {
    cnt = $$$("P", et[0], et[1]);
    cnt.style.WebkitMarginAfter = 0;
    cnt.style.WebkitMarginBefore = 0;
    cnt.innerHTML = txt;
  }
  Switch(pe, cnt, se);
}
var cud = function (tr) {
  var pe,
    f,
    ch = ["State of Origin", "LGA", "Tribe"];

  pe = DIV("cul-det");
  for (var c in ch) {
    f = ik(ch[c]);
    f.style.position = "relative";
    f.style.display = "inline-block";
    APP(pe, f);
    if (tr) tr[ch[c]] = $$(f, "input")[0];
  }

  return pe;
};
var Ih = function (n, s) {
  var rd, im, nd, ns;

  rd = DIV(n, "ih-d");
  im = DIV(n, "ih-img");
  i = $$$("img", n, "img");
  i.src = s + "/" + n;
  APP(rd, im);
  APP(im, i);
  nd = DIV(n, "ih-nd");
  APP(rd, nd);
  ns = $$$("h6", n, "ih-sp");
  ns.innerHTML = n.split(".")[0].slice(0, 12);
  APP(nd, ns);
  return rd;
};
function stcen(d, t, z) {
  d.style.position = "absolute";
  d.style.margin = "auto";
  d.style.left = 0;
  d.style.right = 0;
  d.style.top = t ? t : 0;
  if (!t) d.style.bottom = 0;
  d.style.zIndex = z;
}
function srtO(o) {
  var a = [],
    no = {};
  for (var i in o) {
    a.push(i);
  }
  if (a.length > 0) {
    for (var i in a) {
      no[a[i]] = o[a[i]];
    }
    return no;
  } else {
    return false;
  }
}
function X(c) {
  if (c.parentNode) POP(c.parentNode, c);
}
var confama = function () {
  var rd, h, sd, sp, bd, yb, nb;
  rd = DIV("confama");
  Cos["cfm"] = rd;
  h = $$$("h4");
  h.innerHTML = "Confirm";
  APP(rd, h);
  sd = DIV("csd");
  sp = $$$("span");
  APP(rd, sd);
  APP(sd, sp);
  bd = DIV("cfm-bd");
  APP(rd, bd);
  yb = bottle("Yes", "", "y");
  nb = bottle("No", "", "n");
  APP(bd, yb);
  APP(bd, nb);

  addEvent(rd, "click", function (e) {
    e = e || window.event;
    e = e.target || e.srcElement;

    if (e.id == "y-button") {
      FE();
      X(rd);
      Mng = false;
    }
    if (e.id == "n-button") {
      X(rd);
      FE = null;
      Mng = false;
    }
  });
};
var mld = function (m, a) {
  var rd,
    dl,
    mm = typeof m == "object" ? m[1] : m;
  rd = DIV(mm + "mld", "mld");
  if (typeof m == "string") {
    Cos[m]["mld"] = rd;
  } else {
    m[0][m[1]] = rd;
  }
  dl = mL("mdef", a);
  APP(rd, dl);
};
var mL = function (id, a) {
  var rd, ml, l, s;
  rd = DIV(id, "ml");
  ml = $$$("ul", "menu-l");
  APP(rd, ml);
  for (var o in a) {
    l = $$$("li", a[o], "mnu-li");
    s = $$$("span", a[o], "menu-op");
    s.innerHTML = a[o];
    APP(l, s);
    APP(ml, l);
  }
  return rd;
};
function hun(el, p) {
  el.style.position = p;
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.left = 0;
  el.style.top = 0;
}
function paint(s, e, b, c) {
  if (s) {
    e.style.background = b;
    e.style.color = c;
  } else {
    e.style.background = "";
    e.style.color = "";
  }
}
function casename(n) {
  n = clrnme(n);
  n = n.split(" ");
  n = cse(n[0]) + " " + cse(n[1]);
  function cse(s) {
    var a = s.toLowerCase(),
      f = a.charAt(0),
      u = f.toUpperCase();
    a = a.replace(f, u);
    return a;
  }
  return n;
}
function clrnme(n) {
  n = n.split(" ");
  if (n.length > 2) {
    var nn = [];
    for (var i in n) {
      if (n[i] != " " && n[i] != "" && nn.length < 2) nn.push(n[i]);
    }
    n = nn[0] + " " + nn[1];
  } else {
    n = n[0] + " " + n[1];
  }
  return n;
}
var ix = function (id) {
  return bottle("IX", "wscx", id);
};
function CallSB(fp, sa) {
  if (fp.fnc) RSF[fp.log] = fp.fnc;
  socket.emit("csb", JSON.stringify(fp));
  socket.on("csbr", function (so) {
    so = jp(so);
    OS[so.c] = so.os;
    if (!Alog[so.log]) {
      SBz[so.c] = so.rd;
      TTas[so.c] = so.ta;
    }
    if (sa) sa[so.c] = so.ca;
    ResCaller(so);
  });
}
function CallCL(fp) {
  if (fp.fnc) RSF[fp.log] = fp.fnc;
  socket.emit("cl", JSON.stringify(fp));
  socket.on("rcl", function (so) {
    so = JSON.parse(so);
    if (!Alog[so.log]) CL[so.c] = so.rd;
    ResCaller(so);
  });
}
function ResCaller(so) {
  if (!Alog[so.log]) {
    if (RSF[so.log]) {
      RSF[so.log]();
      delete RSF[so.log];
    }
    Alog[so.log] = true;
  }
}
function mkelog(m) {
  var d = new Date();
  d = d.toLocaleString() + "-" + d.getMilliseconds();
  d = m + "//" + d;
  return d;
}
function CallSNS(o) {
  if (o.fnc) RSF[o.log] = o.fnc;
  socket.emit("sns", JSON.stringify(o));
  socket.on("snsp", function (d) {
    d = JSON.parse(d);
    if (!Alog[d.log]) sns = d.rd;
    ResCaller(d);
  });
}
function stI(s, c) {
  var d = CL[c].details,
    st = false,
    nm;
  if (!SAI[c]) SAI[c] = {};
  for (var i in d) {
    nm = d[i].bd;
    nm = nm.Name;
    if (nm == s) {
      nm = i;
      st = true;
      if (!SAI[c][s]) SAI[c];
      break;
    }
  }
  if (st) {
    return nm;
  } else {
    return st;
  }
}
function cTv(o) {
  var no = {};
  for (var i in o) {
    no[i] = o[i].value;
  }
  return no;
}
var IG = function (o, ii) {
  var s = {},
    im = $$$("img");
  s.w = "width";
  s.h = "height";
  (s.br = "borderRadius"), (s.p = "position"), (s.m = "margin");
  if (o.sr) im.src = o.sr;
  if (o.id) im.id = ii ? o.id : o.id + "-ig";
  if (o.cn) im.className = o.cn;
  for (var i in s) {
    if (o[i]) im.style[s[i]] = o[i];
  }
  return im;
};
var a4div = function (id) {
  var rd = DIV(id, "a4div");
  rd.style.width = "595px";
  rd.style.height = "842px";
  return rd;
};
var folb = function (nm) {
  var rd = DIV(nm, "folb"),
    ig,
    io = {},
    igd = DIV(nm, "fol-igd"),
    nd = DIV(nm, "fol-nd"),
    ns = $$$("span", nm, "fol-sp");
  io.sr = "./fs.png";
  io.id = nm;
  io.cn = "fol-i";
  ig = IG(io, true);
  APP(rd, igd);
  APP(igd, ig);
  APP(rd, nd);
  APP(nd, ns);
  ns.innerHTML = nm;

  return rd;
};
function nxT(t) {
  var Ts = ["First", "Second", "Third"],
    rt;
  if (t == Ts[0]) rt = Ts[1];
  if (t == Ts[1]) rt = Ts[2];
  if (t == Ts[2]) rt = Ts[0];
  return rt;
}
var rfv = function () {
  var c = DIV("resfv");
  c.style.position = "relative";
  c.style.width = "955px";
  c.style.height = "1278px";
  c.style.margin = "auto";
  c.style.background = "white";
  return c;
};
/*'1406px';*/
var iso = function (el) {
  return typeof el == "object";
};
var rar = function (a, c) {
  var xc = a.length - c,
    b = [];
  for (var i = 0; i < xc; i++) b.push(a[i]);
  return b;
};
var kwp = function () {
  return par([hea(6, "Powered by: KARLDWORLD(C9).", "kwp-h6")], "kwpower");
};
var phul = function (ar, ra, as, vl, ob, ns) {
  var ul = colbox("phul", 12, 12, 12, 12),
    b = {},
    f = {},
    c,
    k,
    m,
    eo = { e: ul, o: b, a: f, f1: myf1 },
    d,
    v,
    q,
    s;
  addclass(ul, "form");
  for (var i in ar) {
    v = ra && ra[i] ? ra[i] : "";
    k = as && as[i] ? as[i] : "text";
    c =
      ob && ob[ar[i]]
        ? obinput({ o: ob[ar[i]], at: { placeholder: ar[i] } })
        : {
            i:
              k.toLowerCase() == "gender"
                ? select(cto(["male", "female"]), "", "form-control").e
                : input(ar[i], "form-control tright", {
                    placeholder: ar[i],
                    type: k,
                    name: k,
                  }),
          };
    m = as && as[i] == "number" && vl && vl[i] ? parse(vl[i]) : "";
    if (vl && !m) m = vl[i];
    c.i.value = vl ? m : "";
    q = small(v);
    s = par([q.e], "", "phat");
    s.style.textIndent = ".5em";
    d = par(ns ? [c.e ? c.e : c.i] : [s, c.e ? c.e : c.i], "", "form-group");
    APP(ul, d);
    b[ar[i]] = c.i;
    f[ar[i]] = q.e;
  }
  function myf1(o) {
    for (var i in o) {
      k = ocn(ra) ? "enter " + i : i;
      v = small(k);
      s = par([v.e], "", "phat");
      s.style.textIndent = ".5em";
      d = par([s, o[i]], "", "form-group");
      APP(ul, d);
      b[i] = o[i];
      f[i] = v.e;
    }
  }

  return eo;
};
var modal = (o) => {
  var hd = $$$("header", "", "flex justify-between", "", [
      DIV("", "", "", o.hd),
      but(
        [$$$("i", "xmod", "bi bi-x font25")],
        "",
        "xmod",
        "inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
      ),
    ]),
    ws = DIV(
      "modal-ws",
      "modal-ws text-sm text-gray-700 dark:text-gray-400",
      "",
      o.ws
    ),
    md = DIV("", "mt-4 mb-6", "", [ws]),
    mm = DIV(
      "modal",
      "w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl",
      {
        "x-transition:enter": "transition ease-out duration-150",
        "x-transition:enter-start": "opacity-0 transform translate-y-1/2",
        "x-transition:enter-end": "opacity-100",
        "x-transition:leave": "transition ease-in duration-150",
        "x-transition:leave-start": "opacity-100",
        "x-transition:leave-end": "opacity-0  transform translate-y-1/2",
        role: "dialog",
        style: "",
      },
      [
        hd,
        md,
        $$$(
          "footer",
          "",
          "flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800",
          "",
          [
            but(
              o.k2 ? o.k2 : "Cancel",
              "",
              "mkey2",
              "w-full px-5 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
            ),
            but(
              o.k1 ? o.k1 : "Submit",
              "",
              "mkey1",
              "w-full px-5 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            ),
          ]
        ),
      ]
    ),
    rd = DIV(
      "xmod",
      "fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",
      {
        "x-transition:enter": "transition ease-out duration-150",
        "x-transition:enter-start": "opacity-0",
        "x-transition:enter-end": "opacity-100",
        "x-transition:leave": "transition ease-in duration-150",
        "x-transition:leave-start": "opacity-100",
        "x-transition:leave-end": "opacity-0",
        style: "",
      },
      [mm]
    ),
    eo = { e: rd, fx: myfx },
    val = true;
  function myfx(v) {
    X(rd);
    if (v && o.fx) o.fx();
  }
  function myf1() {
    o.f1();
  }
  function myf2() {}
  addEvent(rd, "keydown", (v) => {
    var e = v.code,
      ev = v.key;
    if (e == "Enter" || ev == "Enter") myf1();
    if (ev == "Escape" || e == "Escape") myfx();
  });
  addEvent(rd, "click", (e) => {
    e = ee(e);
    if (e.id == "xmod") myfx();
    if (e.id == "mkey2") myfx(true);
    if (e.id == "mkey1") myf1();
  });
  return eo;
};
var phul2 = function (ar, ra, as, vl, ob, ns, tp, tc) {
  var ul = $$$("form"),
    rd = DIV("widthun", "", "", [ul]),
    wc = 1,
    b = {},
    f = {},
    c,
    k,
    m,
    eo = { e: rd, o: b, a: f, f1: myf1, f2: myf2 },
    d,
    v,
    q,
    s,
    w,
    x,
    so;
  for (var i in ar) {
    v = ra && ra[i] ? ra[i] : "";
    k = as && as[i] ? as[i] : "";
    x = "input-" + wc;
    if (k.toLowerCase() == "category") so = prov;
    if (k.toLowerCase() == "location") so = loca;
    if (k.toLowerCase() == "gender") so = ["male", "female"];
    q = $$$("label", tc ? tc : "", "form-label img-zoomin", { for: x }, v);
    c = {
      i:
        k.toLowerCase() == "gender"
          ? select(cto(["male", "female"]), x, "form-control").e
          : input(
              x,
              "form-control img-zoomin",
              {
                required: true,
                placeholder: ar[i],
                type: k == "phone" ? "number" : k,
                name: k,
              },
              tp ? tp[i] : ""
            ),
    };
    if (k == "phone") {
      var g = phoneinput({ p: ra[i], q: q });
      c.i = g.s;
      c.e = g.e;
    }
    if (tp && tp[i]) c.i.style.height = "10rem";
    m =
      as && (as[i] == "number" || as[i] == "phone") && vl && vl[i]
        ? parse(vl[i])
        : "";
    if (vl && !m) m = vl[i];
    c.i.value = vl ? m : "";
    d = DIV(
      "",
      "animated zoomIn form-floating mb-2",
      "",
      k == "phone" ? [c.e ? c.e : c.i] : [c.e ? c.e : c.i, q]
    );
    APP(ul, d);
    b[ar[i]] = c.i;
    f[ar[i]] = q;
    wc++;
  }
  if (ob) feedme(ul, ob);
  function myf1(o) {
    for (var i in o) {
      k = ocn(ra) ? "enter " + i : i;
      x = "input-" + wc;
      o[i].id = x;
      q = $$$("label", tc ? tc : "", "form-label", { for: x }, v);
      d = DIV("", "animated zoomIn form-floating mb-4", "", [o[i], q]);
      APP(ul, d);
      b[i] = o[i];
      f[i] = q;
    }
  }
  function myf2(v) {
    feedme(ul, v);
  }

  return eo;
};
var phoneinput = (o) => {
  var x = phones,
    q = o && o.q ? o.q : small().e,
    bt = but(
      [span("NG", "font11", "me-1")],
      "button",
      "",
      "btn btn-light dropdown-toggle d-flex align-items-center cpi-drop",
      {
        "data-target": "#dropper",
        "data-bs-toggle": "dropdown",
        "aria-expanded": false,
      }
    ),
    ip = input("", "form-control border-0 phone-input flex-shrink-1", {
      style: "outline: none;",
      pattern: "[0-9]+",
      required: true,
      minlength: "10",
      maxlength: "10",
      placeholder: o && o.p ? o.p : "Enter valid mobile number",
      type: "phone",
      name: "phone",
    }),
    x1 = DIV("dropper", "dropdown dropdown-menu w-100", {
      style: "max-height:10em;overflow:hidden scroll;position:unset",
    }),
    x2 = DIV("", "input-group mb-1 border rounded", "", [
      bt,
      x1,
      span(
        "+234",
        "",
        "input-group-text bg-white text-muted border-0 cpi-ext-txt"
      ),
      ip,
    ]),
    x3 = DIV("", "cpi-input", "", [
      x2,
      input("", "country-code-input", { type: "hidden" }),
    ]),
    x4 = DIV("", "", "", [$$$("form", "", "", "", [x3])]),
    rd = DIV("", "align-items-center justify-content-center w-100", "", [x4]),
    eo = { e: rd, s: ip, f1: myf1, f2: myf2 };
  for (var i in x) APP(x1, myboy(i));
  function myf1() {
    return !ip.value ||
      parse(ip.value) == NaN ||
      (bt.childNodes[0].textContent == "NG" &&
        ocn(parse(ip.value).toString()) != 10)
      ? ""
      : "0" + ip.value;
  }
  function myf2() {
    return { n: myf1(), c: x[bt.childNodes[0].textContent] };
  }
  function myboy(v) {
    var z = x[v],
      v1 = but(
        z.name + " (" + z.dial_code + ")",
        "button",
        "font11",
        "dropdown-item",
        {
          "data-cpi-icon": v,
          "data-cpi-ext": z.dial_code,
          "data-cpi-min-length": "10",
          "data-cpi-max-length": "10",
        }
      );
    addEvent(v1, "click", () => {
      bt.click();
    });
    return v1;
  }
  return eo;
};
var signinput = (o) => {
  var x = signs,
    q = o && o.q ? o.q : small().e,
    bt = but(
      [span("NGN", "font11", "me-1")],
      "button",
      "",
      "btn btn-light dropdown-toggle d-flex align-items-center cpi-drop",
      {
        "data-target": "#dropper",
        "data-bs-toggle": "dropdown",
        "aria-expanded": false,
      }
    ),
    ip = input("", "form-control border-0 phone-input flex-shrink-1", {
      style: "outline: none;",
      pattern: "",
      required: true,
      placeholder: o && o.p ? o.p : "Enter amount",
      type: "number",
      name: "&#8358;",
    }),
    x1 = DIV("dropper", "dropdown dropdown-menu w-100", {
      style: "max-height:10em;overflow:hidden scroll;position:unset",
    }),
    x2 = DIV("", "input-group mb-1 border rounded", "", [
      bt,
      x1,
      span(
        "&#8358;",
        "",
        "input-group-text bg-white text-muted border-0 cpi-ext-txt"
      ),
      ip,
    ]),
    x3 = DIV("", "cpi-sign-input", "", [
      x2,
      input("", "country-code-input", { type: "hidden" }),
    ]),
    x4 = DIV("", "", "", [$$$("form", "", "", "", [x3])]),
    rd = DIV("", "align-items-center justify-content-center w-100", "", [x4]),
    eo = { e: rd, s: ip, f1: myf1 };
  for (var i in x) APP(x1, myboy(i));
  function myf1() {
    return !ip.value || parse(ip.value) == NaN
      ? ""
      : { s: ip.name, v: parse(ip.value) };
  }
  function myboy(v) {
    var z = x[v],
      v1 = but(
        z.currency + " (" + z.symbol + ")",
        "button",
        "font11",
        "dropdown-item",
        {
          "data-cpi-icon": v,
          "data-cpi-ext": z.symbol,
          "data-cpi-min-length": "8",
          "data-cpi-max-length": "9",
        }
      );
    addEvent(v1, "click", () => {
      bt.click();
    });
    return v1;
  }
  return eo;
};
var phoneinput2 = (o) => {
  var x = phones,
    q,
    bt = but(
      [span("NG", "font11", "me-1")],
      "button",
      "",
      "btn btn-light mr-2 d-flex align-items-center cpi-drop",
      {}
    ),
    ip = input("", "form-control border-0 phone-input flex-shrink-1", {
      style: "outline: none;",
      pattern: "[0-9]+",
      required: true,
      minlength: "10",
      maxlength: "10",
      placeholder: "Enter valid mobile number",
      type: "phone",
      name: "phone",
    }),
    x1 = DIV("dropper", "collapse dropdown-menu w-100", {
      style: "max-height:10em;overflow:hidden scroll;",
    }),
    x2 = DIV("", "input-group mb-1 border rounded", "", [
      bt,
      x1,
      span(
        "+234",
        "",
        "input-group-text bg-white text-muted border-0 cpi-ext-txt"
      ),
      ip,
    ]),
    x3 = DIV("", "cpi-input", "", [
      x2,
      input("", "country-code-input", { type: "hidden" }),
    ]),
    x4 = DIV("", "", "", [$$$("form", "", "", "", [x3])]),
    rd = DIV("", "align-items-center justify-content-center w-100", "", [x4]),
    eo = { e: rd, s: ip, f1: myf1 };
  for (var i in x) APP(x1, myboy(i));
  function myf1() {
    return !ip.value ||
      parse(ip.value) == NaN ||
      (bt.childNodes[0].textContent == "NG" &&
        ocn(parse(ip.value).toString()) != 10)
      ? ""
      : "0" + parse(ip.value);
  }
  function myboy(v) {
    var z = x[v],
      v1 = but(
        z.name + " (" + z.dial_code + ")",
        "button",
        "font11",
        "dropdown-item",
        {
          "data-cpi-icon": v,
          "data-cpi-ext": z.dial_code,
          "data-cpi-min-length": "8",
          "data-cpi-max-length": "9",
        }
      );
    return v1;
  }
  return eo;
};
var txtphul = function (ar, ra, as, vl, ob, ns) {
  var ul = colbox("phul", 12, 12, 12, 12),
    b = {},
    f = {},
    c,
    k,
    m,
    eo = { e: ul, o: b, a: f, f1: myf1 },
    d,
    v,
    q,
    s;
  addclass(ul, "form");
  for (var i in ar) {
    v = ra && ra[i] ? ra[i] : "";
    k = as && as[i] ? as[i] : "text";
    c =
      ob && ob[ar[i]]
        ? obinput({ o: ob[ar[i]], at: { placeholder: ar[i] } })
        : {
            i:
              k.toLowerCase() == "gender"
                ? select(cto(["male", "female"]), "", "form-control").e
                : input(
                    ar[i],
                    "form-control",
                    {
                      placeholder: ar[i],
                      type: k,
                      name: k,
                      style: "min-height:12em;",
                    },
                    true
                  ),
          };
    m = as && as[i] == "number" && vl && vl[i] ? parse(vl[i]) : "";
    if (vl && !m) m = vl[i];
    c.i.value = vl ? m : "";
    q = small(v);
    s = par([q.e], "", "phat");
    s.style.textIndent = ".5em";
    d = par(ns ? [c.e ? c.e : c.i] : [s, c.e ? c.e : c.i], "", "form-group");
    APP(ul, d);
    b[ar[i]] = c.i;
    f[ar[i]] = q.e;
  }
  function myf1(o) {
    for (var i in o) {
      k = ocn(ra) ? "enter " + i : i;
      v = small(k);
      s = par([v.e], "", "phat");
      s.style.textIndent = ".5em";
      d = par([s, o[i]], "", "form-group");
      APP(ul, d);
      b[i] = o[i];
      f[i] = v.e;
    }
  }

  return eo;
};
var selphul = function (ar, ra, vl, k) {
  var ul = colbox("phul", 12, 12, 12, 12),
    b = {},
    f = {},
    c,
    k,
    eo = { e: ul, o: b, a: f, f1: myf1 },
    d,
    v,
    q,
    s;
  addclass(ul, "form");
  for (var i in ar) {
    c = select(k ? ra[i] : ra, "", "form-control").e;
    if (vl) c.value = vl[i];
    q = small(ar[i]);
    s = par([q.e], "nomargin", "phat");
    s.style.textIndent = ".5em";
    d = par([s, c], "", "form-group");
    APP(ul, d);
    b[ar[i]] = c;
    f[ar[i]] = q.e;
  }
  function myf1(o) {
    for (var i in o) {
      v = small(i);
      s = par([v.e], "", "phat");
      s.style.textIndent = ".5em";
      d = par([s, o[i]], "", "form-group");
      APP(ul, d);
      b[i] = o[i];
      f[i] = v.e;
    }
  }

  return eo;
};
var eform = function (a, id, c, at) {
  var rd = $$$("form", id, c, at, a);
  return rd;
};
var efgrup = function (a, id, c, at) {
  var rd = DIV(id, "form-group", at, a);
  return rd;
};
var icon = function (n, id, at, c) {
  var ic = ICN,
    p = span("", id, ic[n]);
  attme(p, at);
  p.style.paddingRight = ".2em";
  if (c) addclass(p, c);
  return p;
};
var icon2 = (v, i, c, at) => {
  var a = $$$("i", i, INC[v]);
  if (c) addclass(a, c);
  if (at) attme(a, at);
  return a;
};
var iconanc = function (r, b, t, id, c, i) {
  var f = b ? span(t) : icon(i),
    s = b ? icon(i) : span(t),
    rd = anc(r, [f, s], c, id);
  return rd;
};
var iconbtn = function (b, t, id, c, i) {
  var at = { "aria-hidden": true },
    f = b ? span(t) : icon(i, at),
    s = b ? icon(i, at) : span(t),
    rd = but([f, s], "button", id, c);
  return rd;
};
var dropmenu = (o) => {
  var kk = o.k
      ? o.k
      : [
          icon2("bwidth", "white", "font20"),
          span("Toggle Dropdown", "", "sr-only"),
        ],
    bt = but(
      kk,
      "button",
      "dropmkey",
      "dropdown-toggle btn btn-md btn-link noline nopad",
      {
        "data-toggle": "dropdown",
        "aria-haspopup": true,
        "aria-expanded": false,
      }
    ),
    ul = DIV("drop2ul", "dropdown-menu"),
    rd = DIV(o.id, "dropdown btn-group", "", [bt, ul]),
    eo = { e: rd };
  ul.setAttribute("aria-labelledby", "dropmkey");

  for (var i in o.a) APP(ul, myboy(i));

  function myboy(v) {
    var k = o.a[v],
      y0 = o.ic
        ? [anc("", [icon2(o.ic[v], "grey6"), small(" " + k, "grey6").e])]
        : [anc("", k)],
      y1 = $$$("li", "", "dropdown-item", "", y0);
    addEvent(y1, "click", () => {
      o.fnc(k);
    });
    return y1;
  }
  return eo;
};
var popmenu = (o) => {
  var hx = hea(1, [strong("X", "white", "font25").e], "hov1", "bred rad100"),
    kk = o.k
      ? o.k
      : [
          icon2("bwidth", "white", "font17"),
          span("Toggle Dropdown", "", "sr-only"),
        ],
    bt = but(kk, "button", "dropmkey", "btn btn-md btn-link noline nopad"),
    ul = $$$("ul", "bwhite", "nopad"),
    bu = colbox(
      "pad1",
      12,
      12,
      12,
      12,
      [
        center(
          o.hb
            ? [
                par("", "mabot1"),
                hx,
                par("", "mabot1"),
                o.hb,
                par("", "mabot2"),
                ul,
              ]
            : [par("", "height4"), hx, par("", "mabot2"), ul]
        ).e,
      ],
      "bwhite"
    ),
    rd = DIV(o.id, "dropdown btn-group", "", [bt]),
    eo = { e: rd };
  rootstyle(hx, "width:1.3em;height:1.3em;");
  rootstyle(ul, "list-style:none");
  rootstyle(
    bu,
    "position:fixed;z-index:95;width:100%;height:100%;left:0;top:0;opacity:.95;float:none;overflow-y:scroll;"
  );
  for (var i in o.a) APP(ul, myboy(i));
  function myf1() {
    if (fada(bu)) return;
    APP(document.body, bu);
  }
  function myfx() {
    X(bu);
  }
  function myboy(v) {
    var k = o.a[v],
      y0 = o.ic
        ? [
            par(
              [
                icon2(o.ic[v], "white", "font17"),
                small(" " + k, "white", "font12").e,
              ],
              "nomargin"
            ),
          ]
        : [par(k, "nomargin")],
      y1 = $$$(
        "li",
        "height4",
        "bg-dark text-light rad2 hov1 mabot1 animated zoomIn",
        "",
        y0
      );
    rootstyle(y1, "padding-top:1em;");
    addEvent(y1, "click", () => {
      myfx();
      o.fnc(k);
    });
    return y1;
  }
  if (o.pf && o.hb)
    addEvent(o.hb, "click", () => {
      o.pf();
      myfx();
    });
  addEvent(bt, "click", myf1);
  addEvent(hx, "click", myfx);
  return eo;
};
var pah = function (id, c, cl) {
  var rd = DIV(id, "page-header");
  if (c) feedme(rd, c);
  if (cl) addclass(rd, cl);
  return rd;
};
var input = function (id, c, at, ta, vl, fn) {
  var v = ta ? "textarea" : "input",
    rd = $$$(v, id, c, at, vl);
  if (ta) rd.style.minHeight = "10em";
  if (fn)
    addEvent(rd, "input", () => {
      if (rd.value < fn.l) {
        rd.value = fn.l;
        return;
      }
      fn.f(rd.value);
    });
  addEvent(rd, "keydown", (v) => {
    var e = v.key,
      ev = v.code;
    if (e == "Enter" || ev == "Enter") {
      v.preventDefault();
    }
  });
  return rd;
};
var vinput = function (vl, id, c, at, ta) {
  var v = input(id, c, at, ta);
  v.value = vl;
  return v;
};
var ingrup = function (id, c, sz, f) {
  var rd = DIV(id, "input-group input-group-" + sz),
    ad = span(c, "", "input-group-addon"),
    ip = input("", "form-control", { type: "text", placeholder: c });
  if (f) {
    APP(rd, ad);
    APP(rd, ip);
  } else {
    APP(rd, ip);
    APP(rd, ad);
  }
  return rd;
};
var hea = function (c, tx, id, cl, at) {
  var t = "h" + c,
    a = $$$(t, id, cl);
  if (at) attme(a, at);
  if (typeof tx == "string") {
    a.innerHTML = tx;
  } else {
    feedme(a, tx);
  }
  return a;
};
var jum = function (id, cl) {
  var d = DIV(id, "jumbotron bg-gradient-primary ");
  if (cl) feedme(d, cl);
  attme(d, { "enable-gradients": true });
  return d;
};
var par = function (tx, id, c, at) {
  var p = $$$("p", id, c);
  attme(p, at);
  if (typeof tx != "object") {
    p.innerHTML = tx;
  } else {
    feedme(p, tx);
  }
  return p;
};
var anc = function (rf, cn, cl, id, ro) {
  var a = $$$("a", id, cl);
  if (rf) a.href = rf;
  if (cn) {
    if (typeof cn != "object") {
      a.innerHTML = cn;
    } else {
      feedme(a, cn);
    }
  }
  attme(a, ro);
  return a;
};
var tanc = function (rf, cn, cl, id, ro) {
  var a = $$$("a", id, cl);
  a.href = rf;
  if (cn) {
    if (typeof cn != "object") {
      a.innerHTML = cn;
    } else {
      APP(a, cn);
    }
  }
  a.setAttribute("data-toggle", "collapse");
  if (typeof ro == "object") for (var i in ro) a[i] = ro[i];
  return a;
};
var trow = function (id, c, a) {
  var rd = $$$("tr", id, c),
    th = $$$("td"),
    ac = anc("", a[0]),
    p;
  APP(rd, th);
  APP(th, ac);
  for (var i = 1; i < ocn(a); i++) {
    th = $$$("td", "", "text-center");
    p = $$$("input", "", "text-center");
    p.value = a[i];
    p.style.width = "6em";
    p.style.border = 0;
    APP(rd, th);
    APP(th, p);
  }
  return rd;
};
var atrow = function (id, c, o) {
  var rd = $$$("tr", id, c),
    th = $$$("th", "strow-th"),
    ac = anc("", o.s, "strow-a"),
    p,
    a = T7,
    eo = {};
  eo.e = rd;
  eo.o = {};
  APP(rd, th);
  APP(th, ac);
  for (var i = 0; i < ocn(a); i++) {
    th = $$$("td", a[i], "strow-td");
    p = span(o.o[a[i]], a[i], "strow-s");
    APP(rd, th);
    APP(th, p);
    eo.o[a[i]] = p;
  }

  return eo;
};
var thed = function (id, c, a) {
  var rd = $$$("tr", id, c),
    th = $$$("th", "", "text-center"),
    ac = anc("", a[0]);
  APP(rd, th);
  APP(th, ac);
  for (var i = 1; i < a.length; i++) {
    th = $$$("th", "", "text-center");
    th.innerHTML = a[i];
    APP(rd, th);
  }
  return rd;
};
var thed2 = function (id, c, a) {
  var rd = $$$("tr", id, c),
    th;
  for (var i = 0; i < a.length; i++)
    APP(rd, $$$("td", "", "text-center", "", [small(a[i], "").e]));
  return rd;
};
var tab = function (eh, ha, o) {
  var cl = DIV("", "col-md-8 col-md-offset-4"),
    rd = row("", [cl]),
    bt = $$$("table", "", "table table-bordered table-striped table-hover"),
    tt = $$$("thead"),
    hr = $$$("tr"),
    th = $$$("td"),
    bb = $$$("tbody");
  th.innerHTML = eh;
  th.setAttribute("colspan", 8);
  APP(cl, bt);
  APP(bt, tt);
  APP(bt, bb);
  APP(tt, hr);
  APP(hr, th);
  th = thed("", "", ha);
  APP(bb, th);
  for (var i in o) {
    hr = trow("", "", o[i]);
    APP(bb, hr);
  }

  return rd;
};
var img = function (s, i, c, at) {
  var rd = $$$("img", i, c);
  rd.src = s;
  attme(rd, at);
  return rd;
};
var span = function (tx, id, c, at) {
  var sp = $$$("span", id, c);
  attme(sp, at);
  if (typeof tx != "object") {
    sp.innerHTML = tx;
  } else {
    feedme(sp, tx);
  }
  return sp;
};
var capitm = function (c1, c2, o) {
  var rd = DIV("", c1),
    b = DIV("", c2),
    c = DIV("carousel-caption");
  APP(rd, b);
  APP(rd, c);
  APP(c, o);
  return rd;
};
var colbox = function (id, l, m, s, x, cl, c, at) {
  var rd = DIV(
    id,
    "col-lg-" + l + " col-md-" + m + " col-sm-" + s + " col-xs-" + x + " colbox"
  );
  if (cl) for (var i in cl) APP(rd, cl[i]);
  if (c) addclass(rd, c);
  if (at) attme(rd, at);
  return rd;
};
var row = function (id, cl) {
  var rd = DIV(id, "row");
  for (var i in cl) {
    APP(rd, cl[i]);
  }
  return rd;
};
var butgroup = function (c, ar, id, g) {
  var rd = DIV(id, "btn-group btn-group-" + A1[c]),
    b;
  rd.role = "group";
  for (var i in ar) {
    b = typeof ar[i] == "string" ? but(i, "button", i, ar[i].c) : ar[i];
    APP(rd, b);
    if (g) g[i] = b;
  }
  return rd;
};
var separator = function () {
  var rd = $$$("li", "", "divider", { role: "saparator" });
  return rd;
};
var caret = function () {
  var rd = span("", "", "caret");
  return rd;
};
var but = function (v, t, id, c, ro) {
  var d = $$$("button", id, c);
  attme(d, ro);
  d.type = t;
  if (typeof v == "string") {
    d.innerHTML = v;
  } else {
    for (var i in v) APP(d, v[i]);
  }
  return d;
};
var rigiya = function (d, id, y) {
  var o = {
      lg: "well hidden-md hidden-sm hidden-xs",
      md: "well hidden-lg hidden-sm hidden-xs",
      sm: "well hidden-md hidden-lg hidden-xs",
      xs: "well hidden-md hidden-sm hidden-lg",
      sx: "well hidden-md hidden-lg",
      lm: "well hidden-sm hidden-xs",
    },
    rd = DIV(id, o[d]);
  if (y) feedme(rd, y);
  return rd;
};
var toggler = function (ct, id, h, tx, cp, cl) {
  var pc = cp ? "collapse" : "collapse in",
    ac = anc("#col" + ct + "Content", h, "", "", { "data-toggle": "collapse" }),
    h1 = hea(4, ac),
    cd = DIV("col" + ct + "Content", pc),
    cr = $$$("span", "", "caret");
  cd.innerHTML = tx;
  APP(cl, h1);
  APP(cl, cd);
  APP(h1, cr);
  return cl;
};
var mrgar = function (a, b) {
  var o = {};
  for (var i in a) o[a[i]] = b[i];
  return o;
};
var scren = function () {
  var o = {};
  o.w = screen.availWidth;
  o.h = screen.availHeight;
  return o;
};
var page = function (o, cl) {
  var rd = DIV("", "page");
  attme(rd, o);
  feedme(rd, cl);
  return rd;
};
var xbut = function (id) {
  return but(
    [icon2("larrow", id)],
    "button",
    id,
    "line1 border-left-danger px-1 py-0 btn btn-xs red font25 m-2 mb-3 border-bottom-danger norad"
  );
};
var jtab = function (id, at, cl) {
  return $$$(
    "table",
    id,
    "table table-bordered table-striped table-hover nomargin",
    at,
    cl
  );
};
var etab = function (id, at, cl, c) {
  return $$$(
    "table",
    id,
    c
      ? c + " table-striped table-hover nomargin"
      : "table-striped table-hover nomargin",
    at,
    cl
  );
};
var ctab = function (id, at, cl) {
  return $$$("table", id, "table nomargin", at, cl);
};
var tbod = function (i, c, at, cl) {
  return $$$("tbody", i, c, at, cl);
};
var printkeys = function () {
  return butgroup(
    2,
    [
      but(
        [icon("file"), span("print")],
        "button",
        "resprintkey",
        "btn btn-sm btn-primary"
      ),
      but(
        [icon("remove"), span("cancel")],
        "button",
        "xresbox",
        "btn btn-sm btn-danger"
      ),
    ],
    "resbox-bg"
  );
};
var clearfix = function (v) {
  var rd = DIV("", "clearfix visible-" + v);
  return rd;
};
var flexnb = function (id, ct, bt, ag) {
  var cc = ag ? ag.c : "",
    ii = ag ? ag.i : "",
    ad = par(ct.t, "dtag", "col"),
    sp = par(ct.v, "flx-sp", "col"),
    ip = input("", "flx-ip", ii),
    is = par([sp, ip], "flxis-dv"),
    rd = DIV(id, "input-group input-group-md flexie", "", [ad, is]),
    so = "",
    eo = {};
  ad.style.display = "inline-block";
  is.style.display = "inline-block";
  eo.e = rd;
  eo.f = flipme;
  eo.v = ip;
  flipme();
  function flipme(t) {
    if (!so) {
      ip.style.display = "none";
      sp.style.display = "";
      if (t) sp.innerHTML = id == "price" ? barme(ip.value) : ip.value;
      so = true;
    } else {
      ip.style.display = "";
      sp.style.display = "none";
      ip.value = id == "price" ? unbar(ct.v) : ct.v;
      if (name == "HOODFIX BD")
        if (id == S1[2]) {
          ip.type = "number";
        } else {
          ip.type = "text";
        }
      if (name == "MYSHOP")
        if (id == "price") {
          ip.type = "number";
        } else {
          ip.type = "text";
        }
      so = false;
    }
  }
  return eo;
};
var strong = (tx, id, c, at) => {
  var rd = $$$("strong", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx == "string" ? (rd.innerHTML = tx) : feedme(rd, tx);
  return eo;
};
var small = (tx, id, c, at) => {
  var rd = $$$("small", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx == "string" || typeof tx == "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var sup = (tx, id, c, at) => {
  var rd = $$$("sup", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx == "string" || typeof tx == "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var center = (tx, id, c, at) => {
  var rd = $$$("center", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx == "string" ? (rd.innerHTML = tx) : feedme(rd, tx);
  return eo;
};
var flashbox = (v, ia, r) => {
  var h = small("Notice", "blue").e,
    rd = colbox("nopad", 3, 2, 4, 11),
    eo = { e: rd, f1: myf1 },
    ks,
    it,
    x1,
    y = 0.8,
    zz = {};
  APP(document.body, rd);
  rootstyle(
    rd,
    "position:fixed;overflow:hidden;z-index:99999999999999;right:.3em;top:3em;width:39%;"
  );
  function myf1(v, ia, r) {
    y = 0.5;
    var k = "flash-" + datemap().key + (ocn(zz) + 1),
      x1 = sect(
        "",
        (r ? "bred" : "bgreen") +
          " ohidden my-2 px-2 pt-3 widthun white animated zoomIn",
        "",
        [
          par(
            [
              strong([icon2(r ? "fminode" : "fplnode", "white")]).e,
              par([small(v, "white", "font13").e], "nomargin", "mx-2"),
            ],
            "pad2",
            "d-flex"
          ),
        ]
      ),
      x2;
    zz[k] = x1;
    clg(k);
    APP(rd, x1);
    rootstyle(
      x1,
      "border-radius:.5em;overflow:hidden;z-index:99999999999999;box-shadow:.2em .5em .4em #bbba;transition:opacity:.4s;"
    );
    x2 = setTimeout(() => {
      myfx(k);
      clearTimeout(x2);
    }, 90);
    clg(k);
  }
  function myfx(k) {
    if (!zz[k]) return;
    var it = ia
        ? setInterval(() => {
            y = y - 0.1;
            zz[k].style.opacity = y;
            if (y < 0.1) clearInterval(it);
          }, 100)
        : "",
      x1 = setTimeout(() => {
        if (zz[k]) X(zz[k]);
        delete zz[k];
        clearTimeout(x1);
      }, 3000);
  }
  return eo;
};
var date = function (r) {
  var o = new Date(),
    v;
  if (r == "f") v = o.toString().split("+")[0];
  if (r == "m") v = o.getMonth();
  if (r == "y") v = o.getFullYear();
  if (r == "dt") v = o.getDate();
  if (r == "dy") v = o.getDay();
  if (r == "do") v = o;
  if (r == "h") v = o.getHours();
  if (r == "mn") v = o.getMinutes();
  if (r == "s") v = o.getSeconds();
  if (r == "ms") v = o.getMilliseconds();
  return v;
};
var select = (a, id, cl, at, fnc, fc) => {
  var rd = $$$("select", id, cl ? cl : "form-control", at),
    p = cta(a)[0],
    k,
    eo = { e: rd, f1: myf1 };
  for (var i in a) APP(rd, myboy(i));
  function myboy(v) {
    var op = $$$("option", "sel-opt");
    op.value = v;
    op.innerHTML = v;
    return op;
  }
  function myf1(v) {
    rd.innerHTML = "";
    for (var i in v) APP(rd, myboy(i));
  }
  if (fnc)
    k = setInterval(() => {
      if (rd.value != p) {
        fnc(fc ? a[rd.value] : rd.value);
        p = rd.value;
      }
    }, 50);
  return eo;
};
var selectpar = (o) => {
  var a = select(o.a, "selector", "font13 form-control dblock"),
    b = $$$(
      "label",
      o.i ? o.i : "",
      "form-label img-zoomin grey6",
      { for: "selector" },
      o.t
    ),
    rd = colbox("nopad", 12, 12, 12, 12, [
      $$$("form", "", "", "", [
        DIV("", "animated zoomIn form-floating mb-2", "", [a.e, b]),
      ]),
    ]),
    eo = { e: rd, s: a.e, f1: a.f1 },
    w = "";
  if (o.v) a.e.value = o.v;
  if (o.fnc) {
    setInterval(() => {
      if (w && a.e.value == w) return;
      o.fnc(a.e.value);
      w = a.e.value;
    }, 50);
  }
  return eo;
};
var doublesel = (o, fn) => {
  //{a:{},t1:tag1,t2:tag2}
  var a = sortOb(o.a),
    wx = cta(a)[0],
    b = a[wx],
    x1 = selectpar({ a: a, fnc: myf1, t: o.t1 }),
    x2 = selectpar({ a: b, t: o.t2 }),
    x3 = par([x2.e]),
    x4 = colbox("nopad", 12, 12, 12, 12, [x1.e], "mb-4"),
    x5 = colbox("nopad", 12, 12, 12, 12, [, x3], "mb-2"),
    x6 = colbox("pad5", 12, 12, 12, 12, [x4, x5]),
    rd = sect("", "py-2", "", [x6], "mabot1"),
    eo = { e: rd, f1: myf1, f2: myf2 };
  if (o && o.v1) {
    x1.s.value = o.v1;
    myf1(o.v1, o.v2);
  }
  function myf1(v, g) {
    if (v == wx) return;
    wx = v;
    X(x2.e);
    b = a[v];
    x2 = selectpar({ a: b, t: o.t2 });
    APP(x3, x2.e);
    if (g) x2.s.value = g;
  }
  function myf2() {
    return { s: x1.s.value, g: x2.s.value };
  }
  return eo;
};
var selul = (o, b, c) => {
  var ul = $$$("ul", "sel-ul"),
    rd = colbox("selul", 12, 12, 12, 12, [ul]),
    ct = 1,
    li,
    eo = { e: rd, f2: myf2, mk: myf3 },
    ao = {},
    ld,
    lo = {};
  for (var i in sortOb(o)) {
    li = mybox(i, ct);
    APP(ul, li);
    lo[i] = li;
    ct++;
  }
  function mybox(v, x) {
    ld = $$$("li", "sel-li", "", "", [small(x + ". " + v).e]);
    addEvent(ld, "click", () => {
      myf1(v);
    });
    return ld;
  }
  function myf1(v) {
    if (ao[v]) {
      delete ao[v];
      lo[v].style.background = "";
      lo[v].style.color = "";
    } else {
      ao[v] = true;
      lo[v].style.background = b;
      lo[v].style.color = c;
    }
  }
  function myf2() {
    return ao;
  }
  function myf3(v) {
    if (v) {
      for (var i in lo) if (!ao[i]) myf1(i);
    } else {
      for (var i in lo) if (ao[i]) myf1(i);
    }
  }

  return eo;
};
var oneselul = (o, b, c, fnc) => {
  var a = sortOb(o),
    a1 = {},
    ws = colbox("onesel-ws", 12, 12, 12, 12),
    rd = colbox("oneselul", 12, 12, 12, 12, [ws]),
    sx,
    eo = { e: rd, o: {}, f1: myf1 },
    qp,
    ak,
    am = "";

  for (var i in a) {
    sx = rap(i);
    eo.o[i] = sx;
    APP(ws, sx);
  }
  function addme(m) {
    if (m != am) {
      if (am) {
        delete a1[am];
        paint(eo.o[am]);
      }
      paint(eo.o[m], true);
      a1[m] = true;
      am = m;
    } else {
      delete a1[m];
      paint(eo.o[m]);
      am = "";
    }
  }
  function paint(v, w) {
    var c1 = "",
      b1 = "";
    if (w) {
      c1 = c;
      b1 = b;
    } else {
      c1 = "";
      b1 = "";
    }
    v.style.color = c1;
    v.style.background = b1;
  }
  function rap(z) {
    qp = par([icon("record"), small(z, "").e], "onesel-p");
    addEvent(qp, "click", function () {
      fnc ? fnc(z) : addme(z);
    });
    return qp;
  }
  function myf1() {
    return a1;
  }

  return eo;
};
var datemap = () => {
  var y = date("y"),
    m = date("m"),
    d = date("dt"),
    o = {
      f: date("f"),
      y: y,
      m: m,
      d: d,
      dy: date("dy"),
      h: date("h"),
      mn: date("mn"),
      s: date("s"),
      ms: date("ms"),
    };
  o.key =
    o.ms +
    "" +
    o.mn +
    "" +
    o.y +
    "" +
    o.d +
    "" +
    o.dy +
    "" +
    o.h +
    "" +
    o.m +
    "" +
    o.s;
  return o;
};
var nav = function (c, id) {
  id = id ? id : "";
  var rd = $$$("nav", id, "navbar navbar-light navbar-expand-lg fixed-top", "");
  if (c) feedme(rd, c);
  return rd;
};
var waiter = (t, fnc, xw) => {
  var tx = t ? t : "",
    uk = strong(tx).e,
    ub = par([uk], ""),
    ps = strong(""),
    pp = par([ps.e], "waiter-tp"),
    tp = par([small(tx).e], "waiter-tp"),
    sp = DIV("", "box1 spinner-border m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    sp2 = DIV("", "box1 spinner-grow m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    sp3 = DIV("", "box1 spinner-border m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    ux = par([DIV("", "text-center", "", [sp3]), ub, pp], "waiter-ux"),
    ku = fnc
      ? [
          ux,
          br(),
          butgroup(
            1,
            [but("minimize", "button", "waiterkey", "btn btn-md btn-primary")],
            "waiter-bg"
          ),
        ]
      : [ux],
    rd = colbox(
      xw ? "waiter2" : "waiter",
      12,
      12,
      12,
      12,
      [center(ku).e],
      "pt-5"
    ),
    eo = { e: rd, fp: myfp, f1: myf1 },
    c = 0,
    y = 0,
    a = ["red", "black", "green", "gold", "black", "gold", "red", "black"],
    g = true;
  //styleme(ub,mrgar(['width','height'],['5em','5em']));
  function myfp(o) {
    ps.e.innerHTML = tx + " - " + o.p + "%";
  }
  function myf1(t) {
    ps.e.innerHTML = t;
  }
  setInterval(() => {
    if (c == ocn(a)) c = 0;
    if (y == 100) {
      g = false;
    } else if (y == 0) {
      g = true;
    }
    styleme(sp, mrgar(["color"], [a[c]]));
    styleme(sp2, mrgar(["color"], [a[c]]));
    styleme(sp3, mrgar(["color"], [a[c]]));
    c++;
    g ? (y += 25) : (y -= 25);
  }, 300);

  function myf() {
    if (fnc) fnc();
  }

  addEvent(rd, "click", (e) => {
    e = ee(e);
    if (e.id == "waiterkey") myf();
  });

  return eo;
};
var waiter2 = (t, fnc, xw) => {
  var tx = t ? t : "",
    uk = strong(tx).e,
    ub = par([uk], ""),
    ps = strong(""),
    pp = par([ps.e], "waiter-tp"),
    tp = par([small(tx).e], "waiter-tp"),
    sp = DIV("", "box1 spinner-border m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    sp2 = DIV("", "box1 spinner-grow m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    sp3 = DIV("", "box1 spinner-border m-2 fw-bold font30", {
      role: "status",
      style: "border-width:medium;",
    }),
    ux = par([DIV("", "text-center", "", [sp3]), ub, pp], "", "", {
      style: "overflow: hidden;color:#09387d;margin-top:8em;",
    }),
    ku = fnc
      ? [
          ux,
          br(),
          butgroup(
            1,
            [but("minimize", "button", "waiterkey", "btn btn-md btn-primary")],
            "waiter-bg"
          ),
        ]
      : [ux],
    rd = colbox(
      xw ? "waiter2" : "waiter",
      12,
      12,
      12,
      12,
      [center(ku).e],
      "pt-5"
    ),
    eo = { e: rd, fp: myfp, f1: myf1 },
    c = 0,
    y = 0,
    a = ["red", "black", "green", "gold", "black", "gold", "red", "black"],
    g = true;
  //styleme(ub,mrgar(['width','height'],['5em','5em']));
  function myfp(o) {
    ps.e.innerHTML = tx + " - " + o.p + "%";
  }
  function myf1(t) {
    ps.e.innerHTML = t;
  }
  setInterval(() => {
    if (c == ocn(a)) c = 0;
    if (y == 100) {
      g = false;
    } else if (y == 0) {
      g = true;
    }
    styleme(sp, mrgar(["color"], [a[c]]));
    styleme(sp2, mrgar(["color"], [a[c]]));
    styleme(sp3, mrgar(["color"], [a[c]]));
    c++;
    g ? (y += 25) : (y -= 25);
  }, 300);

  function myf() {
    if (fnc) fnc();
  }

  addEvent(rd, "click", (e) => {
    e = ee(e);
    if (e.id == "waiterkey") myf();
  });

  return eo;
};
var navul = (id, cl, a, fnc, ai) => {
  var rd = $$$("ul", id, "navbar-nav"),
    eo = { e: rd };
  if (cl) addclass(rd, cl);
  for (var i in a) APP(rd, myboy(i));
  function myboy(x) {
    var v = a[x],
      v1 = $$$("li", "hov2", "nav-item", "", [
        anc("", ai ? [strong([icon2(ai[x])]).e, small(v).e] : v, "nav-link"),
      ]);
    addEvent(v1, "click", () => {
      myf1(v);
    });
    return v1;
  }
  function myf1(v) {
    fnc(v);
  }
  return eo;
};
var sect = (id, c, at, cl) => {
  var rd = $$$("section", id, c);
  attme(rd, at);
  if (cl) feedme(rd, cl);
  return rd;
};
var cont = (id, c, at, cl) => {
  var rd = DIV(id, "container", at, cl);
  if (c) addclass(rd, c);
  if (cl) feedme(rd, cl);
  return rd;
};
var timemap = () => {
  var a = {
    tx: datetxt(),
    f: date("f"),
    h: date("h"),
    m: date("mn"),
    s: date("s"),
    ms: date("ms"),
  };
  return a;
};
var accordian = (x) => {
  var o = x.o,
    y = 0,
    z = nuM,
    co = DIV("", "accordion accordion-flush"),
    ws = cont("", "", "", x.h ? [x.h, co] : [co]),
    rd = sect(x.id, "", "", [ws]),
    eo = { e: rd };
  for (var i in o) APP(co, myboy(i));
  function myboy(v) {
    var vv = but(v, "button", "", "accordion-button collapsed", {
        "data-bs-toggle": "collapse",
        "data-bs-target": "#flush-collapse" + z[y],
      }),
      v1 = DIV("", "accordion-item", "", [
        hea(2, [vv], "flush-heading" + z[y], "accordion-header"),
        DIV("flush-collapse" + z[y], "accordion-collapse collapse p-3", "", [
          small(o[v]).e,
        ]),
      ]);
    y++;
    vv.click();
    return v1;
  }
  return eo;
};
var accordian2 = (x) => {
  var o = x.o,
    y = 0,
    z = nuM,
    co = DIV("", "accordion accordion-flush"),
    ws = cont("", "", "", x.h ? [x.h, co] : [co]),
    rd = sect(x.id, "", "", [ws]),
    eo = { e: rd };
  for (var i in o) APP(co, myboy(i));
  function myboy(v) {
    var vv = but(v, "button", "", "accordion-button collapsed", {
        "data-bs-toggle": "collapse",
        "data-bs-target": "#flush-collapse" + z[y],
      }),
      ul = $$$("ul", "", "", { style: "list-style:circle;" }),
      v1 = DIV("", "accordion-item", "", [
        hea(2, [vv], "flush-heading" + z[y], "accordion-header"),
        DIV(
          "flush-collapse" + z[y],
          "accordion-collapse collapsed p-3",
          "",
          o[v].h ? [par(o[v].h, "blue"), ul] : [ul]
        ),
      ]);
    y++;
    for (var u in o[v].a)
      APP(ul, $$$("li", "grey6", "p-2", "", [small(o[v].a[u]).e]));
    setTimeout(() => {
      vv.click();
    }, 3);
    return v1;
  }
  return eo;
};
var accordian3 = (x, hi) => {
  var o = x.o,
    y = 0,
    z = nuM,
    co = DIV("", "accordion accordion-flush"),
    ws = sect("", "", "", x.h ? [x.h, co] : [co]),
    rd = sect(x.id, "", "", [ws]),
    eo = { e: rd },
    oo = {};
  for (var i in o) APP(co, myboy(i));
  if (hi)
    setTimeout(() => {
      myf1();
    }, 900);
  function myf1() {
    return;
    for (var i in oo) oo[i].click();
  }
  function myboy(v) {
    var vv = but(v, "button", "bwhite", "accordion-button collapsed", {
        style: "color:#000000cf;font-weight:bold;",
        "data-toggle": "collapse",
        "data-target": "#flush-collapse" + z[y],
        "aria-expanded": "false",
      }),
      v1 = DIV("", "accordion-item", "", [
        hea(2, [vv], "flush-heading" + z[y], "accordion-header"),
        DIV(
          "flush-collapse" + z[y],
          "accordion-collapse collapsed collapsing p-1 py-3",
          "",
          o[v].h ? [o[v].h, o[v].e] : [o[v].e]
        ),
      ]);
    y++;
    if (hi) oo[v] = vv;
    return v1;
  }
  return eo;
};
var accordian4 = (x, hi) => {
  var o = x.o,
    y = 0,
    z = nuM,
    co = DIV("", "accordion accordion-flush"),
    ws = sect("", "", "", x.h ? [x.h, co] : [co]),
    rd = sect(x.id, "", "", [ws]),
    eo = { e: rd },
    oo = {};
  for (var i in o) APP(co, myboy(i));
  if (hi)
    setTimeout(() => {
      myf1();
    }, 900);
  function myf1() {
    return;
    for (var i in oo) oo[i].click();
  }
  function myboy(v) {
    var vv = but(v, "button", "bwhite", "accordion-button collapsed", {
        style: "color:#000000cf;font-weight:bold;",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#flush-collapse" + z[y],
        "aria-expanded": "false",
      }),
      v1 = DIV("", "accordion-item", "", [
        hea(2, [vv], "flush-heading" + z[y], "accordion-header"),
        DIV(
          "flush-collapse" + z[y],
          "accordion-collapse collapsed collapsing p-1 py-3",
          "",
          o[v].h ? [o[v].h, o[v].e] : [o[v].e]
        ),
      ]);
    y++;
    if (hi) oo[v] = vv;
    return v1;
  }
  return eo;
};
var iframe = (id, c, at) => {
  var rd = $$$("iframe", id, c, at),
    eo = { e: rd };
  return eo;
};
function iterate(k, c) {
  var a = [];
  for (var i = 0; i < parse(c); i++) a.push(k);
  return a;
}
var inputpar = (o) => {
  var y = o.k ? o.k : "inputer",
    x = o.c ? o.c + " " : "",
    a = input(
      y,
      x + "form-control",
      {
        required: true,
        style: "padding-top:1.5em;",
        placeholder: o.t + "...",
        type: o.ty,
      },
      o.ta ? true : "",
      o.v ? o.v : "",
      o.fn ? o.fn : ""
    ),
    b = $$$(
      "label",
      o.i ? o.i : "",
      "form-label img-zoomin grey6",
      { for: y },
      o.t
    ),
    rd = colbox("nopad", 12, 12, 12, 12, [
      $$$("form", "", "", "", [
        DIV("", "animated zoomIn form-floating mb-2", "", [a, b]),
      ]),
    ]),
    eo = { e: rd, s: a, f1: myf1 };
  function myf1(v) {
    b.innerHTML = v;
  }
  if (o.v) a.value = o.v;
  return eo;
};
var progressbar = (v) => {
  var w,
    p,
    rd = DIV("", "progress ", ""),
    eo = { e: rd, f1: myf1 };
  myf1(v);
  function myf1(o) {
    if (p) X(p);
    w = "width:" + o.p + "%";
    p = DIV(
      "",
      "progress-bar progress-bar-striped",
      {
        role: "progressbar",
        style: w,
        ariaValuenow: o.p,
        ariaValuemin: 0,
        ariaValuemax: 100,
      },
      o.p + "%"
    );
    APP(rd, p);
  }

  return eo;
};
var uploadbox = (v) => {
  var h = small("File Upload", "blue").e,
    hd = pah("greenboy-hd", [center([hea(3, [h], "greenboy-h1")]).e]),
    pb = progressbar({ c: "", p: v.p }),
    ws = colbox("pad2", 12, 12, 12, 12, [pb.e]),
    rd = colbox("uploadbox", 4, 5, 6, 8, [hd, ws], "bwhite"),
    eo = { e: rd, fx: myfx, f1: myf1 },
    ks,
    it;
  APP(document.body, rd);
  UB = eo;
  rootstyle(
    rd,
    "position:fixed;overflow:hidden;z-index:999999;right:.5em;top:4em;box-shadow:.3em .3em .4em #bbba;padding:.5em padding-bottom:1em;transition:opacity:.4s;"
  );
  function myfx() {
    ks = 1;
    h.innerHTML = "File Uploaded Successfully.";
    it = setInterval(() => {
      ks -= 0.1;
      rd.style.opacity = ks;
      if (ks == 0) {
        X(rd);
        clearInterval(it);
      }
    }, 250);
  }
  function myf1(o) {
    pb.f1({ c: "bpurple", p: o.p });
  }
};
var scrollkey = (o) => {
  var rd = butgroup(
    3,
    [
      but(
        [icon2("lboxa", "prvbook", "font15")],
        "button",
        "prvbook",
        "btn btn-xs btn-success width4"
      ),
      but(
        [icon2("rboxa", "nxtbook", "font15")],
        "button",
        "nxtbook",
        "btn btn-xs btn-success width4"
      ),
    ],
    "greenboy-bg"
  );

  function myf1(v) {
    !o.k
      ? (() => {
          if (o.fnc) o.fnc(v);
        })()
      : (() => {
          var x1 = mysiblin(o.o, o.k, v);
          o.fnc(x1);
        })();
  }

  addEvent(rd, "click", function (e) {
    e = ee(e);
    if (e.id == "prvbook" || fada(e).id == "prvbook") myf1();
    if (e.id == "nxtbook" || fada(e).id == "nxtbook") myf1(true);
  });

  return rd;
};
var footer = (a) => {
  var t = a ? a : "",
    h = small(t, "grey").e,
    h2 = small("", "grey"),
    im = img("img/sflag.png", "width5", "dinline"),
    ut = DIV("width"),
    rd = DIV("footer", " py-2 credits text-center", "", [
      center([
        ut,
        hea(5, [h], "nomargin"),
        hea(6, [h2.e], ""),
        hea(
          6,
          [
            small("KARLDWORLD DESIGN ", "text-gradient-2").e,
            sup(date("y"), "green").e,
          ],
          "nomargin"
        ),
      ]).e,
    ]),
    eo = { e: rd, f1: myf1, f2: myf2, f3: myf3 },
    wc = "";
  function myf1(v) {
    h.innerHTML = v.toUpperCase();
  }
  function myf2(v) {
    h2.e.innerHTML = v.toUpperCase();
  }
  function myf3(o) {
    if (wc) X(wc.e);
    APP(ut, o.e);
    wc = o;
  }

  return eo;
};

//Mon Apr 03 2023 20:52:32 GMT
function sendxml(o) {
  var fm = new FormData(),
    xr = new XMLHttpRequest();
  fm.append(o.t, Js(o.o));
  xr.onload = () => {
    var a = jp(xr.response);
  };
  xr.open("POST", o.r);
  xr.send(fm);
}
function rmvatt(el, k) {
  if (!el || !k) return;
  el.removeAttribute(k);
}
function loadscripts(f) {
  if (scriptcall) return;
  scriptcall = true;
  var sa = f
    ? ["client/js/main.js", "client/js/owl.carousel.min.js"]
    : ["client/js/main.js", "client/js/owl.carousel.min.js"];
  for (var i in sa) APP(document.body, $$$("script", "", "", { src: sa[i] }));
}
function forbidexit() {
  window.addEventListener("beforeunload", function (e) {
    if (warn) {
      e.preventDefault();
      clg(e);
      e.returnValue = "";
      return "Please Click cancel if you are not attempting to close this page.";
    } else {
      clg("am off");
    }
  });
  function myf1() {
    alert("you are attempting to close this page");
  }
}
function forbidexit2() {
  window.onbeforeunload = null;
}
function unforbid() {
  window.removeEventListener(
    "beforeunload",
    function (e) {
      e.preventDefault();
      clg(e);
      e.returnValue = "";
      return "Please Click cancel if you are not attempting to close this page.";
    },
    true
  );
}
function mysiblin(o, e, f) {
  var a = cta(o),
    b = "",
    c;
  for (var i = 0; i < ocn(a); i++) {
    if (a[i] == e) {
      if (f) {
        b = i == ocn(a) - 1 ? 0 : i + 1;
      } else {
        b = i == 0 ? ocn(a) - 1 : i - 1;
      }
    }
  }
  c = b || b.toString() == "0" ? a[b] : e;
  return c;
}
function saleskey() {
  var a = datemap();
  return "sales_" + a.d + "-" + (parse(a.m) + 1) + "-" + a.y;
}
function scrollup() {
  window.scrollTo(0, 0);
}
function formatime(t) {
  if (!t) return "";
  var a = t.split(" "),
    b = a[0] + "-" + a[2] + "-" + a[1] + "-" + a[3],
    c = { d: b };
  return c;
}
function formatdate(d) {
  var a = d.split(" "),
    b = a[0] + "-" + a[2] + "-" + a[1] + "-" + a[3],
    e = fixdate(a[4]),
    c = { d: b, t: e };
  return c;
}
function timehour(t) {
  if (!t) return "";
  var x = t.split(":"),
    r = parse(x[0]) > 11 ? "PM" : "AM",
    a = r == "PM" ? parse(x[0]) - 12 : x[0],
    b = (a == 0 ? 12 : a) + " : " + x[1] + " " + r;
  return b;
}
function fixdate(d) {
  var a = d.split(":"),
    b = a[0].split(" "),
    c = parseInt(b[ocn(b) - 1]),
    d = ["AM", "PM"],
    e,
    f,
    g = "",
    h,
    j,
    k;

  if (c < 12 && c != 0) {
    e = d[0];
    f = c;
  }
  if (c > 11 && c != 0) {
    e = d[1];
    f = c == 12 ? 12 : c - 12;
  }
  if (c == 0) {
    e = d[0];
    f = 12;
  }

  for (var i = 0; i < ocn(b) - 1; i++) g = g + b[i] + " ";
  g = g.replace(" 00 ", "");
  h = f + ":" + a[1] + ":" + a[2].split(" ")[0] + "" + e;
  return g + " by " + h;
}
function datetext(d) {
  if (!d) return "";
  var a = d.split("-"),
    b = parse(a[1]) - 1;
  return a[2] + " " + MMM[b] + " " + a[0];
}
function datesplit(tx) {
  if (!tx) return "";
  var a = tx.split("-");
  return a[0] + " / " + a[1] + " / " + a[2];
}
function namecode(n) {
  var a = cto(n.split("")),
    x = cto(bets, true),
    b = "",
    c = 0,
    d,
    f;
  for (var i in a) {
    if (parse(i)) {
      b += "" + i;
      c += parse(i);
    } else if (x[i.toLowerCase()]) {
      f = nia(bets, i.toLowerCase());
      b += "" + (f + 1);
      c += parse(f);
    }
  }
  f = c + "" + b;
  return f;
}
function nia(o, n) {
  var chk = 0;
  for (var i in o)
    if (o[i] == n) {
      chk = parse(i) + 1;
      break;
    }
  return chk;
}
function fio(a, b) {
  var c = {};
  for (var i in b) if (a[i]) c[i] = a[i];
  return c;
}
function caseall(a, c) {
  var b = [];
  for (var i in a) c ? b.push(a[i].toUpperCase()) : b.push(a[i].toLowerCase());
  return b;
}
function popaob(a, b, k, v) {
  var c = [];
  for (var i in a)
    if (a[i][k] && a[i][k] == v) {
      c.push(b);
    } else {
      c.push(a[i]);
    }
  return c;
}
function styleme(e, o) {
  for (var i in o) e.style[i] = o[i];
}
function rootstyle(e, o) {
  attme(e, { style: o });
}
function nopikin(o) {
  var a = false;
  for (var i in o)
    if (!o[i]) {
      a = i;
      break;
    }
  return a;
}
function sie(p, a, b) {
  var a1 = yaro(p),
    a2 = [];
  for (var i in a1) a2[i] = a1[i];
  for (var i in a2) X(a2[i]);
  for (var i = 0; i < ocn(a2); i++) {
    if (i == a) {
      APP(p, b);
    } else {
      APP(p, a2[i]);
    }
  }
}
function isarray(o) {
  var a = true;
  if (typeof o != "object") return false;
  if (!o.push) a = false;
  return a;
}
function ebt(n) {
  var a = n.toUpperCase();
  return document.getElementsByTagName(a);
}
function sortna(a) {
  var o = {},
    h = 0,
    c,
    ta = [];
  for (var i in a) {
    ta.push(a[i]);
  }
  for (var i in ta) {
    for (var j in ta) {
      if (ta[j] != "" && ta[j] > h) {
        h = ta[j];
        c = j;
      }
    }
    o[i] = h;
    ta[c] = "";
    h = 0;
  }
  return o;
}
function grade(c, t) {
  var sum = parse(t),
    grd = "",
    m = c.charAt(0);

  if (m == "J") {
    jcg();
  } else if (m == "S") {
    scg();
  }
  function scg() {
    if (sum >= 75 && sum <= 100) grd = "A1";
    if (sum >= 70 && sum <= 74) grd = "B2";
    if (sum >= 65 && sum <= 69) grd = "B3";
    if (sum >= 60 && sum <= 64) grd = "C4";
    if (sum >= 55 && sum <= 59) grd = "C5";
    if (sum >= 50 && sum <= 54) grd = "C6";
    if (sum >= 45 && sum <= 49) grd = "D7";
    if (sum >= 40 && sum <= 44) grd = "E8";
    if (sum < 40) grd = "F9";
  }
  function jcg() {
    if (sum >= 70 && sum <= 100) grd = "EXCELLENT";
    if (sum >= 60 && sum <= 69) grd = "V.GOOD";
    if (sum >= 50 && sum <= 59) grd = "GOOD";
    if (sum >= 40 && sum <= 49) grd = "PASS";
    if (sum < 40) grd = "FAIL";
  }
  return grd;
}
function ov2a(o) {
  var a = [];
  for (var i in o) a.push(o[i]);
  return a;
}
function ext(o, c) {
  var x = false;
  for (var i in o) {
    if (typeof o[i] == "object") {
      for (var v in o[i]) {
        if (o[i][v] == c) {
          x = true;
          break;
        }
      }
      if (x) break;
    } else {
      if (o[i] == c) {
        x = true;
        break;
      }
    }
  }
  return x;
}
function posob(sa, o, a) {
  var p = 1,
    w,
    po = {},
    q,
    tn,
    tb = {},
    t = [],
    np = 1;
  for (var i in a) {
    if (!sa[a.length - 1] || p > a.length) break;
    for (var k in sa) {
      for (var s in o) {
        sa[k] = parse(sa[k]);
        o[s] = parse(o[s]);
        if (o[s] == sa[k]) {
          w = s;
          o[s] = 0;
          q = sa[k];
          break;
        }
      }
      if (!po[p]) {
        for (s in o) {
          if (o[s] == q) {
            t.push(s);
            o[s] = 0;
          }
        }
        rfo(o, 0);
        if (t.length > 0) {
          t.push(w);
          po[p] = t;
        } else {
          if (!ext(po, w)) {
            po[p] = w;
          } else {
            p -= 1;
          }
        }

        p += t[1] ? t.length : 1;
      }

      delete sa[k];
      break;
    }
    if (t.length > 0) {
      for (var k in sa) {
        if (sa[k] == q) {
          delete sa[k];
          break;
        }
      }
    }
    t = [];
  }
  return po;
}
function rfo(o, r) {
  for (var i in o) {
    if (o[i] == r) delete o[i];
  }
}
function afromb(a, b, o) {
  var a1 = cto(a),
    b1 = cto(b),
    c = {};
  for (var i in b1) if (!a1[i]) c[i] = true;
  if (!o) c = cta(c);
  return c;
}
function Xus(a) {
  for (var i in a) {
    X(a[i]);
  }
}
function isgender(m) {
  m = m.toLowerCase();
  return m == "male" || m == "female";
}
function rfa(o, s) {
  var a = [],
    f = [];
  for (var i in o) {
    f.push(o[i]);
  }
  for (var i in s) {
    for (var v in f) {
      if (f[v] == s[i]) delete f[v];
    }
  }
  for (var i in f) {
    if (f[i]) a.push(f[i]);
  }
  return a;
}
function fpara() {
  Aw = screen.availWidth;
  Ah = screen.availHeight;
}
function popa(a, c) {
  var b = clonea(a);
  for (var i = 0; i < c; i++) b.pop();
  return b;
}
function fit2scrn(el, t) {
  if (!el) return;
  el.style.minWidth = "100%";
  el.style.minHeight = t ? "100%" : sor.h + "px";
}
function clrvalu(o) {
  for (var i in o) o[i].value = "";
}
function fetchvalu(o) {
  var r = {};
  for (var i in o)
    if (o[i].type == "phone" || o[i].name == "phone") {
      r[i] = "0" + parse(o[i].value);
    } else if (
      o[i].type == "password" ||
      o[i].type == "time" ||
      o[i].type == "date" ||
      o[i].type == "number"
    ) {
      r[i] = o[i].value;
    } else if (
      o[i].type == "username" ||
      o[i].name == "username" ||
      (o[i].placeholder && o[i].placeholder.toLowerCase() == "name") ||
      o[i].type == "gender" ||
      o[i].name == "gender" ||
      (o[i].placeholder && o[i].placeholder.toLowerCase() == "gender")
    ) {
      r[i] = spaceword(o[i].value)
        ? spaceword(o[i].value)
        : cleaname(o[i].value);
    } else if (o[i].type == "keyvalue") {
      r[i] = cleantxt(o[i].value);
    } else {
      r[i] = cleantxt(o[i].value);
    }
  return r;
}
function acronym(w) {
  var a = w.split("."),
    s = true;
  if (ocn(a) > 1) {
    for (var i in a)
      if (ocn(a[i]) > 1) {
        s = false;
        break;
      }
  } else {
    s = false;
  }
  return s;
}
function fileinfo(o) {
  var dt = datemap(),
    k = o.name.split("."),
    b = "file-" + dt.key + ("." + k[ocn(k) - 1]);
  clg({
    size: rnd(o.size / (1024 * 1024), 2) + "MB",
    name: b,
    type: o.type,
    date: dt,
    kname: o.name,
  });
  return {
    size: rnd(o.size / (1024 * 1024), 2) + "MB",
    name: b,
    type: o.type,
    date: dt,
    kname: o.name,
  };
}
function uploadfile(o) {
  var v5 = new FormData(),
    xr = new XMLHttpRequest();
  if (o.f) v5.append(o.f.i, o.f.f);
  if (o.o) v5.append(o.o.i, Js(o.o.o));
  xr.open("POST", o.call);
  addEvent(xr.upload, "progress", (e) => {
    uploadpercent({ p: parseInt((e.loaded / e.total) * 100) }, o.fnc);
  });
  xr.send(v5);
  //alert('There was an error uploading file, please try again.')
}
function uploadpercent(o, fnc) {
  if (!UB) uploadbox(o);
  UB.f1({ p: o.p });
  if (o.p == 100) {
    if (fnc) fnc();
    UB.fx();
  }
}
function spaceword(t) {
  var v = "",
    a = t.split(" ");
  if (ocn(a) == 1 || ocn(a[0]) > 1) return false;
  v = a[0] ? a[0] : "";
  for (var i = 1; i < ocn(a); i++)
    if (ocn(a[i]) > 1) {
      v = false;
      break;
    } else {
      if (!a[i]) continue;
      v = v ? v + (" " + a[i]) : v + a[i];
    }
  return v;
}
function chkvalues(o) {
  var kp = {};
  for (var i in o)
    if (!o[i].value) {
      kp.e = true;
      kp.f = i;
      break;
    }
  return kp;
}
function swdot(dt) {
  var r = "";
  if (dt == ".") r = "..";
  if (dt == "..") r = "...";
  if (dt == "...") r = "....";
  if (dt == "....") r = ".....";
  if (dt == ".....") r = ".";
  return r;
}
function validate(ul, at, fnc, sk) {
  var vali = true;
  for (var i in ul) {
    if (!ul[i].value && (!sk || !sk[i])) {
      i == "phone"
        ? flash.f1("please enter phone number", "", true)
        : redtxt(at[i], "Enter " + i);
      if (vali) vali = false;
    } else if (ul[i].type == "email") {
      if (!ebmail(ul[i].value)) {
        redtxt(at[i], "invalid email");
        if (vali) vali = false;
      }
    } else if (
      ul[i].placeholder &&
      ul[i].placeholder.toLowerCase() == "gender"
    ) {
      if (!isgender(ul[i].value)) {
        redtxt(at[i], 'gender must either be "male" or "female"');
        vali = false;
      }
    }
  }
  fnc(vali);
}
function resetkeys(r, a) {
  for (var i in r)
    if (r[i].textContent != a[i]) {
      r[i].textContent = a[i];
      r[i].style.color = "";
    }
}
function claz(c) {
  return c.className;
}
function addclass(e, c) {
  e.className = claz(e) ? claz(e) + " " + c : c;
}
function redtxt(el, tx) {
  if (!el) return;
  el.textContent = tx;
  //feedme(el,[icon('alerti','red'),span(tx,'red','',{color:'red'})]);
  el.style.color = "red";
}
function barme(t) {
  if (!t) return "0.00";
  var y = typeof t == "number" ? unbar(t.toString()) : unbar(t),
    j = y.split("."),
    k = j[0],
    mi = k.charAt(0) == "-" ? "-" : "",
    s = k,
    a = [],
    x,
    y,
    cx = s.length,
    st = "";
  if (s.length < 4) return s;
  for (var i = 0; i < cx; i++) {
    a.unshift(s.slice(s.length - 3, s.length));
    s = s.slice(0, s.length - 3);
    if (s.length < 4) {
      a.unshift(s);
      break;
    }
  }
  for (var i in a)
    if (!(ocn(a[i]) == 1 && a[i] == "-")) {
      st += (a[i].charAt(0) == "-" ? a[i].replace("-", "") : a[i]) + ",";
    }
  st = st.slice(0, st.length - 1);
  return mi + st + (j[1] ? "." + j[1] : ".00");
}
function unbar(t) {
  if (!t) return;
  var x = t,
    r = "";
  x = x.replace("N", "");
  x = x.split(",");
  for (var i in x) {
    r += x[i];
  }
  return r;
}
function isbar(v) {
  return parseInt(unbar(v));
}
function parseup(s) {
  if (!s) return 0;
  var t = s;
  if (isfra(t)) {
    var a = rnd(t, 1);
    a = a.toString().split(".");
    a = parse(a[1]) > 4 ? parse(a[0]) + 1 : a[0];
    parse(a);
    t = a;
  }
  return parseInt(t);
}
function parseup2(s) {
  if (!s) return 0;
  var t = s;
  if (isfra(t)) {
    var a = rnd(t, 1);
    a = a.toString().split(".");
    a = parse(a[0]) + 1;
    parse(a);
    t = a;
  }
  return parseInt(t);
}
function b2a(a, b) {
  for (var i in a) if (b[i]) a[i] = b[i];
}
function revar(v) {
  var a = typeof v == "number" ? v.toString() : v,
    b = a.split(""),
    c = [],
    r = "";
  for (var i = ocn(b) - 1; i > -1; i--) c.push(b[i]);
  for (var i in c) r = r.toString() + c[i];
  return r;
}
function revob(o) {
  if (!ocn(o)) return {};
  var a = rvar(cta(o)),
    b = {};
  for (var i = 0; i < ocn(a); i++) b[a[i]] = o[a[i]];
  return b;
}
function rvar(a) {
  var b = [];
  for (var i = 0; i < ocn(a); i++) b.push(a[ocn(a) - 1 - i]);
  return b;
}
function ebmail(e) {
  //if(!)return false;
  return e.indexOf("@") > -1 && e.split("@")[1].split(".")[1] ? true : false;
}
function isnum(d) {
  return parseInt(d);
}
function isfloat(n) {
  var a = n.toString();
  if (a.indexOf(".") > -1) return true;
  return false;
}
function splitxt(t, x) {
  var a = clonetxt(t),
    b = ocn(a),
    c = [],
    d,
    e;
  for (var i = 0; i < b; i++) {
    if (!ocn(a)) {
      break;
    } else {
      d = a.slice(0, x);
      a = a.slice(x, b);
      c.push(d);
    }
  }
  return c;
}
function breaktxt(t) {
  var b = ocn(t) / 2,
    a = isfloat(b),
    a = [],
    d;
  d = a ? parseInt(b) + 1 : parseInt(b);
  a.push(t.slice(0, d));
  a.push(t.slice(d, ocn(t)));
  return a;
}
function yaro(p, c) {
  var a = p.childNodes ? p.childNodes[c] : false;
  a = !c && typeof c != "number" ? p.childNodes : a;
  return a;
}
function obc(o, c) {
  var a = cta(o);
  if (!a[c]) return false;
  return o[a[c]];
}
//replace in object....
function rio(o, v, r) {
  var a = {},
    b;
  for (var i in o) {
    b = i == v ? r : i;
    a[b] = o[i];
  }
  return a;
}
function clrme(p) {
  var c = yaro(p),
    v = c.length;
  if (!c[0]) return;
  for (var i = 0; i < v; i++) {
    X(c[i]);
  }
}
function ino(a, b) {
  var d = false;
  for (var i in a)
    if (i == b) {
      d = i;
      break;
    }
  return d;
}
function hund(el) {
  el.style.width = "100%";
  el.style.height = "100%";
}
function unspace(a) {
  var b = a.split(" "),
    c = "";
  for (var i in b) c += b[i];
  return c;
}
function clonetxt(tx) {
  if (typeof tx != "string") return tx;
  var a = tx.split(""),
    b = "";
  for (var i in a) b += "" + a[i];

  return b;
}
function clonea(a) {
  var r = [];
  for (var i in a) r.push(a[i]);
  return r;
}
function cloneo(a) {
  var r = mrgar(Object.keys(a), Object.values(a));
  return r;
}
function sio(o, a, b) {
  var o1 = {};
  for (var i in o)
    if (i == a) {
      o1[b] = o[i];
    } else {
      o1[i] = o[i];
    }
  return o1;
}
function reload() {
  location.reload();
}
function a2o(o, a) {
  for (var i in a) o[i] = a[i];
}
//c=element; o={'id':'gold',style:'color:red'}
function attme(c, o) {
  if (!o) return;
  for (var i in o) c.setAttribute(i, o[i]);
}
function ocn(o) {
  var a = [];
  for (var i in o) a.push(i);
  return a.length;
}
function extract(o) {
  var a = {};
  for (var i in o) if (o[i].value) a[i] = o[i].value;
  return a;
}
function pikin(p, nc) {
  var cm = false;
  if (p.childNodes) {
    cm = p.childNodes;
    if (nc) {
      X(p.childNodes[0]);
      APP(p, nc);
    }
  }
  return cm;
}
function clrval(eo) {
  for (var i in eo) eo[i].value = "";
}
function capname(n) {
  if (n.length == 1) return n.toUpperCase();
  var a = n.charAt(0).toUpperCase(),
    b = n.slice(1, n.length).toLowerCase(),
    c = a + b;
  return c;
}
function cleaname(n) {
  if (!n) return "";
  if (parseInt(n) || typeof n == "number") return n;
  var a = n.split(" "),
    c = "",
    d = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      d.push(capname(a[i]));
    }
  }
  for (var i = 0; i < d.length; i++) {
    if (i == d.length - 1) {
      c += d[i];
    } else {
      c += d[i] + " ";
    }
  }
  if (acronym(c)) return c.toUpperCase();
  return c;
}
function cleantxt(n) {
  if (!n) return "";
  if (parseInt(n) || typeof n == "number") return n;
  var a = n.split(" "),
    c = "",
    d = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      d.push(a[i]);
    }
  }
  for (var i = 0; i < d.length; i++) {
    if (i == d.length - 1) {
      c += d[i];
    } else {
      c += d[i] + " ";
    }
  }
  return c;
}
function joinus(a) {
  var v = "";
  for (var i in a) {
    v = v + "" + a[i];
  }
  return v;
}
function string(a) {
  return a.toString();
}
function fada(c) {
  return c.parentNode;
}
function feedme(p, c) {
  if (!p || !c) return;
  if (typeof c == "string" || typeof c == "number") {
    p.innerHTML = c;
  } else {
    for (var i in c) if (c[i]) APP(p, c[i]);
  }
}
function ina(a, c) {
  var ck = false;
  for (var i in a)
    if (a[i] == c) {
      ck = true;
      break;
    }
  return ck;
}
function bringup(cl) {
  if (WV) {
    XC = VP.childNodes[0];
    X(WV);
  }
  APP(VP, cl);
  WV = cl;
}
function jp(s) {
  var o;
  try {
    o = JSON.parse(s);
    return o;
  } catch (err) {
    return false;
  }
}
function P(c) {
  if (c.parentNode) {
    return true;
  } else {
    return false;
  }
}
function callpsd(f) {
  if (!psd) {
    socket.emit("getpsd", skul);
    socket.on("rpsd", function (o) {
      psd = jp(o);
      if (f) f();
    });
  }
}
function callosd(f) {
  if (!osd) {
    socket.emit("getosd", skul);
    socket.on("rosd", function (o) {
      osd = jp(o);
      if (f) f();
    });
  }
}
function relo() {
  z = setTimeout(function () {
    location.reload(true);
    clearTimeout(z);
  }, 2000);
}
function parse(s) {
  if (!s) return "";
  var t = s.toString();
  if (isfra(t)) {
    return parseFloat(s);
  } else {
    return parseInt(s);
  }
}
function datetxt(t) {
  var a = t.split("-"),
    b = atme(a[0]) + " " + CC2[parse(a[1]) - 1] + " " + a[2];
  return b;
}
function datetxt2(t) {
  var a = t.split("-"),
    b = atme(a[0]) + " " + CC1[parse(a[1]) - 1] + " " + a[2];
  return b;
}
function atme(p) {
  if (!p) return;
  if (typeof p != "string") p = p.toString();
  var a = ["st", "nd", "rd", "th"],
    k = p.charAt(p.length - 1),
    c = "",
    w = p.toString();
  if (k == "1") {
    c = w == "11" ? a[3] : a[0];
  } else if (k == "2") {
    c = w == "12" ? a[3] : a[1];
  } else if (k == "3") {
    c = w == "13" ? a[3] : a[2];
  } else if (k == "0") {
    c = a[3];
  } else if (!p == "") {
    c = a[3];
  }
  c = p + c;
  return c;
}
function isfra(n) {
  var r = false;
  n = n.toString();
  if (n.indexOf(".") > 0) {
    r = true;
  }
  return r;
}
function Js(o) {
  return JSON.stringify(o);
}
function ocn(o) {
  var c = 0;
  for (var i in o) {
    c += 1;
  }
  return c;
}
function apx(n, c) {
  /*1.0*/
  if (n.length == c) return n;
  var a = n,
    b = n.length,
    w,
    x,
    y,
    z;
  for (var i = 0; i < b; i++) {
    w = parseInt(a.charAt(a.length - 1));
    a = a.slice(0, a.length - 1);
    if (w >= 5) {
      x = a.charAt(a.length - 1);
      a = a.slice(0, a.length - 1) + (parseInt(x) + 1);
    }
    if (a.length == c) break;
  }
  return a;
}
function rnd(f, r) {
  if (!f) return "";
  var s = f.toString(),
    w = isfra(f),
    x,
    y,
    z;
  if (!w) return f;
  s = s.split(".");
  x = apx(s[1], r);
  x = apx(x, r);
  return parseFloat(s[0] + "." + x);
}
function gid(nm, c) {
  if (!CL[c]) return;
  var x,
    g = CL[c].details,
    k = false;
  for (var i in g) {
    x = g[i].bd;
    x = x.Name;
    if (x == nm) {
      k = i;
      break;
    }
  }
  return k;
}
function fsnm(d, c) {
  if (!CL[c]) return;
  var a = CL[c].details,
    x,
    y,
    z;
  for (var i in a) {
    if (i == d) {
      x = a[i].bd;
      x = x.Name;
      break;
    }
  }
  return x;
}
function clg(t) {
  console.log(t);
}
function tmct() {
  var a;
  if (TD.t == TD.ts[0]) a = 1;
  if (TD.t == TD.ts[1]) a = 2;
  if (TD.t == TD.ts[2]) a = 3;
  return a;
}
function nxtcls(c) {
  if (c.charAt(3) == "3") return c;
  var v = parseInt(c.charAt(3)) + 1,
    m = c.split(c.charAt(3));
  v = m[1] ? m[0] + v + m[1] : m[0] + v;
  return v;
}
var scbox = function (n, o) {
  var rd = DIV(n, "sdvcbx"),
    d,
    x,
    y,
    z;
  d = DIV(n, "srd-brd");
  x = $$$("span", n);
  x.innerHTML = n;
  y = $$$("input", n, n);
  o[n] = y;
  y.type = "radio";
  y.value = n;
  APP(d, x);
  APP(d, y);
  d.style.display = "inline-block";
  d.style.marginLeft = ".6em";
  x.style.display = "inline-block";
  y.style.display = "inline-block";
  APP(rd, d);

  return rd;
};
function onsel(o) {
  chk = false;
  for (var i in o) {
    if (o[i].checked) {
      chk = true;
      break;
    }
  }
  return chk;
}
function swdte(d) {
  if (!d) return "";
  var s = d.split("/");
  s = s[1] + " / " + s[0] + " / " + s[2];
  return s;
}
function musel(o) {
  var c = false,
    x;
  for (var i in o)
    if (o[i].checked)
      if (!x) {
        x = i;
      } else {
        if (x != i) {
          c = true;
          break;
        }
      }
  return c;
}
function scom(c, s) {
  if (!SBz[c][s]) return "absent";
  var rs = SBz[c][s].complete ? "complete" : "incomplete";
  return rs;
}
function sortOb(o) {
  var a = [],
    no = {};
  for (var i in o) {
    a.push(i);
  }
  a = a.sort();
  for (var i in a) {
    no[a[i]] = o[a[i]];
  }
  return no;
}
function pta() {
  var a,
    t = TD.tt ? TD.tt : TD.t;
  if (t == "First") a = [];
  if (t == "Second") a = ["First"];
  if (t == "Third") a = ["First", "Second"];
  return a;
}
function helpemit(a, b, c, d) {
  socket.emit(a, b);
  socket.on(c, d);
}
function CN(p, c) {
  return p.childNodes[c];
}
function comment(a, k) {
  if (typeof a != "number") return "";
  var o = TD.ca[k],
    t = "";
  for (var i in o)
    if (wirange(i, a)) {
      t = o[i];
      break;
    }
  return t;
}
function wirange(v, a) {
  var o = v.split("-"),
    w = o[0],
    x = o[1],
    z = false;
  w = parseInt(w);
  x = parseInt(x);
  if (a == w || a == x || (a > w && a < x)) z = true;
  return z;
}
function cto(a, v) {
  var o = {};
  for (var i = 0; i < ocn(a); i++) {
    o[a[i]] = v ? v : "";
  }
  return o;
}
function j3(c) {
  var r = false;
  if (c.charAt(0) == "J" && c.charAt(3) == "3") r = true;
  return r;
}
function xac(c) {
  var cc = c.length == 5 ? c.slice(0, 4) : c,
    a = ["A", "B", "C"],
    re = {},
    x,
    ll = TD.sns;
  for (var i in a) {
    x = cc;
    x += a[i];
    for (var k in ll)
      if (k == x) {
        re[x] = true;
        break;
      }
  }
  if (ocn(re) == 0) re = false;
  return re;
}
function nxtclsa(c) {
  var a = nxtcls(c),
    b = xac(a);
  a = b ? b : cto([a]);
  return a;
}
function edob(o, c) {
  var d = false;
  for (var i in o)
    if (i == c) {
      d = true;
      break;
    }
  return d;
}
function cta(o) {
  /*1.0*/
  var a = [];
  for (var i in o) a.push(i);
  return a;
}
function isid(n, c) {
  if (!CL[c]) return;
  var a = false;
  if (CL[c].details[n]) a = true;
  return a;
}
function isinar(a, c) {
  var b = cto(a),
    f = false;
  for (var i in b)
    if (i == c) {
      f = true;
      break;
    }
  return f;
}
function img(s, id, cl) {
  var im = $$$("img", id, cl);
  im.src = s;
  return im;
}
function ee(e) {
  var r = e || window.event;
  r = e.target || e.srcElement;
  return r;
}
function he(h, t, id, c) {
  var a = $$$("h" + h, id, c);
  a.innerHTML = t;
  return a;
}
function pa(tx, id) {
  var rd = DIV(id, "paradiv"),
    p = $$$("p", "", "para-p");
  p.innerHTML = tx;
  APP(rd, p);
  return rd;
}
function Inp(id) {
  var rd = DIV(id, "EINP"),
    ip = $$$("input");
  APP(rd, ip);
  return rd;
}
function imd(s, id, c) {
  var rd = DIV(id, c),
    im = img(s, "imd-im");
  APP(rd, im);
  return rd;
}
function Pr(c) {
  return c.parentNode;
}
function nxil(a, c) {
  var d = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] == c) {
      if (a[i + 1]) d = a[i + 1];
      break;
    }
  }
  return d;
}
function pril(a, c) {
  var d = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] == c) {
      if (a[i - 1]) d = a[i - 1];
      break;
    }
  }
  return d;
}
function Cld(p, n) {
  return p.childNodes[n];
}
function percent(p, n) {
  var a = n / 100;
  return a * parse(p);
}
