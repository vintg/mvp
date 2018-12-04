import React from 'react';
import MaterialDesignSwitch from 'switch';

const App = () => (
  <>
    <div id="what"><MaterialDesignSwitch /></div>
    <div id="google_translate_element"></div>
    <ul id="messages"></ul>
      <form action="">
        <input id="m" autoComplete="off" />
        <button>Send</button>
      </form>
  </>
);

export default App;
