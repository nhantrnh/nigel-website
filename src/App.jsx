import React, {useState, useEffect} from 'react';
import IndexRoute from './Routes/IndexRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
  const [darkMode, setdarkMode] = useState('light');

  useEffect(() => {
      if (darkMode) {
          document.documentElement.classList.add('dark')
      } else {
          document.documentElement.classList.remove('dark')
      }
  }, [darkMode])

  return (
     
    <Router>
    <div className="">
      <Header 
        darkMode={darkMode}
        setdarkMode={setdarkMode} 
      />
      <IndexRoute
        darkMode={darkMode}
      />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
