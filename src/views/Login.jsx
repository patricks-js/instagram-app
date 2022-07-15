import { Button } from "../components/button";
import { Input } from "../components/Input";

import iPhones from "../assets/iphones-login.png";
import logo from "../assets/ig-logo.svg";

const Login = () => {
  return (
    <section className="container h-screen">
      <div className="flex items-center h-full justify-center gap-10">
        <div className="hidden md:flex">
          <img src={iPhones} alt="" className="block mx-auto w-96" />
        </div>
        <div className="">
          <div className="px-8 flex-col mx-auto bg-white border border-gray-300 py-10">
            <img src={logo} alt="" className="mb-5 w-44 block mx-auto" />
            <form>
              <fieldset className="">
                <Input
                  identifier={"userLogin"}
                  type="text"
                  placeholder="Your email or username"
                  classLabel="block mb-2"
                  classInput="w-full rounded border bg-gray-100 border-gray-300 outline-none focus:border-gray-500 py-1 px-2 text-sm"
                />
                <Input
                  identifier={"password"}
                  type="password"
                  placeholder="Your password"
                  classLabel="block mb-2"
                  classInput="w-full rounded border bg-gray-100 border-gray-300 outline-none focus:border-gray-500 py-1 px-2 text-sm"
                />
              </fieldset>
              <Button className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full pt-1 pb-1 rounded">
                Login
              </Button>
            </form>
            <div className="w-full flex my-5 items-center gap-3">
              <div className="w-full h-px bg-gray-300"></div>
              <span className="block text-gray-400 ">OR</span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700 rounded py-1 text-white transition-colors">
              Google
            </Button>
            <Button className="w-full bg-blue-500 hover:bg-blue-600  text-white py-1 rounded mt-3 transition-colors">
              Facebook
            </Button>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-100">
        <div className="w-full"></div>
        <div className="w-full"></div>
      </footer>
    </section>
  );
};

export default Login;
