import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      <div>
        <img
          className="bg-no-repeat brightness-50 w-full h-screen scale-125"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
