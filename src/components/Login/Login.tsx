import React, { useRef } from "react";
import "./Login.css";

export interface LoginProps {
  changeLogged: () => void;
  changeMessage: (message: any) => void;
  changeLogname: (name: string) => void;
}

const Login: React.SFC<LoginProps> = props => {
  //destructuring props
  const { changeLogged, changeMessage, changeLogname } = props;

  //refs
  const inpMeno = useRef<HTMLInputElement>(null);
  const inpHeslo = useRef<HTMLInputElement>(null);

  //handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inpMeno.current !== null && inpHeslo.current !== null) {
      const meno = inpMeno.current.value;
      const heslo = inpHeslo.current.value;

      if (meno === "demo.user" && heslo === "secret") {
        changeLogged();
        changeLogname(meno);
        changeMessage(null);
      } else if (!meno || !heslo) {
        changeMessage({ text: "Vyplň meno aj heslo.", error: true });
      } else {
        changeMessage({ text: "Nesprávne meno, alebo heslo.", error: true });
      }
    }
  };

  //template
  return (
    <div className="login-container">
      <div className="login">
        <h1>Prihlásenie</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="meno">Meno</label>
          <br />
          <input
            type="text"
            id="meno"
            ref={inpMeno}
            autoFocus
            placeholder="zadaj meno"
          />
          <br />
          <label htmlFor="heslo">Heslo</label>
          <br />
          <input
            type="text"
            id="heslo"
            ref={inpHeslo}
            placeholder="zadaj heslo"
          />
          <br />
          <button type="submit">Prihlásiť sa</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
