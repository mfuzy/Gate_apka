import React from "react";
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
  actualItem: any;
  changeActual: (
    obj: any,
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => void;
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
  const {
    items,
    actualItem,
    changeActual,
    addItem,
    deleteItem,
    handlePieces
  } = props;

  //state

  //getActualItem (pre Photo)
  const getActualItem = () => {
    if (actualItem) {
      return {
        title: actualItem.title,
        url: actualItem.url,
        code: actualItem.code
      };
    } else {
      return null;
    }
  };

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
