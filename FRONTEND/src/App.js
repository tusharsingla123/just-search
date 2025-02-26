//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import SearchBusiness from './components/SearchBusiness'
import Footer from './components/Footer'
import Login from './components/login'
import TopBusiness from './components/TopBusiness';
import Register from './components/register'
import Userprofile from './components/userprofile'
import Getprofile from './components/getprofile'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<SearchBusiness />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Contact" element={<h1>Contact</h1>} />
          <Route path="/Profile" element={<Userprofile/>} />
          <Route path="/ALLProfile/:pid" element={<Getprofile/>} />

        </Routes>
        <TopBusiness/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
