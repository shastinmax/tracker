import React from 'react';
import { motion } from 'framer-motion';
import './Direction.css';
import direction1 from '../../../assets/image/home/direction/direction-1.svg';
import { useTranslation } from 'react-i18next';

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Direction = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="direction"
    >
      <div className="container">
        <div className="directionItem">
          <motion.div custom={2} variants={textAnimation} className="directionItemContent">
            <h3 className="directionItemTitle title">{t('direction improvements')}</h3>
            <p className="directionItemTitleText">{t('direction improvements text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction automation')}</h6>
            <p className="directionItemText">{t('direction automation text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction details')}</h6>
            <p className="directionItemText">{t('direction details text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction board')}</h6>
            <p className="directionItemText">{t('direction board text')}</p>
          </motion.div>
          <motion.img
            custom={4}
            variants={textAnimation}
            className="directionItemImg"
            src={direction1}
            alt="Design Professionals images"
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Direction;
