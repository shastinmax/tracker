import React, { useContext } from 'react';
import style from './BestTracker.module.css';
import { NavLink } from 'react-router-dom';
import { PathNavigation } from '../../../enums/Navigation';
import Effect from './effect/Effect';
import { Context } from '../../../hooks/context';
import topImg from '../../../assets/image/home/best tracker/top-bg.svg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const BestTracker = () => {
  const { isActive, setIsActive } = useContext(Context);
  const { t } = useTranslation();

  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.top}
    >
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <motion.h1
              custom={2}
              variants={textAnimation}
              className={`${style.titleTop} ${style.title}`}
            >
              {t('bt title')}
            </motion.h1>

            <motion.p custom={4} variants={textAnimation} className={style.text}>
              {t('bt subTitle')}
            </motion.p>
            <motion.div custom={4} variants={textAnimation} className={style.buttons}>
              <NavLink
                className={`${style.btn} ${style.outerShadow} ${style.hoverInShadow}`}
                onClick={onToggleMenuClick}
                to={PathNavigation.SING_IN}
              >
                {t('sing in')}
              </NavLink>
              <NavLink
                className={`${style.btn2} ${style.outerShadow2} ${style.hoverInShadow2}`}
                onClick={onToggleMenuClick}
                to={PathNavigation.SING_UP}
              >
                {t('sing up')}
              </NavLink>
            </motion.div>
          </div>
          <img className={style.directionItemImg} src={topImg} alt="Design Professionals images" />
        </div>
      </div>
      <Effect />
    </motion.section>
  );
};

export default BestTracker;
