import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import arrow from '../../assets/arrow.png';
import passwordImg from '../../assets/password.png';
import './SignUpPassword.css';
import { register } from '../../api/api';

const SignUpPassword = () => {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();

  const passwordData = {
    password: password,
    password_confirm: checkPassword,
  };
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  const payload = { ...storedUserData, ...passwordData };

  const onSubmit = (e) => {
    e.preventDefault();

    register(payload)
      .then((response) => {
        if (response.status === 201) {
          navigate('/main');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <img src={passwordImg} alt="" />
          <h3 className="title">Придумайте пароль</h3>
          <h4 className="description">
            Минимальная длина — 8 символов. Для надежности пароль должен
            содержать буквы и цифры.
          </h4>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Введите пароль"
            className="password__input"
          />
          <input
            onChange={(e) => setCheckPassword(e.target.value)}
            value={checkPassword}
            type="password"
            placeholder="Подтвердите пароль"
            className="password__input"
          />

          <button onClick={onSubmit} className="btn-to-log">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPassword;
