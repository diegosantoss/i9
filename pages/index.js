import React from 'react';

import BaseApp from '../components/BaseApp';

import Seo from '../components/Seo';
import ServicesHome from '../components/Services';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Slide from '../components/Slide';
import About from '../components/About';
import Expertise from '../components/Expertise';

import StaticData from '../StaticData/index';

const Home = () => {
  const { slide, about, useful, services, why, expertise } = StaticData;

  return (
    <>
      <Seo meta={useful} />
      <BaseApp>
        <Slide slide={slide} />
        <Contact useful={useful} />
        <About about={about} />
        <Why why={why} />
        <ServicesHome services={services} />
        <Expertise expertise={expertise} />
      </BaseApp>
    </>
  )
}

export default Home