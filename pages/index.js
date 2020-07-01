import BaseApp from '../components/BaseApp';

import ServicesHome from '../components/Services';
import Why from '../components/Why';

import StaticData from '../StaticData/index';

export default function Home() {
  const { services, why } = StaticData;

  return (
    <BaseApp>
      <Why why={why} a="a"/>
      <ServicesHome services={services} />
    </BaseApp>
  )
}


 