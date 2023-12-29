import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import './SignUp.css';
import arrow from '../../assets/arrow.png';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const userData = {
    username: userName,
    email: email,
  };
  const onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/registr2');
  };
  return (
    <div className="container">
      <LogoBlock />

      <div className="form__block">
        <Link to={'/'} className="link-to">
          <div className="back__link">
            <img src={arrow} alt="" />
            <p>Назад</p>
          </div>
        </Link>
        <h2 className="reg__title">Регистрация</h2>
        <div className="form">
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Имя пользователя"
            className="form__input"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Почта"
            className="form__input"
          />
          <button onClick={onSubmit} className="btn-to-log">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
