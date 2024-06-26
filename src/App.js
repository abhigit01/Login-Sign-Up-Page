import logo from './logo.svg';
// import './App.css';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginDone from './Components/LoginDone';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes >
              <Route path='/' element={<LoginPage/>} ></Route>
              <Route path='/signup' element={<SignUp/>} ></Route>
              <Route path='/logindone' element={<LoginDone/>} ></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
