import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import "../Details/DSHV.css";
import icbutton from "../imguser/icon_button.png";

export default function DSHV() {
  return (
    <div className='table'>
        <div className='table-content'>
            <div className='table-heading'>
                <div className='table-nav'>
                    <div className='table-select'>
                        <h3 className='content-dshv'>Lớp KT-19A</h3>
                    </div>
                </div>
            <input type='text' className="search-input" placeholder="Nhập tên hoặc mã lớp học"></input>
            </div>
        </div>
        <div className='list-table-content-dshv'>
            <div className='heading-table-dshv'>
                <p className='content-heading-dshv'>STT</p>
                <p className='content-heading-dshv'>Tên sinh viên</p>
                <p className='content-heading-dshv'>MSSV</p>
                <p className='content-heading-dshv'>Giới tính</p>
                <p className='content-heading-dshv'>Ngày sinh</p>
                <p className='content-heading-dshv'>Số biểu phí đã đóng</p>
                <p className='content-heading-dshv'>Chế độ miễn giảm</p>
                <p className='content-heading-dshv'>Trạng thái</p>
            </div>
            <div className='list-table-dshv'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-dshv br-grey'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>2</p>
                    <p className='list-dshv-item-name'>Hàng Lâm Trang Anh</p>
                    <p className='list-dshv-item-mssv'>002</p>
                    <p className='list-dshv-item-gt'>Nữ</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>3</p>
                    <p className='list-dshv-item-cdmg'>Có</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-dshv'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>3</p>
                    <p className='list-dshv-item-name'>Nguyễn Thiện Thanh Bảo </p>
                    <p className='list-dshv-item-mssv'>003</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>3</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt bd-red'>Chưa thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-dshv br-grey'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>            <div className='list-table-dshv'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-dshv br-grey'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>            <div className='list-table-dshv'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='list-table-dshv br-grey'>
                <div className='list-dshv-item'>
                    <p className='list-dshv-item-stt'>1</p>
                    <p className='list-dshv-item-name'>Bùi Thế Anh</p>
                    <p className='list-dshv-item-mssv'>001</p>
                    <p className='list-dshv-item-gt'>Nam</p>
                    <p className='list-dshv-item-ns'>01/07/2021</p>
                    <p className='list-dshv-item-sbp'>2</p>
                    <p className='list-dshv-item-cdmg'>Không</p>
                    <p className='list-dshv-item-tt'>Đã thanh toán</p>
                    <Link className="i-dshv" to={'/'}><img src={icbutton} alt="i" className='list-table-item-icon'></img></Link>
                </div>
            </div>
            <div className='total-sv'>Tổng số sinh viên: 40</div>
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
  )
}
