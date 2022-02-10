import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function Details() {
  return (
    <div>
        <div className="content-address">
        <p className="content-previous">Quản lý học phí</p>
        <i className="content-icon">{<FaChevronRight />}</i>
        <p className="content-previous">Danh sách lớp học</p>
        <i className="content-icon">{<FaChevronRight />}</i>
        <h1 className="content-present">Chi tiết lớp học</h1>
      </div>
    </div>
  );
}
