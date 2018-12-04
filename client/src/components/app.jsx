import React from 'react';
import MaterialDesignSwitch from './mdswitch';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
    console.log('translate:',this.state.checked);
     $.get(getAddress, search, reviews => {
      this.setState({reviews: reviews});
      this.changePage();
      this.calcRatings();
    });
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
