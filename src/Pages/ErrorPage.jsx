import ErrorDrone from '../Img/errordrone.svg'
import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="error-container">
        <img src={ErrorDrone} alt="Error Drone" className="error-image" />
        <div className="error-content">
          <h1 className='error-h'>404 - Not Found</h1>
          <p>Ooops.. Se pare că pagina nu există</p>
          <Link to="/" className="home-link">
            <button className="home-button">Acasă</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
