import React, { useLayoutEffect, useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./Login.scss";
import useLanguage from "hooks/useLanguage";

function Login() {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const locale = useLanguage("login");
  async function onSubmit(data: FieldValues) {
    try {
      await logInWithEmailAndPassword(data.email, data.password);
      navigate('/');
    } catch {
    }
  }
  useLayoutEffect(() => {
    if (!loading && user) {
      navigate('/')
      return;
    }
  }, [user, loading]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="login">
      <div className="login__container">
        <input
          {...register("email", { required: true, minLength: 8})}
          type="email"
          className="login__textBox"
          placeholder={locale.email}
        />
        {errors.email && <span>{locale.loginval}</span>}
        <input
          type="password"
          className="login__textBox"
          placeholder={locale.password}
          {...register("password", {
            required: true, 
            minLength: 8, 
            validate: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(value)
          })}
        />
        {errors.password && <span>{locale.passwordval}</span>}
        <Button 
          variant="contained"
          type="submit"
          className="login__btn"
        >
          {locale.login}
        </Button>
        <div>
        {locale.acc} <Link style={{color: "blue"}}to="/register">{locale.reg}</Link> {locale.now}.
        </div>
      </div>
    </div>
    </form>
  );
}
export default Login;