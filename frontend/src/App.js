import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './signup';
import Songs from './songs';
import Navbar from './Navbar';
import HomePage from './homepage';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path= '/signup' element={<SignUp/>}/>
          {/* <Route path= '/login' element={<Login/>}/> */}
          <Route path= '/songs' element={<Songs/>}/>
          <Route path= '*' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
