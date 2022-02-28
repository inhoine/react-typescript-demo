
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Details/Details.css";
import ic_button from "../imguser/icon_button.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default function IDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
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
                                        <Link className="homepg" to={'/detail'}> 
                                            <a href=""> <img src={ic_button} className="tariff_link"/></a>
                                        </Link>
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
                                        <Link className="homepg" to={'/detail'}> 
                                            <a href=""> <img src={ic_button} className="tariff_link"/></a>
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
                <button className="btn-cancel-add">Huỷ</button>
                </Link>
                
                <button className="btn-save-add">Lưu</button>

              </div>
          </div>
      )}
  </div>
  );
}
