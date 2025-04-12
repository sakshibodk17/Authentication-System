export default function Resetpass() {
    const handleSubmit= (data)=>{
        console.log(data);
    }
    return(
        <>
         <div className=" p-4 min-h-screen bg-gray  flex items-center justify-center gap-4 ">
            <form
                className="border border-red-500 p-2  "

                onSubmit={handleSubmit()}>
                    <h2 className="text-gray-950 ml-10 text-4xl" >Reset Your Password?</h2>
                <label
                    className="text-sm text-black ">New Password</label>
                <input
                    className="m-2 p-1 border border-gray-700 w-full h-auto"
                    type="password"
                    name="password"
                    placeholder="Enter New Password"
                    />

                <label
                    className="text-sm text-black ">Confirm Password</label>
                <input
                    className="m-2 p-1 border border-gray-700 w-full h-auto"
                    type="password"
                    name="password"
                    placeholder="Re-enter Password"
                    />
                    
                <button
                className="m-1  w-full h-auto cursor-pointer bg-blue-500 p-2 rounded-[6px] text-white"
                type="submit">Reset Password</button>

                
 </form>
        </div>
    </>)
}
