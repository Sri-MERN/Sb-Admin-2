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
function App() {
  return <>
<BrowserRouter>
<div id="wrapper">
  <Sidebar/>
  <Routes>
  <Route path="/Dashboard" element={<Dashboard/>}/>
  <Route path="/AddUser" element={<AddUser/>}/>
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
