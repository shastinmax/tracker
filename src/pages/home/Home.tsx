import React from 'react';

import BestTracker from './section BestTracker/BestTracker';
import Tools from './section Tools/Tools';
import Direction from './section Direction/Direction';
import Team from './team/Team';
import Blog from './section Blog/Blog';
import Footer from '../../components/Footer/Footer';

const Home = () => {
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
