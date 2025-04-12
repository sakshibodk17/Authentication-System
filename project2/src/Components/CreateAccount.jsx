import react, { useState } from 'react'
import usericon from '../assets/usericon.png'
import emailicon from '../assets/emailicon.png'
import passwordicon from '../assets/passwordicon.png'
import './createacc.css'
function CreateAccount(){
    const[username, setUsername]= useState(" ");
    const[email, setEmail]= useState(" ");
    const[password,setPassword]= useState(" ")

    function handlesignup(){
        console.log("username is", username);
        console.log("email is:", email);
        console.log("password is:", password);
    }
    return(
        <>
        <div className='container1'>
            <h1> Create Account</h1>
            <div className='usercont'>
            <img src={usericon} width={40} height={24} margin-right={10} alt=''/>
            <input type='text' placeholder='username' value={username}  onChange={(e)=>setUsername(e.target.value)} ></input>
            </div>

            <div className='emailcont'>
            <img src={emailicon} width={40} height={24} margin-right={10} alt=''/>
            <input type='email' placeholder='email'  value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            </div>
            
            <div className='pass'>
            <img src={passwordicon}  width={40} height={24} margin-right={10} alt=''/>
            <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            </div>
            
            
            <div className='btn'>
                <button  onClick={handlesignup} >Create Account</button>
            </div>
          
        </div>
       
        </>

    );
}
export default CreateAccount