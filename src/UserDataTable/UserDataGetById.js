import React from "react";
import { Fade } from "react-reveal";
import { useGetUserDataByIdQuery } from "../Store/apiSlice";
import { UpdateUserData } from "./UpdateTable";
import './UpdateUserData.css';
export const UserDataGetById = ({ match }) => {
    const {data:UserData ,isLoading ,isError,isSuccess} = useGetUserDataByIdQuery(match.params.id)
    let Content;
    if(isLoading)  Content = <h1>Page Loading........</h1>
    else if(isSuccess)  Content= <Fade>
                <UpdateUserData match={match}/>      
            </Fade>
    else if(isError){  
        console.log("isError",isError)
        return Content = <h3>Somethings Error</h3>  
    }

    return Content
}