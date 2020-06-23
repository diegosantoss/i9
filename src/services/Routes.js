import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from '../utils/Header';
import Footer from '../utils/Footer';

const history = createBrowserHistory({
    basename: '',
    forceRefresh: false
})

const Home = React.lazy(() => import('../pages/Home'));
const Orcamento = React.lazy(() => import('../pages/Orcamento'));

export default function Routes(){
  return (
    <Router history={ history }>
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={Home} exact />
          <Route path="/orcamento" component={Orcamento} />
        </Suspense>        
      </Switch>
      <Footer />
    </Router>
  )
} 