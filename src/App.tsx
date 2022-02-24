import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPw from './components/Login/ForgotPw';
import LoginForm from './components/Login/LoginForm';
import AppPage from './components/QLHP/Page/AppPage/AppPage';
import AppPage2 from './components/QLHP/Page/AppPage/AppPage2';
import AppPage3 from './components/QLHP/Page/AppPage/AppPage3';
import CTHVPage from './components/QLHP/Page/AppPage/CTHVPage';
import DSHV from './components/QLHP/Page/DSHV/DSHV';




function App() {
  return (
    <BrowserRouter> 
             <div className="App">
                 <Routes>  
                    <Route path="/home" element={<AppPage2/>} />
                    <Route path="/" element={<LoginForm/>} />
                    <Route path="/forgot" element={<ForgotPw />} />
                    <Route path="/" element={<ForgotPw />} />
                    <Route path='/details' element={<AppPage />} />
                    <Route path='/dshv' element={<AppPage3 />} />
                    <Route path='/cthv' element={<CTHVPage />} />

                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App
