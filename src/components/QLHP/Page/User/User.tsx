import React from 'react'
import { Link } from 'react-router-dom'
import user from "../imguser/user.png"
export default function User() {
    return (
        <div>
            <div className="user-account">
                <img src={user} className="img-user" />
                <p className="user-name">Thị Tuyết</p>
                <Link className="user-logout" to={'/'}>Đăng xuất</Link>
            </div>
        </div>
    )
}