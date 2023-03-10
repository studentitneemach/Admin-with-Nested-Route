import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { addToken, useAdminGetDataQuery } from "../Store/apiSlice";
import './Registration.css';

export const LoginPage = () => {

    const [loginData, setLoginData] = useState({});
    const{data:adminData } = useAdminGetDataQuery()
    const history = useHistory();
const dispatch = useDispatch()

    const ChangeHandler = (e) => {
        const names = e.target.name;
        const values = e.target.value;
       
        setLoginData(data => ({
            ...data, [names]: values
        }))
    }
    const Authenticetion=()=>{
        localStorage.setItem('admin','authenticate/login/logout/redirect-users-after-logout')
        dispatch(addToken(localStorage.getItem('admin')))
        history.push('/deshbord')
        }
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(loginData)
        Authenticetion();
    }

    return (
        
        
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="title">Login</div>
                <div className="content">
                    <form onSubmit={SubmitHandler}>
                        <div className="user-details">
                            
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" name="email" value={loginData.email || ""} onChange={ChangeHandler} required />
                            </div>
                         
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" placeholder="Enter your password" name="password" value={loginData.password || ""} onChange={ChangeHandler} required />
                            </div>
                            {/* <div className="input-box">
                                <span className="details">Key</span>
                                <input type="password" placeholder="Enter your Key" name="key" value={loginData.key || ""} onChange={ChangeHandler} required />
                            </div> */}
                       
                        </div>

                        <div className="button">
                            <input type="submit" value="Login"  />
                        </div>
                    </form>
                </div>
            </div>
      
   )
}
