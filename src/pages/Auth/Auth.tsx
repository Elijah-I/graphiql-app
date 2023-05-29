import React from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const Auth = ({ type }: { type: string }) => {
  const elem = type === 'login' ? <Login /> : <Register />
  return elem;
};

export default Auth;
