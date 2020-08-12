import React from "react";
import "./Logout.css";

export interface LogoutProps {
  changeLogged: () => void;
  changeMessage: (message: any) => void;
  logName: string;
}

const Logout: React.SFC<LogoutProps> = props => {
  //destructuring props
  const { changeLogged, changeMessage, logName } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    changeLogged();
    changeMessage({ text: "Boli ste úspešne odhlásený.", error: false });
  };

  //template
  return (
    <div className="logout">
      <span className="logout-name">({logName})</span>{" "}
      <button className="logout-button" onClick={handleClick}>
        logout
      </button>
    </div>
  );
};

export default Logout;
