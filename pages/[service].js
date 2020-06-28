import { useRouter } from 'next/router';
import BaseApp from '../components/BaseApp';
import Parser from 'html-react-parser';

const Service = ({data}) => {
  console.log(data)
  const router = useRouter();
  const service = data.services.options.filter(item => item.slug === router.query.service)[0];

  return (
    <BaseApp>
      <section className="service_container">
        <section className="service_image">
          <img src={service.image} />
        </section>
        <section className="service_content">
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
  // const url = window.location.origin + '/data.json';
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()

  return {
    data
  }
}

export default Service