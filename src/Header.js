import React, { useEffect, useState } from 'react'
import './Header.css';
 function Header() {
//   const[show,setShow]=useState(false);
//   useEffect(()=>{
// window.addEventListener("scroll",()=>{
//   if(window.scrollY>100){
//     setShow(true)
//   }
//   else{
//     setShow(false)
//   }
// })
// return ()=>{
//   window.removeEventListener("scroll")
// }
//   },[])
  return (
    <div className="header">
        <img
        src='https://about.netflix.com/images/logo.png'
        className='header_logo'
        alt=''
        />
        <img
        className='header_userIcon'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt=''
        />
    </div>
  )
}
export default Header;
