
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import ForgotPassPage from './pages/ForgotPassPage';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path='/forgotpassword' element={<ForgotPassPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/home/character/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
