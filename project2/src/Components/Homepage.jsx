import { Link } from 'react-router-dom';
import React,{useState} from 'react'
import usericon from '../assets/usericon.png'
import emailicon from '../assets/emailicon.png'
import passwordicon from '../assets/passwordicon.png'
import './Homepage.css'


function Homepage(){
    const[username, setUsername]=useState('');
    const[password, setPassword]= useState(' ');

function handlesignin(){
    console.log("Username is: ",username);
    console.log("Password is: ", password);
};
    return(
        <>
        <div className='container'>
            <h1> Sign In</h1>
            <div className='usercont'>
            <img src={usericon} width={40} height={24} margin-right={10} alt=''/>
            <input type='text' placeholder='username' value={username} onChange={(e) =>setUsername(e.target.value)}></input>
            </div>
            
            <div className='pass'>
            <img src={passwordicon} width={40} height={24} margin-right={10} alt=''/>
            <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)}></input>
            </div>
            <div className='remeberme'>
                <label>
            <input type='checkbox'></input>Remember me
            </label>
            </div>
            <div className='btn'>
                <button onClick={handlesignin}  >Sign In</button>
            </div>
            <div className='signupcont'>
                <p id='p1'>New here?  </p><Link to='/createaccount' id='a1'>Create an Account</Link>
            </div>
          
        </div>
       
        </>

    );
}
export default Homepage