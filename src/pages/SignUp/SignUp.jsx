import React from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import './SignUp.css';
import arrow from '../../assets/arrow.png';

const SignUp = () => {
  return (
    <div className="container">
      <LogoBlock />

      <div className="form__block">
        <h2 className="reg__title">Регистрация</h2>
        <div className="form">
          <input
            type="text"
            placeholder="Имя пользователя"
            className="form__input"
          />
          <input type="email" placeholder="Почта" className="form__input" />
          <button className="btn-to-log">Далее</button>
        </div>
        <Link to={'/'} className="link-to">
          <div className="back__link">
            <img src={arrow} alt="" />
            <p>Назад</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
