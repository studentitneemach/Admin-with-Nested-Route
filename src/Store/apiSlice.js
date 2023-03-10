import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const UserDataApi = createApi({
    reducerPath: 'userData',
    tagTypes: ['userData'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => ({
                url: '/userData',
                method:'GET'
            }),
            providesTags:['userData']
        }),
        getUserDataById: builder.query({
            query: (id) => ({
                url: `/userData/${id}`,
                method: 'GET'
            }),
            providesTags: ['userData']
        }),
        addUserData: builder.mutation({
            query: ({email,password,confirmPassword,fullName,phoneNumber,userName}) => ({
                url: '/userData',
                method: 'POST',
                body: { email, password, confirmPassword, fullName, phoneNumber,userName }
            }),
            invalidatesTags:['userData']
        }),
        updateUserData: builder.mutation({
            query: ({id ,email, password, confirmPassword, fullName, phoneNumber,userName }) => ({
                url: `/userData/${id}`,
                method: 'PUT',
                body: { email, password, confirmPassword, fullName, phoneNumber ,userName }
            }),
            invalidatesTags: ['userData']
        }),
        deleteUserData: builder.mutation({
            query: (id) =>  ({
                url: `/userData/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['userData']
        }),
        adminAddData:builder.mutation({
            query:({email,password ,key})=>({
                url:'/adminData',
                method:"POST",
                body:{email,password,key}
            }),
            invalidatesTags:['userData']
        }),
        adminGetData:builder.query({
            query:()=>({
                url:'/adminData',
                method:"GET",
            }),
            providesTags:['userData']
        }),
        
    })
})
 const initialState={
    userToken:[]
 }
export  const TokenSlice = createSlice({
    name:'tokenSlice',
    initialState,
    reducers:{
        addToken(state,action){
            state.userToken = action.payload
        // console.log(state.userToken)
        },
        removeToke(state,action){
            state.userToken = action.payload 
        }
    }
})

export const { useGetUserDataQuery,useAddUserDataMutation, useGetUserDataByIdQuery , useUpdateUserDataMutation , useDeleteUserDataMutation
,useAdminAddDataMutation ,useAdminGetDataQuery } = UserDataApi;
export const {addToken ,removeToke} = TokenSlice.actions