import { useRouter } from 'next/router';
import BaseApp from '../components/BaseApp';
import Parser from 'html-react-parser';

const Service = ({data}) => {
  const router = useRouter();
  const service = data.services.options.filter(item => item.slug === router.query.service)[0];

  return (
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
  ) 
}


Service.getInitialProps = async function() {
  const res = await fetch(`${process.env.URL}/data.json`);
  const data = await res.json();

  return {
    data
  }
}

export default Service