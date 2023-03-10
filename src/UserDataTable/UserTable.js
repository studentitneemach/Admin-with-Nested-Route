import React from "react";
import './UserTable.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BiExpandAlt } from 'react-icons/bi'
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDeleteUserDataMutation, useGetUserDataQuery } from "../Store/apiSlice";

export const UserTable =( ) => {
  const {data:UserData ,isLoading,isError,isSuccess} = useGetUserDataQuery()
  const [deleteUserData] = useDeleteUserDataMutation()
  const { path } = useRouteMatch()
  const history = useHistory();

  let Content;
  if(isLoading) Content= <h2>Loading........</h2>
  else if (isSuccess) {
    return Content =  UserData?.length === 0 ? <h2>User Not Here</h2> : <div className="container p-30">
      <div className="row">
        <div className="col-md-12 main-datatable">
          <div className="card_body">
         
            <div className="overflow-x">
              <table style={{width:"100%"} } id="filtertable" className="table cust-datatable dataTable no-footer">
                <thead>
                  <tr>
                    <th style={{minWidth:"50px"}}>ID</th>
                    <th style={{minWidth:"150px"}}>Name</th>
                    <th style={{minWidth:"150px"}}>Mode</th>
                    <th style={{minWidth:"100px"}}>Email</th>
                    <th style={{minWidth:"100px"}}>Date</th>
                    <th style={{minWidth:"150px"}}>Status</th>
                    <th style={{minWidth:"150px"}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    UserData.map((user,index)=><tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td><span className="mode mode_process">Processing</span></td>
                    <td>{user.email}</td>
                    <td>17-Apr-2020</td>
                    <td><span className="mode mode_on">Active</span></td>
                    <td>
                      <div className="btn-group">
                        <i className="fa fa-pencil-square-o" ><AiOutlineEdit size={25} style={{marginRight:'15px'}} onClick={()=>history.push(`${path}/updateuser/${user.id}`)}  /></i>
                        <i className="fa fa-pencil-square-o" ><BiExpandAlt size={25} style={{ marginRight: '15px' }} onClick={() => history.push(`${path}/getuserbyid/${user.id}`)}  /></i>
                        <i className="fa fa-pencil-square-o" ><AiOutlineDelete size={25} style={{marginRight:'15px'}} onClick={()=>deleteUserData(user.id)}  /></i>
                        
                      </div>
                    </td>
                  </tr>
                    )
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  else if(isError){
    console.log(isError)
    return  Content = <h3>Some Error</h3>}
    return Content;
}