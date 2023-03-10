import React, { useState } from "react";
import "./DeshBord.css";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { HiBars3 } from 'react-icons/hi2';
import { RouterPage } from "./RouterPage";
import { NavLink, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { UserTable } from "../UserDataTable/UserTable";
import { UpdateUserData } from "../UserDataTable/UpdateTable";
import { UserDataGetById } from "../UserDataTable/UserDataGetById";
import { Fade } from "react-reveal";
import { AdminProfile } from "../AdminProfile/AdminProfile";
import { useDispatch } from "react-redux";
import { removeToke } from "../Store/apiSlice";
export const Deshbord = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const { path,url } = useRouteMatch()
    const [open, setOpen] = useState(false)
    const SecondPage = <h1>Second Page</h1>;

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {

        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    const history = useHistory()
    const dispatch = useDispatch()
    const DeleteAllRoute=()=>{
        
        dispatch(removeToke('token remove'))
        localStorage.removeItem('admin')
        history.push('/')
    }

     
     return (

        <div>
            <div id="page-top">


                <div id="wrapper">


                    <ul className={style} id="accordionSidebar">


                        <RouterPage />

                        <hr className="sidebar-divider d-none d-md-block" />


                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}><MdKeyboardArrowLeft size={30} color={"#d1d1d5"} /></button>
                        </div>



                    </ul>

                    <div id="content-wrapper" className="d-flex flex-column">


                        <div id="content">


                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"><HiBars3 size={30} /></i>
                                </button>

                                <div><h4>Admin Page</h4></div>


                                <ul className="navbar-nav ml-auto">



                                    <div className="topbar-divider d-none d-sm-block" ></div>


                                    <li className="nav-item dropdown no-arrow" >
                                        <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
                                            data-toggle="dropdown" >
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small" ></span>
                                            <img onClick={() => setOpen(!open)} className="img-profile rounded-circle"
                                                src="https://imgs.search.brave.com/xIm0c-Q6dGHOKA8lWvcO3quaNwBu4FLF9jGUa3wlfYA/rs:fit:900:1200:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL21l/ZGlhL0ZaYU9nQ0JW/VUFjTnJqaC5qcGc"
                                                alt="user" />
                                        </a>
                                        {open && <div className='flex flex-col imageDropdown ' >
                                          <Fade left><div className={`flex flex-col gap-4  ${ open? 'active' : 'inactive'}`}>
                                                <ul  onClick={() => setOpen(!open)}>
                                                    <li><NavLink to={`${url}/adminprofile`}>Profile</NavLink></li>
                                                    <li><NavLink to='/'>About</NavLink></li>
                                                    <li><NavLink to='/'>Help</NavLink></li>
                                                    <li onClick={DeleteAllRoute}><NavLink to=''>LogOut</NavLink></li>
                                                </ul>
                                            </div></Fade> 
                                        </div>}


                                    </li>
                                </ul>

                            </nav>

                            <div className="container-fluid">


                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                </div>


                                <div className="row">

                                    <Switch>
                                        <Route >
                                            <Route path={`${path}`} exact={true}><UserTable /></Route>
                                            <Route path={`${path}/user`} >{SecondPage}</Route>
                                            <Route path={`${path}/updateuser/:id`} component={UpdateUserData} />

                                            <Route path={`${path}/getuserbyid/:id`} component={UserDataGetById} />
                                            <Route path={`${path}/adminprofile`} component={AdminProfile}/>
                                        </Route>
                                    </Switch>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}