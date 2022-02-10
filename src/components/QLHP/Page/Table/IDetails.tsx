import React from 'react';
import down from "../imguser/down.png";
import "../Table/TableList.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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
                                <p className='details-class-name'>KT_19A</p>
                                <h3 className='details-class-gr'>Hệ đào tạo:</h3>
                                <p className='details-class-name'>Đào tạo theo tín chỉ</p>                     
                            </div>  
                            <div className='table-select-details'>
                                <h3 className='details-class'>Khoa:</h3>
                                <p className='details-class-name'>Kế toán - Kiểm toán</p>
                                <h3 className='details-class-gr'>Chương trình học:</h3>
                                <p className='details-class-name'>Đại trà</p>                     
                            </div> 
                            <div className='table-select-details'>
                                <h3 className='details-class'>Ngành:</h3>
                                <p className='details-class-name'>Kế toán</p>
                                <h3 className='details-class-gr'>Niên khoá:</h3>
                                <p className='details-class-name'>2019-2022</p>                     
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
