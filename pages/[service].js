import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Service = () => {
  const router = useRouter()
  const { service } = router.query;
  console.log(router);

  return (
    <Layout>
      <p>Service: {service}</p>
    </Layout>
  )
}

export default Service