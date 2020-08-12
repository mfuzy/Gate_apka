import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

const App: React.SFC = () => {
  //state
  const [logged, setLogged] = useState<boolean>(false);
  const [logName, setLogName] = useState<string>("");
  const [message, setMessage] = useState<any>(null);

  //changeLogged
  const changeLogged = () => {
    setLogged(prev => !prev);
  };

  //changeLogName
  const changeLogname = (name: string) => {
    setLogName(name);
  };

  //changeMessage
  const changeMessage = (message: any) => {
    setMessage(message);
  };

  //template
  return (
    <div className="app">
      {message && (
        <div className={"message " + (message.error ? "error" : "")}>
          {message.text}
        </div>
      )}
      {logged ? (
        <Main
          changeLogged={changeLogged}
          changeMessage={changeMessage}
          logName={logName}
        />
      ) : (
        <Login
          changeLogged={changeLogged}
          changeMessage={changeMessage}
          changeLogname={changeLogname}
        />
      )}
    </div>
  );
};

export default App;
