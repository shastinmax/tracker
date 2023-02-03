import React from 'react';
import { motion } from 'framer-motion';
import tools1 from '../../../assets/image/home/tools/tools-1.svg';
import tools2 from '../../../assets/image/home/tools/tools-2.svg';
import tools3 from '../../../assets/image/home/tools/tools-3.svg';
import tools4 from '../../../assets/image/home/tools/tools-4.svg';
import board from '../../../assets/image/home/tools/board.svg';
import './Tools.css';
import { useTranslation } from 'react-i18next';

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Tools = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="tools"
    >
      <div className="toolsInner">
        <div className="container">
          <motion.h3 custom={2} variants={textAnimation} className="toolsTitle title">
            {t('tools title')}
          </motion.h3>
          <motion.div custom={4} variants={textAnimation} className="toolsItems">
            <div className="toolsItem">
              <img src={tools1} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools click')}</h5>
              <p className="toolsItemText">{t('tools click text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools2} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools feedback')}</h5>
              <p className="toolsItemText">{t('tools feedback text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools3} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools community')}</h5>
              <p className="toolsItemText">{t('tools community text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools4} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools common')}</h5>
              <p className="toolsItemText">{t('tools common text')}</p>
            </div>
          </motion.div>
        </div>
        <motion.img custom={4} variants={textAnimation} className="board" src={board} alt="board" />
      </div>
    </motion.section>
  );
};

export default Tools;
