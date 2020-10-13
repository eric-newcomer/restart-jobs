import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
