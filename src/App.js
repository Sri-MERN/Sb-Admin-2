//import './App.css';
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dashboard';
import AddUser from './component/AddUser';
import Profile from './component/Profile';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PendingRequest from './component/PendingRequest';
import Task from './component/Task';
import ProfileDetails from './component/ProfileDetails';
import ResetPassword from './component/ResetPassword';
import { useState } from 'react';
function App() {
    let [users,setUsers] = useState([
      {
        name: "Sri",
       email: "sri@gmail.com",
       mobile: "123456789",
       dob: "2001-01-22"
      }, 
       {
        name: "ravan",
       email: "ravan@gmail.com",
       mobile: "987654321",
       dob: "1998-02-10"
       },
        {
          name: "paari",
       email: "paari@gmail.com",
       mobile: "564738291",
       dob: "1999-03-09"
        },
        {
          name: "rajan",
       email: "rajan@gmail.com",
       mobile: "5294582011",
       dob: "2005-06-22"
      }
    ])


  return <>
<BrowserRouter>
<div id="wrapper">
  <Sidebar/>
  <Routes>
  <Route path="/Dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
  <Route path="/Adduser" element={<AddUser users={users} setUsers={setUsers}/>}/>
  <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/> 
  <Route path="/Profile" element={<Profile/>}>
     <Route path='Details' element={<ProfileDetails/>}/>
      <Route path='Reset-Password' element={<ResetPassword/>}/>
      </Route>
  <Route path="/PendingRequest" element={<PendingRequest/>}/>
  <Route path="/Task" element={<Task/>}/>
  <Route path="/*" element={<Navigate to='/Dashboard'/>}/>

  </Routes>
</div>
</BrowserRouter>
</>
  
}

export default App;
