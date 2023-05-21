import React, { useLayoutEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../firebase/firebase";
import "./Register.scss";
import { FieldValues, useForm } from "react-hook-form";
function Register() {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm();
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
        <input
          type="email"
          className="register__textBox"
          placeholder="E-mail Address"
          {...register("email", { required: true, minLength: 8})}
        />
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
        <button className="register__btn" type='submit'>
          Register
        </button>
        <button
          className="register__btn register__google"
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
    </form>
  );
}
export default Register;