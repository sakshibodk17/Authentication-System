import { useNavigate } from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Create Your Account</h1>
                <p className="text-gray-600 text-center mb-6">Join us today! Fill in your details below.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold">First Name</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Last Name</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Email Address</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold">Password</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Confirm Password</label>
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                    </div>
                    <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-600 text-center mt-4">Already have an account? <span onClick={() => navigate('/Login')} className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">Login here</span></p>
            </div>
        </div>
    );
}
