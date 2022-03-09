import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CTHV/CTHVien.css";
import eyes from "../imguser/eyes.png";
import close from "../imguser/close.png";

export default function CTHVien() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);


  return (
    <div className='table'>
        <div className='table-content'>
            <div className='table-heading'>
                <div className='table-nav'>
                    <div className='table-select'>
                        <div className='table-details-class'>
                            <div className='box-details'>
                                <div className='title-heading-cthv'>Thông tin học viên</div>
                                <div className='table-select-cthv'>
                                    <h3 className='details-hvt'>Họ và tên :</h3>
                                    <p className='details-class-cthv font-size'>Bùi Thế Anh </p>
                                    <h3 className='details-cmnd'>CMND:</h3>
                                    <p className='details-class-cmnd font-size'>123 1234 556</p>  
                                    <h3 className='details-lhdt'>Loại hình đào tạo:</h3>
                                    <p className='details-class-cthv font-size'>Chính quy</p>
                                    <h3 className='details-khoa'>Khoa:</h3>
                                    <p className='details-class-cthv font-size'>Kế toán - Kiểm toán</p>    

                                </div>
                                <div className='table-select-cthv'>
                                    <h3 className='details-hvt'>MSSV:</h3>
                                    <p className='details-class-mssv font-size'>171 002 1234</p>
                                    <h3 className='details-tthai'>Trạng thái:</h3>
                                    <p className='details-class-tt font-size'>Đang học</p>  
                                    <h3 className='details-cttt'>Chương trình đào tạo:</h3>
                                    <p className='details-class-ctdt font-size'>Đại trà</p>
                                    <h3 className='details-nganh'>Ngành:</h3>
                                    <p className='details-class-nganh font-size'>Kế toán</p>    

                                </div>
                                <div className='table-select-cthv'>
                                    <h3 className='details-gt'>Giới tính:</h3>
                                    <p className='details-class-dt font-size'>Nam</p>
                                    <h3 className='details-cdmg'>Chế độ miễn giảm:</h3>
                                    <p className='details-class-cdmg font-size'>Không</p>  
                                    <h3 className='details-bdt'>Bậc đào tạo:</h3>
                                    <p className='details-class-dh font-size'>Đại học</p>
                                    <h3 className='details-lop'>Lớp:</h3>
                                    <p className='details-class-lop font-size'>KT_19A</p>    

                                </div>
                                <div className='table-select-cthv'>
                                    <h3 className='details-ns'>Ngày sinh:</h3>
                                    <p className='details-class-ns font-size'>25/08/1999</p>
                                    <h3 className='details-mhs'>Mã hồ sơ:</h3>
                                    <p className='details-class-mhs font-size'>DHCQ_171002</p>  
                                    <h3 className='details-hdt'>Hệ đào tạo: </h3>
                                    <p className='details-class-hdt font-size'>Tín chỉ</p>
                                    <h3 className='details-nk'>Niên khóa:</h3>
                                    <p className='details-class-nk font-size'>2017 - 2021</p>    

                                </div>
                            </div>
                            <div className='heading-class-pt'>Phiếu thu tổng hợp đã đóng</div>
                            <div className='list-table-content-cthv'>
                                <div className='heading-table-cthv'>
                                    <p className='content-heading-cthv'>STT</p>
                                    <p className='content-heading-cthv'>Số phiếu</p>
                                    <p className='content-heading-cthv'>Mã hóa đơn</p>
                                    <p className='content-heading-cthv'>Ngày thu</p>
                                    <p className='content-heading-cthv'>Số tiền</p>
                                    <p className='content-heading-cthv'>Hình thức thu</p>
                                    <p className='content-heading-cthv'>Đơn vị thu</p>
                                    <p className='content-heading-cthv end'>Chi tiết</p>
                                </div>
                                <div className='list-table-cthv'>
                                    <div className='list-cthv-item'>
                                        <p className='list-cthv-item-stt'>1</p>
                                        <p className='list-cthv-item-sp'>123974</p>
                                        <p className='list-cthv-item-mhd'>5600</p>
                                        <p className='list-cthv-item-nt'>20/06/2020 08:46 AM</p>
                                        <p className='list-cthv-item-st'>5.900.000</p>
                                        <p className='list-cthv-item-htt'>Tiền mặt</p>
                                        <p className='list-cthv-item-dvt'>Nguyễn Thị Phương Trâm</p>
                                        <Link className="i-cthv" to={'/cthv'}><img src={eyes} alt="i" className='list-table-item-icon-cthv' onClick={() => setIsOpen(true)}></img></Link>
                                    </div>
                                    <div className='list-cthv-item bg-grey'>
                                        <p className='list-cthv-item-stt'>1</p>
                                        <p className='list-cthv-item-sp'>123974</p>
                                        <p className='list-cthv-item-mhd'>5600</p>
                                        <p className='list-cthv-item-nt'>20/06/2020 08:46 AM</p>
                                        <p className='list-cthv-item-st'>5.900.000</p>
                                        <p className='list-cthv-item-htt'>Tiền mặt</p>
                                        <p className='list-cthv-item-dvt'>Nguyễn Thị Phương Trâm</p>
                                        <Link className="i-cthv" to={'/cthv'}><img src={eyes} alt="i" className='list-table-item-icon-cthv'></img></Link>
                                    </div>
                                    <div className='list-cthv-item'>
                                        <p className='list-cthv-item-stt'>1</p>
                                        <p className='list-cthv-item-sp'>123974</p>
                                        <p className='list-cthv-item-mhd'>5600</p>
                                        <p className='list-cthv-item-nt'>20/06/2020 08:46 AM</p>
                                        <p className='list-cthv-item-st'>5.900.000</p>
                                        <p className='list-cthv-item-htt'>Tiền mặt</p>
                                        <p className='list-cthv-item-dvt'>Nguyễn Thị Phương Trâm</p>
                                        <Link className="i-cthv" to={'/cthv'}><img src={eyes} alt="i" className='list-table-item-icon-cthv'></img></Link>
                                    </div>
                                    <div className='list-cthv-item bg-grey'>
                                        <p className='list-cthv-item-stt'>1</p>
                                        <p className='list-cthv-item-sp'>123974</p>
                                        <p className='list-cthv-item-mhd'>5600</p>
                                        <p className='list-cthv-item-nt'>20/06/2020 08:46 AM</p>
                                        <p className='list-cthv-item-st'>5.900.000</p>
                                        <p className='list-cthv-item-htt'>Tiền mặt</p>
                                        <p className='list-cthv-item-dvt'>Nguyễn Thị Phương Trâm</p>
                                        <Link className="i-cthv" to={'/cthv'}><img src={eyes} alt="i" className='list-table-item-icon-cthv'></img></Link>
                                    </div>
                                    <div className='list-cthv-item'>
                                        <p className='list-cthv-item-stt'>1</p>
                                        <p className='list-cthv-item-sp'>123974</p>
                                        <p className='list-cthv-item-mhd'>5600</p>
                                        <p className='list-cthv-item-nt'>20/06/2020 08:46 AM</p>
                                        <p className='list-cthv-item-st'>5.900.000</p>
                                        <p className='list-cthv-item-htt'>Tiền mặt</p>
                                        <p className='list-cthv-item-dvt'>Nguyễn Thị Phương Trâm</p>
                                        <Link className="i-cthv" to={'/cthv'}><img src={eyes} alt="i" className='list-table-item-icon-cthv'></img></Link>
                                    </div>
                                </div>
                                <div className='space'></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isOpen &&(
            <div className='form-hd'>
                <div className='form-hd-item'>
                <Link className="i-close" to={'/cthv'}><img src={close} alt="i" className='close-form-hd'></img></Link> 
                    <div className='heading-hd-content'>
                        <p className='sp-content-item'>Số phiếu:</p>
                        <p className='sp-item-item'>12135</p>
                    </div>
                    <div className='mhd-content-item'>Mã hoá đơn:</div>
                    <div className='list-table-pt'>
                        <div className='heading-table-pt'>
                            <p className='stt-ma-heading'>STT</p>
                            <p className='stt-ma-heading'>Mã</p>
                            <p className='nd-heading'>Nội dung thu</p>
                            <p className='hk-heading'>Học kỳ</p>
                            <p className='st-heading'>Số tiền (VNĐ)</p>
                        </div>
                        <div className='list-pt'>
                            <div className='list-pt-item'>
                                <p className='list-pt-item-stt'>1</p>
                                <p className='list-pt-item-ma'>0211500</p>
                                <p className='list-pt-item-nd'>Kế toán đại cương</p>
                                <p className='list-pt-item-hk'>2020 - 2021</p>
                                <p className='list-pt-item-st'>1.160.000 đ</p>
                            </div>
                            <div className='list-pt-item bg-grey'>
                                <p className='list-pt-item-stt'>2</p>
                                <p className='list-pt-item-ma'>0211600</p>
                                <p className='list-pt-item-nd'>Nguyên lý kế toán</p>
                                <p className='list-pt-item-hk'>2020 - 2021</p>
                                <p className='list-pt-item-st'>1.160.000 đ</p>
                            </div>
                            <div className='list-pt-item'>
                                <p className='list-pt-item-stt'>3</p>
                                <p className='list-pt-item-ma'>0211500</p>
                                <p className='list-pt-item-nd'>Kế toán tài chính doanh nghiệp 1</p>
                                <p className='list-pt-item-hk'>2020 - 2021</p>
                                <p className='list-pt-item-st'>1.160.000 đ</p>
                            </div>
                            <div className='list-pt-item bg-grey'>
                                <p className='list-pt-item-stt'>4</p>
                                <p className='list-pt-item-ma'>0211500</p>
                                <p className='list-pt-item-nd'>Kế toán tài chính doanh nghiệp 2</p>
                                <p className='list-pt-item-hk'>2020 - 2021</p>
                                <p className='list-pt-item-st'>1.160.000 đ</p>
                            </div>
                            <div className='list-pt-item'>
                                <p className='list-pt-item-stt'>1</p>
                                <p className='list-pt-item-ma'>BHYT NH 2020 -2021</p>
                                <p className='list-pt-item-nd'>Bảo hiểm y tế bắt buộc (1 năm) Năm học 2020 - 2021</p>
                                <p className='list-pt-item-hk'>2020 - 2021</p>
                                <p className='list-pt-item-st'>530.000 đ</p>
                            </div>
                        </div>
                    </div>
                    <div className='thd-item-item'>
                        <p className='thd-item'>Tổng thanh toán:</p>
                        <p className='thd-gt-item'>5.170.000 đ</p>
                    </div>
                    <button className='btn-pt-item' onClick={() => setIsOpens(true)}>Xem phiếu thu</button>
                </div>

                {isOpens && (
                    <div className='form-ctbp'>
                        <div className='form-ctbp-item'>
                            <Link className="i-close" to={'/cthv'}><img src={close} alt="i" className='close-form-hd'></img></Link> 
                            <div className='heading-ctbp-content'>Chi tiết biểu phí</div>
                            <div className='box-form-ctbp'>
                                <div className='details-box-form'>
                                    <p className='item-detail-box'>Thu học phí</p>
                                </div>
                                <div className='details-content-form'>
                                    <div className='details-content-items-form'>
                                        <p className='details-content-item-item'>Mã biểu phí:</p>    
                                        <p className='details-content-item-item'>Niên khoá:</p>    
                                    </div>
                                    <div className='details-content-items-form'>
                                        <p className='details-content-item-mbp'>10_BHYT</p>    
                                        <p className='details-content-item-mbp'>2020 - 2023</p>    
                                    </div>
                                </div>
                                <div className='form-item-ctbp'>
                                    <p className='item-hsgd-ctbp'>1.Hồ sơ ghi danh</p>
                                    <p className='item-pgd-ctbp'>2. Phí ghi danh</p>
                                </div>
                            </div>
                            <div className='day-time-ctbp'>
                                <p className='update-day-ctbp'>Ngày cập nhật:</p>
                                <p className='time-day-ctbp'>02/07/2021</p>    
                            </div>
                            <div className='list-table-ctbp-content'>
                                <div className='heading-table-ctbp-content'>
                                    <p className="content-heading-table-ctbp">Thời gian</p>
                                    <p className="content-heading-table-ctbp">Nội dung cập nhật</p>
                                    <p className="content-heading-table-ctbp">Trạng thái</p>
                                </div>
                                <div className='list-table-ctbp-ctbp'>
                                    <div className='list-table-ctbp-item'>
                                        <p className="item-heading-table-time">02/07/2020  08:30 AM</p>
                                        <p className="item-heading-table-ndcp">Thay đổi trạng thái</p>
                                        <p className="item-heading-table-tt">Đang áp dụng</p>
                                    </div>
                                </div>  
                                <div className='list-table-ctbp-ctbp bg-grey'>
                                    <div className='list-table-ctbp-item'>
                                        <p className="item-heading-table-time">02/07/2020  08:30 AM</p>
                                        <p className="item-heading-table-ndcp">Thêm biểu phí</p>
                                        <p className="item-heading-table-tt">Chưa áp dụng</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
  );
}

