import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { useGetUserDataQuery, useUpdateUserDataMutation } from "../Store/apiSlice";
import './UpdateUserData.css';

export const UpdateUserData = ({ match }) => {
    const [updateUser,setUpdateUser] = useState([])
    const [updateUserApi, {isLoading}] = useUpdateUserDataMutation()
    
    const {data} = useGetUserDataQuery(undefined,{
        selectFromResult:({data})=>{

            return ({
                data: data?.find((user)=> user.id === Number(match.params.id))
            })
        }
    })
    
    useEffect(()=>{
        if(isLoading){
            alert('Page is Loading')
        }
    },[isLoading])

  useEffect(()=>{
    if(data){
        setUpdateUser(data)
    }
  },[data])
  const history = useHistory();

  const ChangeHandler = (e) => {
      const names = e.target.name;
      const values = e.target.value;
      setUpdateUser(data => ({
          ...data, [names]: values
      }))
  }

  const SubmitHandler = async(e) => {
      e.preventDefault();
      try{
        await updateUserApi(updateUser)
        history.push('/deshbord')
      }catch(error){
        console.log(error)
      }

  }
    return (
        <Fade>
        <div className="container">
            <div className="title">Edit</div>
            <div className="content">
                <form onSubmit={SubmitHandler}> 
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" name="fullName" value={updateUser.fullName || ''} onChange={ChangeHandler} required />
                        </div>
                        <div className="input-box">
                            <span className="details">User Name</span>
                            <input type="text" placeholder="Enter your username" name="userName" value={updateUser.userName || ''} onChange={ChangeHandler} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" name="email" value={updateUser.email || ''} onChange={ChangeHandler} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" name="phoneNumber" value={updateUser.phoneNumber || ''} onChange={ChangeHandler} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" name="password" value={updateUser.password || ''} onChange={ChangeHandler} required />
                            </div>
                            <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password" name="confirmPassword" value={updateUser.confirmPassword || ''} onChange={ChangeHandler} required />
                        </div>
                    </div>
               
                    <div className="button">
                        <input type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
        </Fade>
    )
}   