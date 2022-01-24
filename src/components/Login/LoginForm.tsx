import { Link } from "react-router-dom";
import "./Login.css";



function LoginForm({}) {
    const handleOnChange = (e: any) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={LoginForm}> 
                <div className='login-background'>
                    <div className='login-container'>
                    <div className='form-group'>
                    <h2 className="h2-login">Đăng nhập</h2>
                    <label className='email' htmlFor='email'>Tên đăng nhập<br/></label>
                    <input
                        id="account"
                        name="account"
                        type="text"
                        className="IPemail"
                        onChange={handleOnChange}
                    />
                </div>

                <div className='form-group'>
                    <label className='password' htmlFor='password'>Mật khẩu<br/></label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="input-second"
                        onChange={handleOnChange}
                    />
                </div>
                    <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
                    <Link className="homepg" to={'/home'}><button className="btn-dangnhap">Đăng nhập</button></Link>
                    </div>
                    </div>
        </form>
    )
}

export default LoginForm