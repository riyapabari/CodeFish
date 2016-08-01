var socketio = require('socket.io');

exports.socketServer = function (app, server) {
io.on('connection', function(socket){


  socket.emit('current user', {user: currentUser});
  socket.emit('update available rooms', {rooms: filteredRooms(socket)});


  socket.on('host room', function(data) {
    var roomID = 'Topic: ' + data.requestDescription;

    socket.join(roomID, function() {
      socket.emit('new room');
      socket.broadcast.emit('update available rooms', {rooms: filteredRooms(socket)});
    });

  });

  socket.on('join room', function(data){
    socket.join(data.roomID);
    io.to(data.roomID).emit('person joined', {roomID: data.roomID});
    socket.broadcast.emit('update available rooms', {rooms: filteredRooms(socket)});
  });

  socket.on('chat message', function(data) {
    io.to(data.roomID).emit('chat message', data);

  });

});

//helper methods

function findRoom(socket, roomID){
  return socket.adapter.rooms[roomID];
}

function filteredRooms(socket){
  var rooms = [];
  for (var room in socket.adapter.rooms){
    if (room.match(/^Topic/) && findRoom(socket, room).length < 2){
      rooms.push(room);
    }
  }
  return rooms;
}
};
