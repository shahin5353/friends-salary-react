import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './myComponent/Header/Header';
import AppBody from './myComponent/AppBody/AppBody';
function App() {
  return (
    <div className="app">
      <Header></Header>
      <AppBody></AppBody>
    </div>
  );
}

export default App;
