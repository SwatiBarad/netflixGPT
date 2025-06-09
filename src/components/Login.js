import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [validMsg, setValidMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // check valid data of email and password

    const message = checkValidData(email.current.value, password.current.value);

    setValidMsg(message);
  };

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="absolute h-screen w-full overflow-x-hidden">
      <Header />
      <div className="">
        <img
          className=" brightness-50 w-full h-auto scale-125 relative "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[32%] rounded-lg p-10 bg-black bg-opacity-60  absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto "
      >
        <h1 className="text-white font-bold text-3xl my-5">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="User name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <p className="font-bold text-lg text-red-600">{validMsg}</p>
        <button
          onClick={handleButtonClick}
          className="w-full text-white bg-red-800 filter contrast-[150%] brightness-[130%] rounded-md h-10 hover:bg-red-900 transition-colors my-6"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white text-center ">OR</p>
        <button className="w-full text-white my-6 bg-gray-900  rounded-md h-10 hover:bg-gray-800 transition-colors">
          Use a sign-in code
        </button>
        <p className="text-white my-6">
          {signIn ? "New to Netflix?" : "Already registered?"}

          <span
            className="cursor-pointer font-extrabold"
            onClick={() => {
              toggleSignIn();
            }}
          >
            {signIn ? " Sign up now." : "Let's sign in"}
          </span>
        </p>
        <p className="text-gray-400 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
