import React from 'react';
import './Footer.css';
import rs from '../../assets/image/footer/rs_school_js.svg';

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="inner">
          <span>©2022</span>
          <a className="link" href="https://rs.school/react/">
            <img className="Logo" src={rs} alt="rsscholl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
