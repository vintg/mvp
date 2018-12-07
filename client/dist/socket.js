$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#msg').val());
    $('#msg').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg.translated));
    window.scrollTo(0, document.body.scrollHeight);
  });
});

