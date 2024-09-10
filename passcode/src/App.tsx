import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const PASSWORD = "9957";
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");

  const checkPasscode = (buttonValue: number) => {
    setMessage("");
    setPasscode(prev => prev + buttonValue);
  };

  useEffect(() => {
    if (passcode.length === PASSWORD.length && passcode === PASSWORD) {
      setMessage("Correct Password");
      setPasscode("");
    }
    if (passcode.length === PASSWORD.length && passcode !== PASSWORD) {
      setMessage("Password is not correct");
      setPasscode("");
    }
  }, [passcode]);

  return (
    <>
      <h1 className="title">PASSCODE APP</h1>
      <input
        className="code-display"
        type="password"
        disabled
        value={passcode}
        style={{ textAlign: "center" }}
      />
      <div className="keyboard">
        {keys.map(element => (
          <button key={element} onClick={() => checkPasscode(element)}>
            {element}
          </button>
        ))}
      </div>
      <div className="info">{message}</div>
    </>
  );
}

export default App;
