import './App.css';
import Home from './components/home';
import NavBar from './components/navbar';
import Register from './components/Register';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <NavBar />
   <BrowserRouter>
   <Routes>
  <Route path='/' element={<Home/>}></Route>
   <Route path='/register' element={<Register />}></Route>
   <Route path='/login' element={<Login />}></Route>
   <Route path='/home' element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
    </>
    
  );
}
export default App;
