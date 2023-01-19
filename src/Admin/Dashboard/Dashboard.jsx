import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import './Dashboard.css'
import ViewData from './viewData/ViewData'

const Dashboard = () => {
    return (   
        <div>
            <AdminSidebar/>
            <ViewData/>
        </div>
    )
}

export default Dashboard