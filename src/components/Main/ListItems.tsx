import React from "react";
import "./ListItems.css";

export interface ListItemsProps {
  list: {
    id: number;
    title: string;
    code: string;
    label: string;
    pieces: number;
    url: string;
  }[];
}

const ListItems: React.SFC<ListItemsProps> = props => {
  const { list } = props;
  return (
    <div>
      {list.map(item => {
        return (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ListItems;
