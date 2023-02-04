import React, { useContext, useEffect, useState } from 'react';
import style from './Header.module.css';
import { Theme } from '../Theme/Theme';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../i18n/i18n';
import { PathNavigation } from '../../enums/Navigation';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';
import Hamburger from '../Hamburger/Hamburger';
import { Context } from '../../hooks/context';
import { motion, useScroll } from 'framer-motion';
import { HeaderProps } from './types';
import { useAppSelector } from '../../hooks/useAppSelectors';
import { selectShowHeader } from '../../redux/slices/selectors';

export const Header = (props: HeaderProps) => {
  const isShow = useAppSelector(selectShowHeader);
  const { scrollYProgress } = useScroll();
  const { isActive, setIsActive } = useContext(Context);
  const { theme, toggleTheme } = props;
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleChangeLanguage = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

  const [scroll, setScroll] = useState<number>(0);

  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    return scrollYProgress.onChange((latest: number) => {
      setScroll(latest);
    });
  }, []);

  return (
    <header>
      <motion.nav
        style={
          scroll > 0.3
            ? { background: 'linear-gradient(#36b6c2, #c391e5)' }
            : { background: '#5fd1d1' }
        }
      >
        <div className="container">
          <div className={`${style.navigation} ${isActive && style.active}`}>
            <NavLink onClick={onToggleMenuClick} className={style.logo} to={PathNavigation.HOME}>
              <img src={logo} alt="logo" />
              <span>Best Tracker</span>
            </NavLink>

            <div className={style.registerGroup}>
              {isShow ? (
                <p>Exit</p>
              ) : (
                <>
                  <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_IN}>
                    <Button style={{ width: 100 }} variant="contained">
                      {t('sing in')}
                    </Button>{' '}
                  </NavLink>

                  <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_UP}>
                    <Button
                      style={{ margin: 20, width: 130 }}
                      className={style.btn}
                      variant="contained"
                    >
                      {t('sing up')}
                    </Button>
                  </NavLink>
                </>
              )}

              <Theme theme={theme} toggleTheme={toggleTheme} />

              <Button
                style={{ margin: 20 }}
                onClick={handleChangeLanguage}
                variant="contained"
                color="secondary"
              >
                {t('lang')}
              </Button>
            </div>
          </div>
        </div>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </motion.nav>
    </header>
  );
};
