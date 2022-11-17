import React from 'react'


const Navbar = () => {
  return (
    <div className='flex flex-template'>
      <div className="logo"><img src='' alt='logo' /></div>
      <span className='bg-blue-500'>TEXT TAILWIND COLOR</span>
      <ul className="navbar-link flex gap-14">
        <li className=''>Home</li>
        <li className=''>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar

// Navbar.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
