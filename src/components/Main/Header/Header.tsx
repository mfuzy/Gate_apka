import React from "react";
import "./Header.css";
import PopupMenu from "./PopupMenu";
import Logout from "./Logout";

export interface HeaderProps {
  changeLogged: () => void;
  changeMessage: (message: string) => void;
  logName: string;
}

const Header: React.SFC<HeaderProps> = props => {
  const { changeLogged, changeMessage, logName } = props;
  return (
    <header>
      <h2>header</h2>
      <PopupMenu />
      <Logout
        changeLogged={changeLogged}
        changeMessage={changeMessage}
        logName={logName}
      />
    </header>
  );
};

export default Header;
