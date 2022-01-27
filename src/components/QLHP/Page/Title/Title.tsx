import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function Title() {
  return (
    <div>
        <div className="content-address">
        <p className="content-previous">Quản lý học phí</p>
        <i className="content-icon">{<FaChevronRight />}</i>
        <h1 className="content-present">Danh sách lớp học</h1>
      </div>
    </div>
  );
}
