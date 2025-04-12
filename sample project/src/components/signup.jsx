export default function Registration(){
    const handleSubmit=(data)=>{
        console.log(data);
    }
    return(<>
    <div className="p-1 m-1  bg-white flex items-center justify-center w-500px h-auto">
        <form className="border border-gray-800 p-2 w-400px"
        onSubmit={handleSubmit}>
            <h1 className="text-gray-650 ml-200 text-7xl flex items-center ">Registration</h1>
            <label className="text-4xl text-gray-800 ">First Name</label>
            <input className="m-2 p-2 border border-b-blue-700 w-full h-auto"
            type="text"
            name="text"
            placeholder="Enter the First Name"/>

       <label className="text-4xl text-gray-800">Last Name</label>
            <input className="m-2 p-2 border border-blue-700 w-full h-auto"
            type="text"
            name="text"
            placeholder="Enter the Last Name"/>

         <label className="text-4xl text-gray-800">Email Id</label>
            <input className="m-2 p-2 border border-b-blue-700 w-full h-auto"
            type="email"
            name="email"
            placeholder="Enter your email id"/>


           <label className="text-4xl text-gray-800">Password</label>
            <input className="m-2 p-2 border border-b-blue-700 w-full h-auto"
            type="password"
            name="password"
            placeholder="Enter the Password"/>

         <label className="text-4xl text-gray-800">Confirm Password</label>
            <input className="m-2 p-2 border border-blue-700 w-full h-auto"
            type="text"
            name="text"
            placeholder="Re-enter the Password"/>
            
         <button className="m-2 w-full h-auto cursor-pointer bg-blue-900 p-2 rounded-[6px] text-white text-5xl"
         type="submit">Sign Up</button>
        </form>
    </div>
    </>)
} 