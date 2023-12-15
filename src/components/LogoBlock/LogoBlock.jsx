import React from 'react';
import logo from '../../assets/logo.png';
import './LogoBlock.css';

const LogoBlock = () => {
  return (
    <div className="logo__block">
      <img src={logo} alt="Logo Mobi Market" />
    </div>
  );
};

export default LogoBlock;
