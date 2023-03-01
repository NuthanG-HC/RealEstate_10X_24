import React from 'react';
import './App.css';
import Login from './components/signin/login';
import Register from './components/singup/register';
import {Route,BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
