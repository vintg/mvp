const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const translate = require('@k3rn31p4nic/google-translate-api');
const Chats = require('../db/Chats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

app.post('/save', function (req, res) {
  const chatLog = req.body.data;
  var saveChat = new Chats(chatLog);
  saveChat.save()
  .then(data => res.status(201).send('chat saved'))
  .catch(err => console.error(err));
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', msg => {
    console.log('message: ' + msg);

    translate(msg, { to: 'en' })
    .then(res => {
      let tm = res.text;
      console.log('\ttranslation: ', res.text);
      if(msg.length>0) {
        //io.emit(`chat message: ${msg} (${tm})`);
        // planning on splitting view and toggle hidden into display
        io.emit('chat message', {'original': msg, 'translated': tm});
      }
    }).catch(err => {
     console.error('err during translate',err);
    });

  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

http.listen(port, () => console.log(`server listening @${JSON.stringify(http.address())}`));