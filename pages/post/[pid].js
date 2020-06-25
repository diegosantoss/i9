import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query;
  console.log(router);

  return (
    <Layout>
      <p>Post: {pid}</p>
    </Layout>
  )
}

export default Post; 