import './App.css';
import React from 'react';
import EnFlag from './assets/en.svg';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './i18n';
import ObesityChart from './pages/ObesityChart';
import { BrowserRouter as Router } from 'react-router-dom';
import ObesityTrendChart from './pages/ObesityTrendChart';


function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Router>
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
            <svg width="32" height="32" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
  <defs>
    <style>{`.cls-1{fill:#ff7900;}`}</style>
  </defs>
  <g data-name="calendar doctor" id="calendar_doctor">
    <path className="cls-1" d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z" />
    <path className="cls-1" d="M17,13a2,2,0,0,0-.52,3.92v0a3.49,3.49,0,0,1-.82,3.23,3.53,3.53,0,0,1-4.83-.05A3.49,3.49,0,0,1,9.93,17,3.51,3.51,0,0,0,13,13.5v-3a.5.5,0,0,0-.5-.5H11.44a.5.5,0,1,0,0,1H12v2.5a2.5,2.5,0,0,1-5,0V11h.5a.5.5,0,0,0,0-1h-1a.5.5,0,0,0-.5.5v3a3.5,3.5,0,0,0,2.92,3.44,4.48,4.48,0,0,0,1.24,3.93,4.65,4.65,0,0,0,3.16,1.24,4.36,4.36,0,0,0,3.05-1.22,4.3,4.3,0,0,0,1.12-4A2,2,0,0,0,17,13Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,17,16Z" />
  </g>
</svg>

              {t('mainTitle')}
            </Navbar.Brand>
            <div className="d-flex align-items-center ms-auto">
              <Button
                variant="outline-dark"
                className="language-btn language-btn-en"
                onClick={() => changeLanguage('en')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
      <img src={EnFlag} alt="EN" width="20" height="20" style={{ verticalAlign: 'middle' }} />
EN
              </Button>
              <Button
                variant="outline-dark"
                className="language-btn language-btn-fr"
                onClick={() => changeLanguage('fr')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}
              >
                <svg width="20" height="14" viewBox="0 0 20 14" style={{ verticalAlign: 'middle' }}><rect width="6.67" height="14" fill="#0055a4"/><rect x="6.67" width="6.67" height="14" fill="#fff"/><rect x="13.33" width="6.67" height="14" fill="#ef4135"/></svg>
                FR
              </Button>
            </div>
          </Container>
        </Navbar>
        
        <div className="container mt-4">
          <ObesityChart />
        </div>
        <div className="container mt-4">
          <ObesityTrendChart />
        </div>
      </Router>
    </div>
  );
}

export default App;
