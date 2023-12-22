import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';

import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const switchVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="container">
      <LogoBlock />
      <div className="form__block">
        <div className="form">
          <input
            type="text"
            placeholder="Имя пользователя"
            className="form__input"
          />
          <div className="password__block">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Пароль"
              className="form__input"
            />
            <img
              onClick={switchVisibility}
              src={passwordVisible ? publicPassword : hiddenPassword}
              alt="eye"
            />
          </div>
          <button className="btn-to-log">Войти</button>
        </div>
        <Link to={'/registr'} className="link-to">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default Login;
