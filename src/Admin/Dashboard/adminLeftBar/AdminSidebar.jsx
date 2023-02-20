import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div><div className="sidebar">
            <div className="logo-details">
                <img classNameName="profile-details" src="Images/user.jpg" alt="" />
                <span classNameName="logo_name">Admin</span>
            </div>
            <ul classNameName="nav-links">
                {/* <li>
                    <NavLink classNameName="links_name" to="/Dashboard">Dashboard</NavLink>
                </li> */}
                <li>
                    <NavLink classNameName="links_name" to="/All_Order">All Order</NavLink>
                </li>
                <li>
                    <NavLink classNameName="links_name" to="/Upload">Upload</NavLink>
                </li>
                <li>
                    <NavLink classNameName="links_name" to="/">Logout</NavLink>
                </li>
            </ul>
        </div></div>
    )
}

export default AdminSidebar