import React, { useEffect } from 'react';

import BestTracker from './section BestTracker/BestTracker';
import Tools from './section Tools/Tools';
import Direction from './section Direction/Direction';
import Team from './team/Team';
import Blog from './section Blog/Blog';
import Footer from '../../components/Footer/Footer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { showHeader } from '../../redux/slices/showHeaderSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showHeader(false));
  }, []);
  return (
    <>
      <BestTracker />
      <Tools />
      <Direction />
      <Team />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
