import { useRouter } from 'next/router'

const Service = () => {
  const router = useRouter()
  const { service } = router.query;
  console.log(router);

  return <p>Service: {service}</p>
}

export default Service