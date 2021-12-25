import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import NaviBar from './components/Navibar';
import About from './About';
import Home from './Home';
import Users from './Users';




function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route  exact path="/" element={<Home/>} />
           <Route path='/users' element={<Users/>} />  
         <Route exact path='/about' element={<About/>} />  

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
