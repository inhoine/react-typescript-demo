
import { Link } from "react-router-dom";
import "../Details/Details.css";
import ic_button from "../imguser/icon_button.png";



export default function IDetails() {
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
                          <Link className="list_student" to={'/'}> 
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
                            <Link className="add-item-details" to={'/'}> 
                            <button className="btn-add-item">+ Thêm biểu phí</button>
                          </Link>
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
  </div>
  );
}
