import Link from 'next/link';

const ServicesHome = ({services}) => {
  return (
    <section className="services_container">
      <section className="container">
        <section className="services_texts">
          <h2>{services.title}</h2>
          <p>{services.text}</p>
        </section>

        <section className="services_content">
          {services.options.map(item => (
            <section key={item.title} className="services_item" style={{ backgroundImage: `url(${item.image})`}}>
              <Link  href={`/[services]?url=${item.link}`}   as={item.link}>
                <a>{item.title}</a>
              </Link>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default ServicesHome; 