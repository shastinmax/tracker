import React from 'react';
import style from './PageNotFound.module.css';
import { NavLink } from 'react-router-dom';
import img from '../../assets/image/error404/error.gif';
import { Button } from '@mui/material';
const PageNotFound = () => {
  return (
    <>
      <img className={style.img} src={img} alt="Error" />
      <p className={style.title}>Page does not exist</p>
      <NavLink className={style.link} to="/">
        <Button variant="contained" color="secondary">
          Back to main page
        </Button>
      </NavLink>
    </>
  );
};

export default PageNotFound;
