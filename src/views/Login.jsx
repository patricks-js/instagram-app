import { Button } from "../components/button";
import { Input } from "../components/Input";

import iphones from "../assets/iphones-login.png";
import logo from "../assets/ig-logo.svg";

const Login = () => {
  return (
    <section className="container px-16">
      <div className="columns-2">
        <div>
          <img src={iphones} alt="" className="block" />
        </div>
        <div className="px-8 flex-col bg-white border border-gray-300 px-14">
          <img src={logo} alt="" />
          <form>
            <fieldset className="flex-col">
              <Input identifier={"userLogin"} type="text" />
              <Input identifier={"password"} type="password" />
            </fieldset>
            <Button>Login</Button>
          </form>
        </div>
      </div>
      <footer className="w-full">
        <div className="w-full"></div>
        <div className="w-full"></div>
      </footer>
    </section>
  );
};

export default Login;
