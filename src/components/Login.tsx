import React, { useRef } from "react";

export interface LoginProps {
  changeLogged: () => void;
  changeMessage: (message: string) => void;
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

      if (meno === "1" && heslo === "1") {
        changeLogged();
        changeLogname(meno);
        changeMessage("");
      } else {
        changeMessage("nesprávne meno, alebo heslo");
      }
    }
  };

  //template
  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="meno">Meno: </label>
        <input type="text" id="meno" ref={inpMeno} autoFocus />
        <br />
        <label htmlFor="heslo">Heslo: </label>
        <input type="text" id="heslo" ref={inpHeslo} />
        <br />
        <button type="submit">odošli</button>
      </form>
    </div>
  );
};

export default Login;
