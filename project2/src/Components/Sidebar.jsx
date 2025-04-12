import { Link } from 'react-router-dom';
import React from 'react'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
              </li>
            <li>
              <Link to='/events'>Events</Link>
              </li>
            <li> 
              <Link to='/contacts'>Contacts</Link>
              </li>



        </ul>
        <div className='btn2'>
            <button> Log Out</button>
        </div>
    </div>
  );
}
export default Sidebar
