import React from 'react';

const Messenger =({handleSend})=> (
  <>
  <ul id = "messages"></ul>
  <form action="">
    <input id="msg" autoComplete="off" />
    <button
      onClick={handleSend}>Send
    </button>
  </form>
  </>
);

export default Messenger;
