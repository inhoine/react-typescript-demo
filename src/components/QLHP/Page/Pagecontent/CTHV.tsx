import React from 'react'
import CTHVien from '../CTHV/CTHVien'
import User from '../User/User'

export default function CTHV() {
  return (
    <div className="content">
    <User />
    <CTHV />
    <CTHVien />
  </div>
  )
}
