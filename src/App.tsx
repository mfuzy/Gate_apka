import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";

const App: React.SFC = () => {
  //state
  const [logged, setLogged] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  //changeLogged
  const changeLogged = () => {
    setLogged(prev => !prev);
  };

  //changeMessage
  const changeMessage = (message: string) => {
    setMessage(message);
  };

  //template
  return (
    <div>
      <p>message: {message}</p>
      {logged ? (
        <Main changeLogged={changeLogged} changeMessage={changeMessage} />
      ) : (
        <Login changeLogged={changeLogged} changeMessage={changeMessage} />
      )}
    </div>
  );
};

export default App;
