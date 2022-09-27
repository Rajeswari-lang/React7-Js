import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <ul>
            <li>
              <Link to='/signin' className='alink'>SignIn</Link>
            </li>
            <li>
            <Link to='/signup' className='alink'>SignUp</Link>
              </li>
        </ul>
      <Routes>
      <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default Navbar;

