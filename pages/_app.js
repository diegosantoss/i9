import '../components/BaseApp/index.css';
import '../components/Header/index.css';
import '../components/Footer/index.css';
import '../components/Services/index.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}