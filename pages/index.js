import BaseApp from '../components/BaseApp';

import ServicesHome from '../components/Services';
import Why from '../components/Why';
import Contact from '../components/Contact';
import Slide from '../components/Slide';

import StaticData from '../StaticData/index';

const Home = () => {
  const { slide, useful, services, why } = StaticData;

  return (
    <BaseApp>
      <Slide slide={slide} />
      <Contact useful={useful} />
      <Why why={why} />
      <ServicesHome services={services} />
    </BaseApp>
  )
}

export default Home