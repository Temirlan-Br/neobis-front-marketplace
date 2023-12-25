import React from 'react';

import mainLogo from '../../assets/mainLogo.png';
import userAvatar from '../../assets/userAva.png';
import './Main.css';
const Main = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="leftNav">
          <img src={mainLogo} alt="Logo" />
        </div>
        <div className="rightNav">
          <button className="btn-to-create">Подать объявление</button>
          <div className="userInfo">
            <div>
              <h3>User</h3>
              <h4>User@mail.com</h4>
            </div>
            <img src={userAvatar} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Main;
