import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';
//const socket = io('http://localhost:3000');

import MaterialDesignSwitch from './mdswitch';
import Messenger from './messenger';

  // $('form').submit(function(){
  //   socket.emit('chat message', $('#msg').val());
  //   $('#msg').val('');
  //   return false;
  // });
  // socket.on('chat message', function(msg){
  //   $('#messages').append($('<li>').text(msg.translated));
  //   window.scrollTo(0, document.body.scrollHeight);
  // });


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked: true,
      chatHistory: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    //restore from db
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
  handleSend(){

  }
  saveChat(){
    const data = this.state.chatHistory;
    axios.post('/save', { data })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  render() {
    return (
    <div id = "wrapper">
      <div id = "switch-toggle">
        <MaterialDesignSwitch
          checked={this.state.checked}
          handleChange={this.handleChange}
        />
      </div>

      <Messenger />
    </div>
    );
  }
}

export default App;
