
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Details/Details.css";
import ic_button from "../imguser/icon_button.png";
import DatePicker from "react-datepicker";
import close from "../imguser/close.png";



import "react-datepicker/dist/react-datepicker.css";



export default function IDetails() {
  const [isOpen, setIsOpen] = useState(false); 
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [isOpens, setIsOpens] = useState(false);
  
  return (
  <div className='table'>
      <div className='table-content'>
          <div className='table-heading'>
              <div className='table-nav'>
                  <div className='table-select'>
                      <div className='table-details-class'>
                          <div className='box-details'>
                            <div className='table-select-details'>
                                <h3 className='details-class'>Lớp:</h3>
                                <p className='details-name font-size'>KT_19A</p>
                                <h3 className='details-class-gr'>Hệ đào tạo:</h3>
                                <p className='details-class-name font-size'>Đào tạo theo tín chỉ</p>                     
                            </div>  
                            <div className='table-select-details'>
                                <h3 className='details-class'>Khoa:</h3>
                                <p className='details-name-2 font-size'>Kế toán - Kiểm toán</p>
                                <h3 className='details-class-gr-2'>Chương trình học:</h3>
                                <p className='details-class-name-2 font-size'>Đại trà</p>                     
                            </div> 
                            <div className='table-select-details'>
                                <h3 className='details-class'>Ngành:</h3>
                                <p className='details-name-3 font-size'>Kế toán</p>
                                <h3 className='details-class-gr-3'>Niên khoá:</h3>
                                <p className='details-class-name-3 font-size'>2019-2022</p>                     
                            </div> 
                          </div>
                          <Link className="list_student" to={'/dshv'}> 
                            <button className="btn-list-student">Danh sách học viên</button>
                          </Link>
                          <div className="number-details">
                            <div className="number-details-class">
                              <h3 className="number-class">Số lượng biểu phí:</h3>
                              <p className="class-number">02</p>
                            </div>
                          </div>

                          <div className="border-box"></div>

                          <div className="list-details-item">
                            <div className="list-item-item">
                              <h2 className="name-list-item">Danh sách biểu phí</h2>
                            </div>
                            <button className="btn-add-item" onClick={() => setIsOpen(true)}>
                              Thêm biểu phí
                              </button>
                          </div>

                          <div className="table-details-list">
                            <div className="list-table-content-details">
                              <div className='heading-table-details-content'>
                                  <p className='details-heading-item'>Tên biểu phí</p>
                                  <p className='details-heading-item'>Ngày cập nhật</p>
                                  <p className='details-heading-item'>Trạng thái</p>
                              </div>
                              <div className="heading-detail-i">
                                <p className="details-heading-item">Xem chi tiết</p>
                              </div>
                            </div>
                            <div className="table-content-list">
                              <div className="content-list-item">
                                  <div className="tariff-content-item">
                                      <div className="tariff-content-info">
                                        <p className="tariff-name">1. Biểu phí thu học phí </p>
                                        <p className="tariff-date">01/07/2021</p>
                                        <p className="tariff-status">Chưa áp dụng</p>
                                        <p className="content-stop">Ngừng hoạt động</p>
                                      </div>
                                      <div className="link-tariff-detail">
                                        <Link className="homepg" to={'/details'}> 
                                            <a href=""> <img src={ic_button} className="tariff_link" onClick={() => setIsOpens(true)}/></a>
                                        </Link>
                                        {isOpens &&  (  
                                     
                                     <div className='form-ctbp'>
                                         <div className='form-ctbp-item'>
                                         <div className="i-close" ><img src={close} alt="i" className='close-form-hd' onClick={() => setIsOpens(false)}></img>
                                             </div> 
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
                                      
                                  </div>
                                  <div className="tariff-content-item bg-grey">
                                      <div className="tariff-content-info">
                                        <p className="tariff-name">2. Biểu phí thu Bảo hiểm Y tế</p>
                                        <p className="tariff-date">02/07/2021</p>
                                        <p className="tariff-status">Đang áp dụng</p>
                                        <p className="content-stop">Ngừng hoạt động</p>
                                      </div>
                                      <div className="link-tariff-detail">
                                        <Link className="homepg" to={'/details'}> 
                                            <a href=""> <img src={ic_button} className="tariff_link" onClick={() => setIsOpen(false)}/></a>
                                        </Link>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                      </div>                                  
                  </div>            
              </div>
          </div>
      </div>
      {isOpen && (
        <div className="table-add-bp">
          <div className="table-add-bp-item">
            <div
            className="add-bp-item-title">
              Thêm biểu phí
            </div>
            <div className="table-add-item-list">
                <div className="table-heading-add-item">
                    <div className="add-item-dt">
                      <input type="checkbox"/>
                    </div>
                    <div className="add-item-dt">
                      <span> STT </span>
                    </div>
                    <div className="add-item-dt">
                      <span> Tên biểu phí </span>
                    </div>
                    <div className="add-item-dt-end">
                      <span>Mã biểu phí </span>
                    </div>
                </div>
                <div className="table-heading-add-item-list">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">1</div>
                    <div className="name-add-item">Thu phí ghi danh xếp lớp</div>
                    <div className="id-add-item">01_GD</div>
                  </div>
                </div>    
                <div className="table-heading-add-item-list bg-grey">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">2</div>
                    <div className="name-add-item">Thu phí nhập học</div>
                    <div className="id-add-item">02_NH</div>
                  </div>
                </div>
                <div className="table-heading-add-item-list">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">1</div>
                    <div className="name-add-item">Thu phí ghi danh xếp lớp</div>
                    <div className="id-add-item">01_GD</div>
                  </div>
                </div>    
                <div className="table-heading-add-item-list bg-grey">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">2</div>
                    <div className="name-add-item">Thu phí nhập học</div>
                    <div className="id-add-item">02_NH</div>
                  </div>
                </div><div className="table-heading-add-item-list">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">1</div>
                    <div className="name-add-item">Thu phí ghi danh xếp lớp</div>
                    <div className="id-add-item">01_GD</div>
                  </div>
                </div>    
                <div className="table-heading-add-item-list bg-grey">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">2</div>
                    <div className="name-add-item">Thu phí nhập học</div>
                    <div className="id-add-item">02_NH</div>
                  </div>
                </div><div className="table-heading-add-item-list">
                  <div className="list-add-item-product">
                    <div className="checkbox-add-item">
                      <input type="checkbox"/>
                    </div>
                    <div className="stt-add-item">1</div>
                    <div className="name-add-item">Thu phí ghi danh xếp lớp</div>
                    <div className="id-add-item">01_GD</div>
                  </div>
                </div>
                <div className="ServiceDropdownsSearch">
                  <div className="ServiceDropdownsItem1">
                    <div className="ServiceDropdownsSearchFirst">
                      <div className="ServiceDropdownSearchFirstName">
                        Ngày bất đầu:
                      </div>
                      <div className="ServiceDropdowns_1">
                        <DatePicker 
                          selected={startDate}
                          onChange={(date) => setStartDate(date)} 
                        />
                      <div className="ServiceDropdownSearchFirstName-2">
                        Ngày kết thúc:
                      </div>
                      <div className="ServiceDropdowns_1">
                        <DatePicker 
                          selected={endDate}
                          onChange={(date) => setEndDate(date)} 
                        />
                        </div>
                      </div>
                      </div>         
                    </div>
                  </div>
                </div>
                <Link to={'/details'}>
                <button className="btn-cancel-add" onClick={() => setIsOpen(false)}>Huỷ</button>
                </Link>             
                <button className="btn-save-add" onClick={() => setIsOpen(false)}>Lưu</button>
              </div>

          </div>
      )}
  </div>
  );
}
