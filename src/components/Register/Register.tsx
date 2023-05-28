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
function Register() {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [user, loading, error] = useAuthState(auth);
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
          placeholder="Full Name"
          {...register("name", { required: true, minLength: 8})}
        />
        {errors.name && <span>minimum 8 symbols</span>}
        <input
          type="email"
          className="register__textBox"
          placeholder="E-mail Address"
          {...register("email", { required: true, minLength: 8})}
        />
        {errors.email && <span>minimum 8 symbols</span>}
        <input
          type="password"
          className="register__textBox"
          placeholder="Password"
          {...register("password", {
            required: true, 
            minLength: 8, 
            validate: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(value)
          })}
        />
        {errors.password && <span>minimum 8 symbols, at least one letter, one digit, one special character</span>}
        <Button variant="contained" className="register__btn" type='submit'>
          Register
        </Button>
        <div>
          Already have an account? <Link style={{color: "blue"}} to="/login">Login</Link> now.
        </div>
      </div>
    </div>
    </form>
  );
}
export default Register;