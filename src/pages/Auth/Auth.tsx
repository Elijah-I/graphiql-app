import * as React from "react";
import AuthForm from "components/AuthForm/AuthForm";
import useLanguage from "hooks/useLanguage";
import './style.scss';

const Auth = () => {
  const locale = useLanguage("Auth/auth");

  return (
    <div className='auth'>
      <div className='auth__title'>{locale['page-title']}</div>
      <AuthForm locale={locale} />
    </div>
  );
}; 

export default Auth;
