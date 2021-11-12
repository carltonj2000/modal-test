import { useState } from "react";

import "./App.css";

import Modal from "./components/Modal";

function App() {
  const [show, showSet] = useState(false);
  const onButtonClick = () => showSet(!show);
  const onClose = () => showSet(false);

  return (
    <div className="App">
      <button onClick={onButtonClick}>Open Modal</button>
      <Modal {...{ show, onClose }} centered>
        <h1>Hello World</h1>
        <button onClick={onClose}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
