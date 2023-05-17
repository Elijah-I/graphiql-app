import * as React from "react";
import { Locale } from "hooks/useLanguage";
import { Button } from "@mui/material";
import { Input } from "components/AuthForm/Input";
import { checkIsEmailValid } from "./validation";
import { User } from "UserServices/UserService";
import UserContext from "context/user";

interface AuthFormProps {
  locale: Locale
}

const AuthForm = ({ locale }: AuthFormProps) => {
  const { changeUser } = React.useContext(UserContext);
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const [errorKey, setErrorKey] = React.useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  }

  const login = () => {
    if (localStorage.getItem(values.email) !== values.password) {
      setErrorKey("invalid-value");
    } else {
      User.login(values.email);
      changeUser();
      setErrorKey('');
    }
  }


  const register = () => {

    if (!checkIsEmailValid(values.email) || !values.password) {
      setErrorKey("invalid-value");
    }
    else if (localStorage.getItem(values.email)) {
      setErrorKey("user-registred")
    }
    else {
      User.register(values.email, values.password);
      console.log('register')
      changeUser();
      setErrorKey('');
    }
  }

  return (
    <form className='auth__form' onSubmit={(e) => e.preventDefault()}>
      <Input type='email' name='email' placeholder={locale["email-placeholder"]} value={values.email} onChange={handleChange} />
      <Input type='password' name='password' placeholder={locale["password-placeholder"]} value={values.password} onChange={handleChange} />
      {errorKey && <p style={{ 'color': 'red' }}>{locale[errorKey]}</p>}

      <div className='auth__btn-container'>
        <Button
          sx={{ ml: 3 }}
          variant="contained"
          onClick={login}
        >
          {locale.login}
        </Button>
        <Button
          sx={{ ml: 3 }}
          variant="contained"
          onClick={register}
        >
          {locale.register}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;