import React, { useState } from "react";
import curve from "../assets/images/curve.png";
import brush from "../assets/images/brush.png";
import logo from "../assets/images/logo.png";
import lock from "../assets/icons/lock.svg";
import eye from "../assets/icons/eye.svg";
import user from "../assets/icons/user.svg";
import text from "../assets/images//text.png";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase-config";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setCurrentUser } = useStateContext();
  const { login } = useAuth();

  const signIn = async (email, password) => {
    try {
      setErrorMessage("");
      if (email === "admin@gmail.com" || email === "admin2@gmail.com") {
        await login(email, password);
        console.log(user);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  /* const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setCurrentUser(user);
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      // alert("invalid");
    }
  }; */

  return (
    <div className="">
      <div className="-z-40 bg-dark relative">
        <img
          src={curve}
          className="bg-dark absolute left-0 w-[80%] md:w-[85%] xl:w-[90%]"
          alt=""
        />
        <img
          src={brush}
          className="bg-dark absolute right-0 w-[45%] bottom-[calc(100%-100vh)]"
          alt=""
        />
      </div>
      <div className="-z-50 absolute bg-dark h-screen w-screen" />

      <div className="max-w-sm lg:max-w-[440px] mx-auto p-6 lg:p-0">
        <div className="pt-[3vh] grid place-content-center place-items-center">
          <img className="object-contain" src={logo} alt="" />
          <img className="object-contain" src={text} alt="" />
        </div>
        <div className="mt-4 -mb-4 text-lg text-center text-red-500 transition-all duration-500 scale-100">
          {errorMessage.length > 0 && <p>{"Invalid Credentials"}</p>}
        </div>
        <div className="mt-14 space-y-7 lg:mt-20 lg:space-y-10 ">
          <div className="relative flex flex-col gap-1 items">
            <img
              className="absolute top-6 left-5 object-contain w-5"
              src={user}
              alt=""
            />
            <input
              autocomplete="off"
              className={`text-white bg-dark border-2 border-tertitary rounded outline-none ring-0 placeholder-white placeholder:font-medium placeholder:text-lg
                            focus:border-2 focus:border-primary-dark caret-white
                            py-5 px-14 transition-all duration-200`}
              placeholder="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>
          <div className="relative flex flex-col gap-1 items">
            <img
              className="absolute top-6 left-5 object-contain w-4"
              src={lock}
              alt=""
            />
            <img
              className="absolute top-7 right-5 object-contain w-6"
              src={eye}
              alt=""
              onClick={() => setShowPassword(!showPassword)}
            />
            <input
              autocomplete="off"
              className={`text-white border-2 border-primary-dark bg-dark rounded outline-none ring-0 placeholder-primary-dark placeholder:font-medium placeholder:text-lg
                        focus:border-2 focus:border-primary-dark focus:placeholder-primary-dark focus:ring-0 caret-white
                         py-5 px-14 transition-all duration-200`}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
            />
          </div>

          <Button
            onClick={() => {
              signIn(email, password);
            }}
            fullWidth
            type={"button"}
          >
            <p className="text-black text-lg font-semibold">Login</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
