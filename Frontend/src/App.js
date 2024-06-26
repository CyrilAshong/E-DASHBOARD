import './App.css';
import  Nav  from "./components/Nav";
import Footer from "./components/Footer"
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path='/' element={<h1>Product Component</h1>}></Route>
        <Route path='/add' element={<h1>Add Product Component</h1>}></Route>
        <Route path='/update' element={<h1>Update Product Component</h1>}></Route>
        <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
        <Route path='/profile' element={<h1>Profile component</h1>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
