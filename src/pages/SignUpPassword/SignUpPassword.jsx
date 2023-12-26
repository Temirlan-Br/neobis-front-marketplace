import React from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import arrow from '../../assets/arrow.png';
import password from '../../assets/password.png';
import './SignUpPassword.css';

const SignUpPassword = () => {
  return (
    <div className="container">
      <LogoBlock />
      <div className="form__block">
        <Link to={'/registr'} className="link-to">
          <div className="back__link">
            <img src={arrow} alt="" />
            <p>Назад</p>
          </div>
        </Link>
        <h2 className="reg__title">Регистрация</h2>
        <div className="form">
          <img src={password} alt="" />
          <h3 className="title">Придумайте пароль</h3>
          <h4 className="description">
            Минимальная длина — 8 символов. Для надежности пароль должен
            содержать буквы и цифры.
          </h4>
          <input
            type="password"
            placeholder="Введите пароль"
            className="password__input"
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className="password__input"
          />
          <Link to={'/registr2'} className="link-to">
            <button className="btn-to-log">Далее</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPassword;
