import React from "react";
export default function Login() {
    const handleSubmit = (data) => {
        console.log(data);
    }

    return (<>
        <div className=" p-2 min-h-screen bg-gray  flex items-center justify-center gap-4 ">
            

            <form
             
                className="border border-red-500 p-2  "

                onSubmit={handleSubmit()}>
                    <h2 className="text-gray-950 ml-20 text-4xl">Login</h2>
                <label
                    className="text-sm text-gray-800 ">Email Id</label>


                <input
                    className="m-1 p-1 border border-gray-700 w-full h-auto"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />

                <label className="text-sm text-gray-800 ">Password</label>

                <input
                    className="m-1 p-1 border border-gray-700 w-full h-auto"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />

                <div className="flex justify-between">

                    <div>
                        <input type="checkbox"
                        />
                        <label className="text-sm text-gray-800 m-1 cursor-pointer ">Remember me </label>
                    </div>
                    <button className=" m-1 cursor-pointer text-sm text-gray-800">
                        forgot password?
                    </button>
                </div>
                


                <button
                    className="m-1  w-full h-auto cursor-pointer bg-blue-500 p-2 rounded-[6px] text-white"
                    type="submit">Login</button>




            </form>
        </div>
    </>)
}
