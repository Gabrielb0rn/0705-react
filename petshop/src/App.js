import logo from './logo.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banho-e-tosa" element={<BanhoTosa />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </Router>
    
  );
}

export default App;
