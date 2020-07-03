import { useRouter } from 'next/router';
import BaseApp from '../components/BaseApp';
import Parser from 'html-react-parser';
import StaticData from '../StaticData/index';

const Service = (props) => {
  return 'aaa';

  // return (
  //   <BaseApp>
  //     <section className="service_container">
  //       <section className="service_image">
  //         <img width="1920" src={service.image} />
  //       </section>
  //       <section className="service_content" style={{ backgroundImage: `url(${service.image})` }}>
  //         <section className="container">
  //           <section className="service_infos">
  //             <h1>{service.title}</h1>
  //             <p>{Parser(service.text)}</p>
  //           </section>
  //         </section>
  //       </section>
  //     </section> 
  //   </BaseApp>
  // )   
}

export const getStaticPaths = (props) => { 
  const links = StaticData.services.options.map(item => item.link);
  const paths = links.map(link => ({ params: { link: link.toString() } }));

  console.log(links);
  console.log(paths);
  return { paths, fallback: false } // esse fallback é pq como tu trabalhando estático, num precisa determinar nada se der 404
}

export const getStaticProps = (props) => {
    // const service = StaticData.services.options.find(item => item.link === slug);
  console.log(props);
  return { props: { service: 'abc' } }
}

export default Service;
