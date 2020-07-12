import React from 'react';
import Parser from 'html-react-parser';

import BaseApp from '../components/BaseApp';
import Seo from '../components/Seo';
import StaticData from '../StaticData/index';

const Service = ({service}) => {
  return (
    <>
      <Seo meta={service}/>
      <BaseApp>
        <section className="service_container">
          <section className="service_image">
            <img width="1920" src={service.image} />
          </section>
          <section className="service_content" style={{ backgroundImage: `url(${service.image})` }}>
            <section className="container">
              <section className="service_infos">
                <h1>{service.title}</h1>
                <p>{Parser(service.text)}</p>
              </section>
            </section>
          </section>
        </section> 
      </BaseApp>
    </>
  )   
}

export async function getStaticPaths () { 
  const slugs = StaticData.services.options.map(item => item.slug);
  const paths = slugs.map(slug => ({ params: { service: slug } }));

  return { paths, fallback: false } 
}


export async function getStaticProps ({params}) { 
  const service = StaticData.services.options.find(item => item.slug === params.service);
  
  return { props: { service } }
}

export default Service;
