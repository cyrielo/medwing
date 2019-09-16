import React from 'react';
import logo from './assets/svg/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="container">
        <div className="col map">
          <iframe  id="map-embed" src="https://maps.google.com/maps?q=leipzig&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <div className="col marker-controls">
          <div className="add-marker">
            <button className="btn btn-primary">Add Marker</button>
          </div>
          <div className="markers">
            <ul className="marker-list">
              <li className="marker-item">
                <h2 className="location-title">Checkpoint Charlie, Berlin</h2>
                <div className="location-name">Checkpoint Charlie, Berlin</div>
                <div className="coordinates">
                  <div className="lat">Latitude: <span>52.5074434</span></div>
                  <div className="lng">Longitude: <span>13.3903913</span></div>
                </div>
                <div className="marker-actions">
                  <button className="btn">Edit</button> <button className="btn">Delete</button>
                </div>
              </li>
              <li className="marker-item">
                <h2 className="location-title">Leipzig</h2>
                <div className="location-name">Leipzig</div>
                <div className="coordinates">
                  <div className="lat">Latitude: <span>52.5074434</span></div>
                  <div className="lng">Longitude: <span>13.3903913</span></div>
                </div>
                <div className="marker-actions">
                  <button className="btn">Edit</button> <button className="btn">Delete</button>
                </div>
              </li>
              <li className="marker-item">
                <h2 className="location-title">Leipzig</h2>
                <div className="location-name">Leipzig</div>
                <div className="coordinates">
                  <div className="lat">Latitude: <span>52.5074434</span></div>
                  <div className="lng">Longitude: <span>13.3903913</span></div>
                </div>
                <div className="marker-actions">
                  <button className="btn">Edit</button> <button className="btn">Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
