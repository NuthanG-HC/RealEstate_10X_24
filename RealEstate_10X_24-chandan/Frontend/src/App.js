import React from 'react';
import './App.css';
import Login from './components/signin/login';
import Register from './components/singup/register';
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Display from './components/Addproperty1/display';
import Sidebar from './components/dashboard/sidebar';
import ProgressBar from './components/dashboard/progressBar';
import Display2 from './components/Addproperty1/display2';
import Display3 from './components/Addproperty1/display3';
import Display4 from './components/Addproperty1/display4';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/display" element={<Display/>}/>
         <Route path="/display2" element={<Display2/>}/>
         <Route path="/display3" element={<Display3/>}/>
         <Route path="/display4" element={<Display4/>}/>
      </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;
