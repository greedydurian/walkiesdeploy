import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './components/pages/Contact';
import About from './components/pages/About'
import Disclosure from './components/pages/Disclosure'
import Offer from './components/pages/Offer'
import Faq from './components/pages/Faq'
import Get from "./components/Get";
import Button from '@mui/material/Button';

ReactDOM.render(
 <Router>
   <Routes>
     <Route path='/' element={<App/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/offer' element={<Offer/>}/>
     <Route path='/disclosure' element={<Disclosure/>}/>
     <Route path='/faq' element={<Faq/>}/>
     <Route path='/Get' element={<Get/>}/>
     <Route path='/offer' element={<Button/>}/>
   </Routes>
 </Router>
    ,
 
  document.getElementById('root')
);

