import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./Login.scss";

function Login() {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  async function onSubmit(data: FieldValues) {
    try {
      console.log(data)
      await logInWithEmailAndPassword(data.email, data.password);
      navigate('/');
    } catch {
    }
  }
  useLayoutEffect(() => {
    console.log(loading, user)
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
          placeholder="E-mail Address"
        />
        {errors.email && <span>minimum 8 symbols</span>}
        <input
          type="password"
          className="login__textBox"
          placeholder="Password"
          {...register("password", {
            required: true, 
            minLength: 8, 
            validate: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(value)
          })}
        />
        {errors.password && <span>minimum 8 symbols, at least one letter, one digit, one special character</span>}
        <button type="submit"
          className="login__btn"
        >
          Login
        </button>
        <button className="login__btn login__google">
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
    </form>
  );
}
export default Login;