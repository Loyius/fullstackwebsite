import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Destinos from './pages/Destinos';
import Viagens from './pages/TemplateViagem';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/viagens/:nomeViagem" element={<Viagens />} />
      </Routes>
    </Router>
  );
};

export default App;
