import React, { useContext } from 'react';
import './Team.css';
import team1 from '../../../assets/image/home/team/team-1.jpg';
import team2 from '../../../assets/image/home/team/team-2.jpg';
import team3 from '../../../assets/image/home/team/team-3.jpg';
import team4 from '../../../assets/image/home/team/team-4.jpg';
import team5 from '../../../assets/image/home/team/team-5.jpg';
import { PathNavigation } from '../../../enums/Navigation';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../../hooks/context';
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

const Team = () => {
  const { t } = useTranslation();
  const { isActive, setIsActive } = useContext(Context);
  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="team"
    >
      <div className="container">
        <motion.div custom={4} variants={textAnimation} className="teamInner">
          <div className="teamItem teamItem1">
            <img className="teamItem-img" src={team1} alt="name" />
            <p className="teamItemText teamItemTextRight">{t('team best option')}</p>
          </div>

          <div className="teamItem teamItem2">
            <img className="teamItem-img" src={team2} alt="name" />
            <p className="teamItemText teamItemTextLeft">{t('team assignments')}</p>
          </div>

          <div className="teamItem teamItem3">
            <img className="teamItem-img" src={team3} alt="name" />
            <p className="teamItemText teamItemTextRight">{t('team productivity')}</p>
          </div>

          <div className="teamItem teamItem4">
            <img className="teamItem-img" src={team4} alt="name" />
            <p className="teamItemText teamItemTextRight">{t('team always')}</p>
          </div>

          <div className="teamItem teamItem5">
            <img className="teamItem-img" src={team5} alt="name" />
            <p className="teamItemText teamItemTextRight">{t('team whole team')}</p>
          </div>

          <div className="teamBox">
            <h3 className="teamTitle title">{t('team hero')}</h3>
            <p className="teamText">{t('team hero text')}</p>
            <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_IN}>
              <Button size="large" variant="contained">
                {t('sing in')}
              </Button>{' '}
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
