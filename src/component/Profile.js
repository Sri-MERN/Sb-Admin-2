import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return<>
 <div>
<h1>Profile</h1>
<h3>The Sub Component are:</h3> 
<ul>
<Link to='Details'><li>ProfileDetails</li></Link>
<Link to='Reset-password'><li>ResetPassword</li></Link>
</ul>
<Outlet/> 
</div>
  </>
}

export default Profile