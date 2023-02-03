import React from 'react';
import style from './Theme.module.css';
import { ThemeProps } from './types';

export const Theme = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <div className={style.btnBox}>
      {theme === 'dark' ? (
        <span onClick={toggleTheme} className={style.emoji}>
          &#127773;
        </span>
      ) : (
        <span onClick={toggleTheme} className={style.emoji}>
          &#127770;
        </span>
      )}
    </div>
  );
};
