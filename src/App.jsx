import logo from './logo.svg';
import React from 'react';
import IndexRoute from './Routes/IndexRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
  return (
    <Router>
    <div className="bg-blue-950 bg-opacity-80">
      <Header />
      <IndexRoute />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
