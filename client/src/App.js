import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CompanyHistory from './components/CompanyHistory/CompanyHistory';
import PastWork from './components/PastWork/PastWork';
import Staff from './components/Staff/Staff';
import ContactUs from './components/ContactUs/ContactUs';
import ExternalLinks from './components/ExternalLinks/ExternalLinks';
import Shop from './components/Shop/Shop';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <NavBar handleClick={handleClick} />
      {activeSection === 'Home' && <Home />}
      {activeSection === 'CompanyHistory' && <CompanyHistory />}
      {activeSection === 'PastWork' && <PastWork />}
      {activeSection === 'Staff' && <Staff />}
      {activeSection === 'ContactUs' && <ContactUs />}
      {activeSection === 'ExternalLinks' && <ExternalLinks />}
      {activeSection === 'Shop' && <Shop />}
    </div>
  );
}

export default App;
