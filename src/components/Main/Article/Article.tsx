import React from "react";
import Table from "./Table";
import "./Article.css";

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
  deleteItem: (obj: any) => void;
  handlePieces: (obj: any) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Article: React.SFC<ArticleProps> = props => {
  const { items, addItem, deleteItem, handlePieces } = props;
  return (
    <article>
      <Table
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        handlePieces={handlePieces}
      />
    </article>
  );
};

export default Article;
