import React, { useState, useEffect } from "react";
import "./Main.css";
import Logout from "./Logout";
import ListItems from "./ListItems";
import Header from "./Header";
import simRest from "../../items.json";

export interface MainProps {
  changeLogged: () => void;
  changeMessage: (message: string) => void;
  logName: string;
}

const Main: React.SFC<MainProps> = props => {
  //destructuring props
  const { changeLogged, changeMessage, logName } = props;

  //state
  const [items, setItems] = useState<
    | {
        id: number;
        title: string;
        code: string;
        label: string;
        pieces: number;
        url: string;
      }[]
    | null
  >(null);

  //simulacia REST
  useEffect(() => {
    setItems(simRest.items);
  }, []);

  //template
  return (
    <div>
      <Header />
      <Logout
        changeLogged={changeLogged}
        changeMessage={changeMessage}
        logName={logName}
      />
      {items ? <ListItems list={items} /> : "<p>LOADING...</p>"}
    </div>
  );
};

export default Main;
