import React from 'react';
import { Link } from "react-router-dom";
import PNF from "../components/PNF";
import { Helmet } from "react-helmet";

const NotFound = () => {
  
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <div className="container">
        <div className="row justify-content-center align-items center">
          <PNF />
          <Link className="btn btn-lg btn-purple" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
