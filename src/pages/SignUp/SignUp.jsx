import React from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';

const SignUp = () => {
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
          <input type="email" placeholder="Почта" className="form__input" />
          <button className="btn-to-log">Далее</button>
        </div>
        <Link to={'/'} className="link-to">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
