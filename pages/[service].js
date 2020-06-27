import { useRouter } from 'next/router';
import BaseApp from '../components/BaseApp';

const Service = () => {
  const router = useRouter()
  const { service } = router.query;
  console.log(router);

  return (
    <BaseApp>
      <p>Service: {service}</p>
    </BaseApp>
  )
}

export default Service