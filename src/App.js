import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import OffCanvas from './Components/OffCanvas';

function App() {
  return (
    <div className="App">
      <Header />
      <OffCanvas />
      <Content />
    </div>
  );
}

export default App;
