import React from 'react';
import './App.css';
import { http } from './components/services/https';
import ReposContainer from './components/ReposContainer';

function App() {
  return (
    <div className="App">
      <ReposContainer />
    </div>
  );
}

export default App;
