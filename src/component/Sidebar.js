import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate= useNavigate()
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<div className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active" onClick={()=>navigate('/Dashboard')}>
    <div className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item" onClick={()=>navigate('/AddUser')}>
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-user-plus"></i>
        <span>AddUser</span>
    </div>
</li>


<li className="nav-item" onClick={()=>navigate('/Profile')}>
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-address-card"></i>
        <span>Profile</span>
    </div>
</li>


<li className="nav-item" onClick={()=>navigate('/PendingRequest')}>
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-rotate"></i>
        <span>Pending request</span>
    </div>
</li>

<li className="nav-item" onClick={()=>navigate('/Task')}>
    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-list-check"></i>
        <span>Tasks</span>
    </div>
</li>
</ul>
  </>
}

export default Sidebar