const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg)=>{
    console.log('message: ' + msg);
    if(msg.length>0) io.emit('chat message', msg);
  });
  socket.on('disconnect', ()=> {
    console.log('user disconnected');
  });
});

http.listen(port, ()=> {
  console.log(`listening on *:${port}`);
});

const {Translate} = require('@google-cloud/translate');
const projectId = 'hybrid-reactor-224304';
const translate = new Translate({
  projectId: projectId,
});

const text = 'Hello, world!';
const target = 'ru';

translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
