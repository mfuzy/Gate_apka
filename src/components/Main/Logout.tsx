import React from "react";

export interface LogoutProps {
  changeLogged: () => void;
  changeMessage: (message: string) => void;
  logName: string;
}

const Logout: React.SFC<LogoutProps> = props => {
  //destructuring props
  const { changeLogged, changeMessage, logName } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    changeLogged();
    changeMessage("Boli ste úspešne odhlásený");
  };

  //template
  return (
    <div>
      <h2>Logout ({logName})</h2>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Logout;
