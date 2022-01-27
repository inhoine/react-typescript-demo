import logo from "../ImgNav/Logo.png";
import money from "../ImgNav/money.png";
import basicMoney from "../ImgNav/basicMoney.png";
import folder from "../ImgNav/folder.png";
import "../Navmenu.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="navbar-logo" src={logo}  alt="logo"/>
        <ul className="navbar-icons">
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img"  src={money} alt="money"/></a></li>
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img" src={basicMoney} alt="basicMoney"/> </a> </li>
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img" src={folder} alt="foldder"/> </a> </li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-title roll">
            <span className="menu-title-content">
              Quản lý học phí
              <ul className="menu-title-list">
                <li className="menu-title-item">Danh sách lớp học</li>
                <li className="menu-title-item">Danh sách biểu phí</li>
                <li className="menu-title-item">Danh sách khoản thu</li>
                <li className="menu-title-item">Hình thức thu</li>
                <li className="menu-title-item">Danh sách chế độ miễn giảm</li>
                <li className="menu-title-item">Thu học phí</li>
              </ul>
            </span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Quản lý lương</span>
          </li>
          <li className="navbar-menu-title">
            <span className="menu-title-content">Đề xuất và phê duyệt</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;