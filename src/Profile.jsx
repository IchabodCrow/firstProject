import React from 'react';
import Avatar from './Avatar';
import About from './About';



const Profile = () => {
   return (
       <div className='content'>
           <div className={avatar.ava}>
               <Avatar/>
           </div>
           <div className={about.yourself}>
               <About/>
           </div>
       </div>
   )
}
export default Profile;