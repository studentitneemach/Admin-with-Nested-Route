import React from "react";
import { BsEmojiLaughing } from 'react-icons/bs';
import {  BiLogOut } from 'react-icons/bi'
import { AiOutlineTable, AiOutlineBarChart } from 'react-icons/ai'
import { NavLink, useRouteMatch } from "react-router-dom";
export const RouterPage = () => {
    
    const { url } = useRouteMatch();

    return (
        <div><a className="sidebar-brand d-flex align-items-center justify-content-center" >
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"><BsEmojiLaughing /></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>

        </a>


            <hr className="sidebar-divider my-0" />

       
            <li className="nav-item active">
                <a className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
            </li>

   
            <hr className="sidebar-divider" />

     
            <div className="sidebar-heading">
                Interface
            </div>

   
            <li className="nav-item">
                <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
            </li>

       
            <li className="nav-item">
                <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
               
            </li>

          
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>
       
            <li className="nav-item" style={{ cursor: "pointer" }}>
                <NavLink className="nav-link" to={`${url}`}>
                   <i className="fas fa-fw fa-table"><AiOutlineTable size={30} color={"#d1d1d5"} /></i>
                    <span>Tables</span></NavLink>
            </li>

            {/* <li className="nav-item" style={{ cursor: "pointer" }}>
                <NavLink className="nav-link" to={`${url}/updateuser/:id`}>
                    <i className="fas fa-fw fa-table"></i>
                    <span>Update Page</span></NavLink>
            </li>
      
            <li className="nav-item" style={{ cursor: "pointer" }}>
                <NavLink className="nav-link" to={`${url}/getuserbyid/:id`}>
                  <i className="fas fa-fw fa-chart-area"> </i>
                    <span>User Get byId</span>
                </NavLink>
            </li> */}

            <li className="nav-item" style={{ cursor: "pointer" }}>
                <NavLink className="nav-link" to={`/`} >
                   
                    <i className="fas fa-fw fa-table"><BiLogOut size={30} color={"#d1d1d5"} /></i>
                    <span>LogOut</span>
                </NavLink>
            </li>

           
            <li className="nav-item" style={{ cursor: "pointer" }}>
            
                    <NavLink className="nav-link" to={`${url}/user`} > <i className="fas fa-fw fa-chart-area"> <AiOutlineBarChart size={30} color={"#d1d1d5"} /></i>
                    <span>Charts</span></NavLink>   
            </li>

</div>
    )
}