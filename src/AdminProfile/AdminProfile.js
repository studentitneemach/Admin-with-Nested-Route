import React, { useState } from "react";
import "./AdminProfile.css";
import {MdOutlineDriveFolderUpload} from 'react-icons/md'
export const AdminProfile = () => {
    const [file, setFile] = useState("");
    const [adminprofile,setAdminProfile] = useState({})
    const AdminProfileHandler=(e)=>{

    }
    return (
        <div className="new">

            <div className="newContainer">

                <div className="top">
                    <h1>Profile</h1>
                </div>
                <div className="bottom ">
                    <div className="left">
                        <img
                            // src="https://imgs.search.brave.com/xIm0c-Q6dGHOKA8lWvcO3quaNwBu4FLF9jGUa3wlfYA/rs:fit:900:1200:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL21l/ZGlhL0ZaYU9nQ0JW/VUFjTnJqaC5qcGc"

                            // alt="image"
                            src={
                                file
                                  ? URL.createObjectURL(file)
                                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                              }
                              alt=""
                        />
                    </div>
                    <div className="right">
                    
                        <form>
                        <div className="formInput">
                <label htmlFor="file">
                  Image: <MdOutlineDriveFolderUpload className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
                            {/* <div className="formInput" >
                                <label>Input</label>
                                <input type='text' name="text" value={adminprofile.||""} onChange={AdminProfileHandler} placeholder="" />
                            </div> */}
                            <div className="formInput" >
                                <label>Input</label>
                                <input type='text' name="name" value={adminprofile.name||""} onChange={AdminProfileHandler} placeholder="abcd" />
                            </div>
                            <div className="formInput" >
                                <label>Input</label>
                                <input type='email' name="email" value={adminprofile.email||""} onChange={AdminProfileHandler} placeholder="abcd@gmail.com" />
                            </div>
                            <div className="formInput" >
                                <label>Input</label>
                                <input type='text' name="userName" value={adminprofile.userName||""} onChange={AdminProfileHandler} placeholder="UserName" />
                            </div>
                            <div className="formInput" >
                                <label>Input</label>
                                <input type='number' name="phoneNumber" value={adminprofile.phoneNumber||""} onChange={AdminProfileHandler} placeholder="Phone Number" />
                            </div>
                            <div className="formInput" >
                                <label>Input</label>
                                <input type='password' name="password" value={adminprofile.password||""} onChange={AdminProfileHandler} placeholder="Password" />
                            </div>
                            

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}