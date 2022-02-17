import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import down from "../imguser/down.png";
import icbutton from "../imguser/icon_button.png";
import "../Table/TableList.css";

export default function TableList() {
  return (
    <div className='table'>
        <div className='table-content'>
            <div className='table-heading'>
                <div className='table-nav'>
                    <div className='table-select'>
                        <p className='table-title'>Hệ đào tạo</p>
                        <div className='table-heading-select'>
                            <p className='select-name'>Theo tín chỉ</p>
                            <img src={down} className='icon-img' />
                            <div className='select-list'>
                                <ul className='list-item'>
                                    <li className='select-item'>
                                        <a href="#" className='item-cl00ick'>Theo tín chỉ</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Theo tháng</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className='table-select'>
                        <p className='table-title'>Niên khoá</p>
                    <div className='table-heading-select'>
                         <p className='select-name'>Chọn niên khoá</p>
                         <img src={down} className='icon-img' />
                        <div className='select-list'>
                            <ul className='list-item'>
                                <li className='select-item'>
                                    <a href="#" className='item-click'>2020-2021</a>
                                </li>
                                <li className='select-item'>
                                    <a href="#" className='item-click'>2019-2020</a>
                                </li>
                                <li className='select-item'>
                                    <a href="#" className='item-click'>2018-2019</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    </div>
                    <div className='table-select'>
                        <p className='table-title'>Khoa</p>
                        <div className='table-heading-select'>
                            <p className='select-name'>Chọn khoa</p>
                            <img src={down} className='icon-img' />
                            <div className='select-list'>
                                <ul className='list-item'>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Quản trị kinh doanh</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Kế toán - kiểm toán</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Tài chính ngân hàng</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Kinh tế đối ngoại</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Hệ thống thông tin</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Tất cả</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='table-select'>
                        <p className='table-title'>Ngành</p>
                        <div className='table-heading-select'>
                            <p className='select-name'>Chọn ngành</p>
                            <img src={down} className='icon-img' />
                            <div className='select-list'>
                                <ul className='list-item'>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Kiểm toán</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Kế toán</a>
                                    </li>
                                    <li className='select-item'>
                                        <a href="#" className='item-click'>Tất cả</a>
                                    </li>
                                </ul>
                            </div>                           
                        </div>
                    </div>
                </div>
            <input type='text' className="search-input" placeholder="Nhập tên hoặc mã lớp học"></input>
            </div>            
        </div>

        <div className='list-table-content-class'>
            <div className='heading-table-content'>
                <p className='content-heading-item'>STT</p>
                <p className='content-heading-item'>Mã lớp</p>
                <p className='content-heading-item'>Tên lớp</p>
                <p className='content-heading-item'>Số lượng biểu phí</p>
                <p className='content-heading-item'>Ngày cập nhật</p>
            </div>
            <div className='list-table-content'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>1</p>
                    <p className='list-table-item-code'>19 123 03A</p>
                    <p className='list-table-item-name'>KT_19A</p>
                    <p className='list-table-item-quantity'>1</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <Link className="i-details" to={'/details'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-content bg-grey'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>2</p>
                    <p className='list-table-item-code'>19 123 03B</p>
                    <p className='list-table-item-name'>KT_19B</p>
                    <p className='list-table-item-quantity'>2</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <img src={icbutton} alt="i" className='list-table-item-icon' />
                </div>
            </div>
            <div className='list-table-content'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>1</p>
                    <p className='list-table-item-code'>19 123 03A</p>
                    <p className='list-table-item-name'>KT_19A</p>
                    <p className='list-table-item-quantity'>1</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <Link className="i-details" to={'/details'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-content bg-grey'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>2</p>
                    <p className='list-table-item-code'>19 123 03B</p>
                    <p className='list-table-item-name'>KT_19B</p>
                    <p className='list-table-item-quantity'>2</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <img src={icbutton} alt="i" className='list-table-item-icon' />
                </div>
            </div>
            <div className='list-table-content'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>1</p>
                    <p className='list-table-item-code'>19 123 03A</p>
                    <p className='list-table-item-name'>KT_19A</p>
                    <p className='list-table-item-quantity'>1</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <Link className="i-details" to={'/details'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-content bg-grey'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>2</p>
                    <p className='list-table-item-code'>19 123 03B</p>
                    <p className='list-table-item-name'>KT_19B</p>
                    <p className='list-table-item-quantity'>2</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <img src={icbutton} alt="i" className='list-table-item-icon' />
                </div>
            </div>
            <div className='list-table-content'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>1</p>
                    <p className='list-table-item-code'>19 123 03A</p>
                    <p className='list-table-item-name'>KT_19A</p>
                    <p className='list-table-item-quantity'>1</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <Link className="i-details" to={'/details'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-content bg-grey'>
                <div className='list-table-item'>
                    <p className='list-table-item-id'>2</p>
                    <p className='list-table-item-code'>19 123 03B</p>
                    <p className='list-table-item-name'>KT_19B</p>
                    <p className='list-table-item-quantity'>2</p>
                    <p className='list-table-item-update'>01/07/2021</p>
                    <img src={icbutton} alt="i" className='list-table-item-icon' />
                </div>
            </div>
            <div className='footer-nav'>
                <div className='footer-nav-page'>
                <FaChevronLeft className='nav-icon-footer' />
                <ul className='nav-page-list'>
                    <li className='nav-page-item'>1</li>
                    <li className='nav-page-item bg-color'>2</li>
                    <li className='nav-page-item'>3</li>
                    <li className='nav-page-item'>...</li>
                    <li className='nav-page-item'>100</li>
                </ul>
                <FaChevronRight className='nav-icon-footer' />
                </div>
            </div>
        </div>
    </div>
  );
}
