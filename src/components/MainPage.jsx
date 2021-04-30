import React from 'react';
import { Component } from 'react-bootstrap';

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="container-fluid">
  {/* Navbar */}
  
  {/* End Navbar */}
  {/* Start Mainpage */}
  <div className="movie-gallary m-2 ml-4">
    <h5 className="text-light">Our Selection for you</h5>
    <div className="movierow row overflow-scroll">
    </div>
  </div>
  {/* End Mainpage */}
  {/* start footer */}
  <footer className="page-footer sticky-bottom mb-4">
    <div className="container flex-column">
      <div className="row social-media">
        <div className="col p-0">
          <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-instagram" />
          <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-twitter" />
          <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-facebook" />
          <ion-icon className="m-1" style={{fontSize: '2rem'}} name="logo-youtube" />
        </div>
      </div>
      <div className="row text-muted">
        <div className="col">
          <ul className="navbar-nav">
            <li className="navbar-item">2</li>
            <li className="navbar-item">3</li>
            <li className="navbar-item">4</li>
            <li className="navbar-item">3</li>
            <li className="navbar-item"><button className="btn btn-outline-secondary text-muted mt-3 text-nowrap">Service Code</button></li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-nav">
            <li className="navbar-item">3</li>
            <li className="navbar-item">4</li>
            <li className="navbar-item">4</li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-nav">
            <li className="navbar-item">4</li>
            <li className="navbar-item">4</li>
            <li className="navbar-item">4</li>
          </ul>
        </div>
        <div className="col">
          <ul className="navbar-nav">
            <li className="navbar-item">2</li>
            <li className="navbar-item">3</li>
            <li className="navbar-item">4</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
</div>


            </>
         );
    }
}
 
export default MainPage;