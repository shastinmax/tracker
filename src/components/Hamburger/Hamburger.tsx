import React from 'react';
import style from './Hamburger.module.css';
import { HamburgerProps } from './types';

const Hamburger = (props: HamburgerProps) => {
  const { setIsActive, isActive } = props;

  const onHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${style.hamburger} ${isActive && style.hamburger_active}`}
      onClick={onHamburgerClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
