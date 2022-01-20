import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPw from './components/Login/ForgotPw';
import LoginForm from './components/Login/LoginForm';



function App() {
  return (
    <BrowserRouter> 
             <div className="App">
                 <Routes>  
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/forgot" element={<ForgotPw />} />
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App
