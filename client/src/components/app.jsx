import React from 'react';
import MaterialDesignSwitch from './mdswitch';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    //restore from db
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
  saveChat(){
    let data = { /* TO-DO */ };
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

      <ul id = "messages"></ul>
      <form action="">
        <input id="m" autoComplete="off" />
        <button>Send</button>
      </form>
    </div>
    );
  }
}

export default App;
