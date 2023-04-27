import React from 'react';
import Logo from '../../assets/images/Logo-hodu.png';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = () => {
  return (
    <>
      <h1>
        <img src={Logo} alt="호두마켓" />
      </h1>
      <AuthForm type="login" />
    </>
  );
};

export default Login;
