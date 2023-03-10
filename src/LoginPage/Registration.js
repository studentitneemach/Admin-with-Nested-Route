import React, { useState } from "react";
import { Fade } from "react-reveal";
import { useHistory  } from "react-router-dom";
import { useAddUserDataMutation } from "../Store/apiSlice";
import './Registration.css';

export const Registration = () => {
    const [registerData, setRegisterData] = useState({});
    const [addUserData ,{isLoading}] = useAddUserDataMutation();

    const history = useHistory();

    const ChangeHandler = (e) => {
        const names = e.target.name;
        const values = e.target.value;
        setRegisterData(data => ({
            ...data, [names]: values
        }))
    }

    const SubmitHandler = async(e) => {
        e.preventDefault();
        await addUserData(registerData)
        history.push('/deshbord')
    }
    return (
        <Fade>
            <div className="container" style={{marginTop:'100px'}}>
                <div className="title">Registration</div>
                <div className="content">
                    <form onSubmit={SubmitHandler}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" name="fullName" value={registerData.fullName || ""} onChange={ChangeHandler}  required />
                            </div>
                            <div className="input-box">
                                <span className="details">User Name</span>
                                <input type="text" placeholder="Enter your username" name="userName" value={registerData.userName || ""} onChange={ChangeHandler}  required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" name="email" value={registerData.email || ""} onChange={ChangeHandler}  required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" name="phoneNumber" value={registerData.phoneNumber || ""} minLength="10" maxLength="10" onChange={ChangeHandler}  required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" name="password" value={registerData.password || ""}  onChange={ChangeHandler} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" placeholder="Confirm your password" name="confirmPassword" value={registerData.confirmPassword || ""} onChange={ChangeHandler}  required />
                            </div>
                        </div>

                        <div className="button">
                            <input type="submit" value="Registration" disabled={isLoading} />
                        </div>
                    </form>
                </div>
            </div>
        </Fade>
    )
}