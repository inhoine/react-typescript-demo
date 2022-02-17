import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPw from './components/Login/ForgotPw';
import LoginForm from './components/Login/LoginForm';
import AppPage from './components/QLHP/AppPage';
import IDetails from './components/QLHP/Page/Details/IDetails';
import Page2 from './components/QLHP/Page/Page2';




function App() {
  return (
    <BrowserRouter> 
             <div className="App">
                 <Routes>  
                    <Route path="/home" element={<AppPage/>} />
                    <Route path="/" element={<LoginForm/>} />
                    <Route path="/forgot" element={<ForgotPw />} />
                    <Route path="/" element={<ForgotPw />} />

                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App
