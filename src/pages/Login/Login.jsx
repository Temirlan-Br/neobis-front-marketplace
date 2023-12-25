import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './Login.css';
import { login } from '../../api/api';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: userName,
      password: password,
    };
    login(payload)
      .then((response) => {
        if (response.status === 200) {
          console.log('Good Job');
          //   navigate('/welc');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const switchVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="container">
      <LogoBlock />
      <div className="form__block">
        <div className="form">
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Имя пользователя"
            className="form__input"
          />
          <div className="password__block">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
          <button onClick={onSubmit} className="btn-to-log">
            Войти
          </button>
        </div>
        <Link to={'/registr'} className="link-to">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default Login;
