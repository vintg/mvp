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

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('chat message', msg => {
    console.log('message: ' + msg);
    translate(msg, { to: 'en' }).then(res => {
      let tm = res.text;
      console.log('\ttranslation: ', res.text);
      if(msg.length>0) {
        io.emit('chat message', msg +' ('+ tm + ')');
      }
    }).catch(err => {
     console.error('err during translate',err);
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

http.listen(port, () => {
  console.log(`server listening on ${JSON.stringify(http.address())}`);
});

//CLOUD TRANSLATE - REQ BILLING?!
// const {Translate} = require('@google-cloud/translate');
// const projectId = 'hybrid-reactor-224304';
// const translate = new Translate({
//   projectId: projectId,
// });

// const text = 'Hello, world!';
// const target = 'zh-CN';

// translate
//   .translate(text, target)
//   .then(results => {
//     const translation = results[0];

//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
