import * as React from "react";
import AuthForm from "components/AuthForm/AuthForm";
import useLanguage from "hooks/useLanguage";

const Auth = () => {
  const locale = useLanguage("Auth/auth");
  
  return (
    <>
      <div>{locale['page-title']}</div>
      <AuthForm locale = {locale}/>
    </>
  );
};

export default Auth;
