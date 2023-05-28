import React, { useLayoutEffect, useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../firebase/firebase";
import "./Register.scss";
import { FieldValues, useForm } from "react-hook-form";
import useLanguage from "hooks/useLanguage";
function Register() {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [user, loading, error] = useAuthState(auth);
  const locale = useLanguage("reg");
  async function onSubmit(data: FieldValues) {
    try {
      if(isValid) {
        console.log("valid")
      }
      await registerWithEmailAndPassword(data.name, data.email, data.password);
      navigate('/');
    } catch {
    }
  }
  const navigate = useNavigate();
  useLayoutEffect(() => {
    console.log(loading, user)
    if (!loading && user) {
      navigate('/')
      return;
    }
  }, [user, loading]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          placeholder={locale.name}
          {...register("name", { required: true, minLength: 8})}
        />
        {errors.name && <span>{locale.nameval}</span>}
        <input
          type="email"
          className="register__textBox"
          placeholder={locale.email}
          {...register("email", { required: true, minLength: 8})}
        />
        {errors.email && <span>{locale.loginval}</span>}
        <input
          type="password"
          className="register__textBox"
          placeholder={locale.password}
          {...register("password", {
            required: true, 
            minLength: 8, 
            validate: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(value)
          })}
        />
        {errors.password && <span>{locale.passwordval}</span>}
        <Button variant="contained" className="register__btn" type='submit'>
          {locale.reg}
        </Button>
        <div>
          {locale.acc} <Link style={{color: "blue"}} to="/login">{locale.login}</Link> {locale.now}.
        </div>
      </div>
    </div>
    </form>
  );
}
export default Register;