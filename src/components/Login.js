import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
  };
  return (
    <div className="w-full bg-gray-800">
      <Header />

      <div className="absolute w-full">
        <img
          className="w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      {/* login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 px-8 py-6 absolute bg-black text-white  mt-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold  text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="E-Mail Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />

        {/* error messsage */}
        {errorMessage && (
          <p className="text-red-500 text-center p-4 font-semibold text-lg">
            {errorMessage}
          </p>
        )}
        <button
          className="w-full p-4 my-6 bg-red-700 rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix ? " : "Already a user ?"}
          <span
            onClick={toggleSignInForm}
            className="cursor-pointer hover:text-blue-600"
          >
            {" "}
            {isSignInForm ? "Sign up Now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
