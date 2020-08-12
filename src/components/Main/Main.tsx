import React, { useState, useEffect } from "react";
import "./Main.css";
import Header from "./Header/Header";
import Article from "./Article/Article";
import simRest from "../../items.json";

export interface MainProps {
  changeLogged: () => void;
  changeMessage: (message: any) => void;
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
  const [actualItem, setActualItem] = useState<any>(null);

  //simulacia nacitania z REST
  useEffect(() => {
    setItems(simRest.items);
    setActualItem(simRest.items[0]);
  }, []);

  //changeActual (pre Table)
  const changeActual = (
    obj: any,
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    setActualItem(obj);
  };

  //addItem
  const addItem = (newItem: any) => {
    setItems((prev: any) => [...prev, newItem]);
  };

  //deleteItem
  const deleteItem = (
    obj: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (items !== null) {
      e.stopPropagation();
      const newItems: any = items.filter((item: any) => item !== obj);
      setItems(newItems);
      if (obj === actualItem) {
        setActualItem(null);
      }
    }
  };

  //handlePieces
  const handlePieces = (e: React.ChangeEvent<HTMLInputElement>, obj: any) => {
    if (items !== null) {
      const val = +e.target.value;

      if (val < 0) {
        return;
      }
      const newItems = items.map(item =>
        obj === item ? { ...obj, pieces: val } : item
      );
      setItems(newItems);
    }
  };

  //template
  return (
    <div className="main">
      <Header
        changeLogged={changeLogged}
        changeMessage={changeMessage}
        logName={logName}
      />

      {items ? (
        <Article
          items={items}
          actualItem={actualItem}
          changeActual={changeActual}
          addItem={addItem}
          deleteItem={deleteItem}
          handlePieces={handlePieces}
        />
      ) : (
        "<p>LOADING...</p>"
      )}
    </div>
  );
};

export default Main;
