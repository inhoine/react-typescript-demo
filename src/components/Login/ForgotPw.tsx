import { Link } from "react-router-dom";
import "./Login.css";


function ForgotPw() {
  const handleOnChange = (e: any) => {
    e.preventDefault();   
}
    return (
                <div className='login-background'>
                    <div className='login-container'>
                    <div className='form-group'>
                    <h2 className="h2-login">Cấp lại mật khẩu</h2>
                    <label className='email' htmlFor='email'>Tên đăng nhập <br/></label>
                    <input
                        id="account"
                        name="account"
                        type="text"
                        className="IPemail"
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className='form-group'>
                    <label className='xacthuc' htmlFor='xacthuc'>Mã xác thực <br/></label>
                    <input
                        id="confirm-code"
                        name="confirm-code"
                        type="text"
                        className="input-xacthuc"
                        onChange={handleOnChange}
                    />
                    </div>
                    <div>
                    <Link className="forgot-pw" to={'/'}>Quay lại trang chủ</Link>
                    <Link className="btn-dangnhap" to={'/'}><button className="btn-dangnhap">Cấp lại mật khẩu</button></Link>

                    </div>
                    </div>
                </div>
    )
}

export default ForgotPw