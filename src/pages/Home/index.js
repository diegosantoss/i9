import React from 'react';
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>i9 Corporation</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="i9 corporation" />
      </Helmet>
      <h2>i9 Corporation</h2> 
    </>
  )
}

export default withRouter(Home);