import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/admin';
import React from 'react';
import SignIn from './pages/signin';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Breadcrumb from './components/breadcrumbs';
import NotFound from './pages/notFound';
import DIYvideos from './pages/DIYVideos';
import Help from './pages/help';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Breadcrumb></Breadcrumb>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/home" element={ <Home /> }></Route>
            <Route path="/signin" element={ <SignIn /> }></Route>

            <Route path="/catalog" element={ <Catalog /> }></Route>
            <Route path="/admin" element={ <Admin /> }></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/help" element={ <Help /> }></Route>
            <Route path="/DIYVideos" element={ <DIYvideos /> }></Route>
            
            <Route path="*" element={ <NotFound /> }></Route>
          </Routes>
          <br/ >

          <Footer></Footer>
          </div>
      </BrowserRouter>  
  );
}

export default App;
