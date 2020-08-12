import React from "react";
import "./Header.css";
import PopupMenu from "./PopupMenu";
import Logout from "./Logout";

export interface HeaderProps {
  changeLogged: () => void;
  changeMessage: (message: any) => void;
  logName: string;
}

const Header: React.SFC<HeaderProps> = props => {
  const { changeLogged, changeMessage, logName } = props;
  return (
    <header>
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
