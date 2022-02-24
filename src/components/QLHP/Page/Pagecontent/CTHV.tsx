import React from 'react'
import CTHVien from '../CTHV/CTHVien'
import CTHVTitle from '../Title/CTHVTitle'
import User from '../User/User'

export default function CTHV() {
  return (
    <div className="content">
    <User />
    <CTHVTitle />
    <CTHVien />
  </div>
  )
}
