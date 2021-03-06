import React, { useState } from 'react';
import { getGlobalState } from '../Context';

import InputComponent from '../components/elements/InputComponent';
import Button from '../components/elements/Button';
import Logo from '../components/elements/Logo';
import SEO from '../components/elements/SEO';

import '../assets/styles/pages/login.scss';

const Login = (props) => {
  const [{ isAuth, settings: { theme } }, dispatch] = getGlobalState();
  const [form, setForm] = useState({});

  const goTo = (url) => {
    props.history.push(url);
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_AUTHORIZATION',
      payload: {
        token: 'token',
        user: form,
      },
    });
    props.history.push('/');
  };

  if (isAuth) {
    return (
      <>
        <SEO
          title="Login | Louis Monstruon"
          description="Description Login"
          kw="Stripe, Clothes, Store"
        />
        <main className={`modalView_content ${theme} login__modal`}>
          <section className="login login_auth">
            <Logo />
            <h1>Ya has iniciado sesión no es necesarion que lo hagas de nuevo</h1>
            <Button name="base-blue" buttonType="button" action={() => { goTo('/'); }}>Ver productos</Button>
            <Button name="base-purple" buttonType="button" action={() => { goTo('/profile/tuentyfaiv'); }}>Ir a mi perfil</Button>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Login | Louis Monstruon"
        description="Description Login"
        kw="Stripe, Clothes, Store"
      />
      <main className={`modalView_content ${theme} login__modal`}>
        <section className="login">
          <Logo />
          <form className="login__form" onSubmit={handleSubmit} id="loginForm">
            <div className="login__form-inputs">
              <InputComponent type="email" title="Email" name="email" action={handleInput} required={true} />
              <InputComponent type="password" title="Password" name="password" action={handleInput} required={true} />
            </div>
            <Button name="base-blue" buttonType="submit" form="loginForm">Login</Button>
          </form>
        </section>
        <section className="goToRegister">
          <div className="login__separator" />
          <Button name="base-purple" buttonType="button" action={() => { goTo('/register?step=1'); }}>Sign up</Button>
          <Button name="image" buttonType="button">Sign up with </Button>
        </section>
      </main>
    </>
  );
};

export default Login;
