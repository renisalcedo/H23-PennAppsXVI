import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand brand" href={app}>Emsource</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav_items active">
              <a className="nav-link" href="#">Help <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item nav_items">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item nav_items nav_items--border">
              <a className="nav-link text-danger" href="#">Emergency</a>
            </li>
            <li className="nav-item nav_items nav_items--border">
              <a className="nav-link text-success" href="#">Donate</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    );
  }
};
