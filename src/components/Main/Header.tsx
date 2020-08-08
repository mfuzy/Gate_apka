import React from "react";
import "./Header.css";
import PopupMenu from "./PopupMenu";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = props => {
  return (
    <header>
      <h2>header</h2>
      <PopupMenu />
    </header>
  );
};

export default Header;
