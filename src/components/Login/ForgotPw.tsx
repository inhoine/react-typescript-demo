import { Link } from "react-router-dom";
import "./Login.css";


function ForgotPw() {
    function handleOnChange(e: any) {
        const formUpdatePassword: Element | null = document.querySelector(
          "#form-update-password"
        );
        if (formUpdatePassword) {
          const btnUpdatePassword: Element | null =
            formUpdatePassword.querySelector(".form-submit.update-password");
          const accountInput: Element | null = formUpdatePassword.querySelector(
            'input[name= "account"] '
          );
          const confirmCodeInput: Element | null = formUpdatePassword.querySelector(
            'input[name= "confirm-code"] '
          );
          if (accountInput != null && confirmCodeInput != null && btnUpdatePassword != null) {
            if ((accountInput as HTMLInputElement).value && (confirmCodeInput as HTMLInputElement).value) {
              (btnUpdatePassword as HTMLInputElement).style.background =
                "linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)";
            } else {
              (btnUpdatePassword as HTMLInputElement).style.background = "#c9c4c0";
            }
          }
        }
        if (e.target.value) {
            e.target.style.backgroundColor = "#fff";
            e.target.style.border = "1px solid rgba(55, 56, 57, 0.5)";
          } else {
            e.target.style.backgroundColor = "#f2f2f2";
            e.target.style.border = "none";
          }
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
                    <Link className="forgot-pw" to={'/login'}>Quay lại trang chủ</Link>
                    <Link className="btn-dangnhap" to={'/login'}><button className="btn-dangnhap">Cấp lại mật khẩu</button></Link>

                    </div>
                    </div>
                </div>
    )
}

export default ForgotPw