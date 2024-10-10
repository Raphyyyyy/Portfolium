import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileBox from './ProfileBox'
import '../styles/Profile.css'

function Profile() {
  return (
    <div className='profile-pai' id='profile'>
      <div className="sobreMim"><h1>SOBRE MIM</h1></div>
      <div className="ProfileDiv">
      <ProfileBox/>
      </div>
    </div>
  )
}

export default Profile
