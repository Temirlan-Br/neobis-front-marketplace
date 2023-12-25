import React from 'react';
import logo from '../../assets/logo.png';
import logoBG from '../../assets/logoBG.png';
import './LogoBlock.css';

const LogoBlock = () => {
  return (
    <div className="logo__block">
      <div class="background-image">
        <img src={logoBG} alt="BG" />
      </div>
      <img src={logo} alt="Logo Mobi Market" className="logo" />
    </div>
  );
};

export default LogoBlock;
