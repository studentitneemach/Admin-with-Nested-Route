import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter , Route, Switch  } from 'react-router-dom';
import './App.css';
import { LoginPage } from './LoginPage/LoginPage';
import { Registration } from './LoginPage/Registration';
import { Deshbord } from './New DeshBord/Deshbord';







function App() {
  const [token,setToken] = useState(false);
  const auth = useSelector(state => state.tokenSlice.userToken)
  useEffect(()=>{
   if(  localStorage.getItem("admin")!== null){

    setToken(true)
   }else setToken(false)
  },[auth])


if(!token){
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact  ><LoginPage /></Route>    
    <Route path="/registration" ><Registration /></Route>
    </Switch>
  </BrowserRouter>
  );
} else{
  return (

       <BrowserRouter>
       <Suspense>
       <Switch>
   <Route path="/" exact><h1>Router Page</h1></Route>
       <Route path="/deshbord"  > 
         <Deshbord  />
       </Route>      
   
       </Switch></Suspense>
     </BrowserRouter>
  );
}

}

export default App;

