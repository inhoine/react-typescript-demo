import React from 'react';
import { Link } from 'react-router-dom';
import "../CTHV/CTHVien.css";
import eyes from "../imguser/eyes.png";

export default function CTHVien() {
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
    </div>
  )
}

