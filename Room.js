const RoomMax = 999,
  roomCount = 33;

var date = function (r, dm) {
  var o = dm ? dm : new Date(),
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
    o.mn + "" + o.d + "" + o.dy + "" + o.ms + "" + o.h + "" + o.m + "" + o.s;
  return o;
};

class Room {
  constructor() {
    this.roomsState = [{ roomID: "room_33" + datemap().key, users: 0 }];
  }

  joinRoom() {
    return new Promise((resolve) => {
      for (let i = 0; i < this.roomsState.length; i++) {
        if (this.roomsState[i].users < RoomMax) {
          this.roomsState[i].users++;
          return resolve(this.roomsState[i].id);
        }
      }

      // else generate a new room id
      roomCount += 1;
      const newID = `room_${roomCount}${datemap().key}`;
      this.roomsState.push({
        id: newID,
        users: 1,
      });
      return resolve(newID);
    });
  }

  leaveRoom(id) {
    this.roomsState = this.roomsState.filter((room) => {
      if (room.id === id) {
        if (room.users === 1) {
          return false;
        } else {
          room.users--;
        }
      }
      return true;
    });
  }
}

module.exports = Room;
