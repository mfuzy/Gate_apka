import React from "react";
import Logout from "./Logout";

export interface MainProps {
  changeLogged: () => void;
  changeMessage: (message: string) => void;
}

const Main: React.SFC<MainProps> = props => {
  //destructuring props
  const { changeLogged, changeMessage } = props;

  //template
  return (
    <div>
      <h2>ja som Main</h2>
      <Logout changeLogged={changeLogged} changeMessage={changeMessage} />
    </div>
  );
};

export default Main;
