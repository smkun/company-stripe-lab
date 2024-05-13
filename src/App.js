import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CompanyHistory from './components/CompanyHistory';
import PastWork from './components/PastWork';
import Staff from './components/Staff';
import ContactUs from './components/ContactUs';
import ExternalLinks from './components/ExternalLinks';
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
    </div>
  );
}

export default App;
