import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import './Navbar.css';

function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#d0d0d0' }}> Índice </h1>
        <ul className="navbar-nav" style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: 0 }}>
          <li className="nav-item">
            <Link to="/Form">
              <PrimaryButton 
                text="Formulario" 
                styles={{
                  root: {backgroundColor: '#f3f2f1', color: '#333', border: '1px solid #d0d0d0',},
                  rootHovered: {backgroundColor: '#e0e0e0',},
                }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Table">
              <PrimaryButton 
                text="Tabla" 
                styles={{
                  root: {backgroundColor: '#f3f2f1', color: '#333', border: '1px solid #d0d0d0', },
                  rootHovered: {backgroundColor: '#e0e0e0',},
                }} />
            </Link>
          </li>
        </ul>
      </nav>
      <main className="container mt-4">
        <Routes>
          <Route path="/Form" element={<Form />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </main>
    </Router>
  );
}
export default Navbar;

