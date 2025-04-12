export default function Forgotpass() {
    const handleSubmit = (data) => {
        console.log(data);
    }

    return (<>
        <div className=" p-4 min-h-screen bg-gray  flex items-center justify-center gap-4 ">
            

            <form
                className="border border-red-500 p-2  "

                onSubmit={handleSubmit()}>
                    <h2 className="text-gray-950 ml-10 text-4xl" >Forgot Password?</h2>
                <label
                    className="text-sm text-black ">Enter your Email</label>


                <input
                    className="m-2 p-1 border border-gray-700 w-full h-auto"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    />


                    
                <button
                className="m-1  w-full h-auto cursor-pointer bg-blue-500 p-2 rounded-[6px] text-white"
                type="submit">Send Link</button>

                
 </form>
        </div>
    </>)
}
