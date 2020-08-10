import React, { useState } from "react";
import Table from "./Table";
import Photo from "./Photo";
import "./Article.css";

//interface ArticleProps
export interface ArticleProps {
  items: {
    id: number;
    title: string;
    code: string;
    label: string;
    pieces: number;
    url: string;
  }[];
  addItem: (newItem: any) => void;
  deleteItem: (
    obj: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlePieces: (e: React.ChangeEvent<HTMLInputElement>, obj: any) => void;
}

//component
const Article: React.SFC<ArticleProps> = props => {
  //destructuring props
  const { items, addItem, deleteItem, handlePieces } = props;

  //state
  const [actualItem, setActualItem] = useState<any>(items[0]);

  //changeActual (pre Table)
  const changeActual = (
    obj: any,
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    setActualItem(obj);
  };

  //getActualItem (pre Photo)
  const getActualItem = () => ({
    title: actualItem.title,
    url: actualItem.url,
    code: actualItem.code
  });

  //template
  return (
    <article>
      <Table
        items={items}
        actualItem={actualItem}
        addItem={addItem}
        deleteItem={deleteItem}
        handlePieces={handlePieces}
        changeActual={changeActual}
      />
      <Photo actualItem={getActualItem()} />
    </article>
  );
};

export default Article;
