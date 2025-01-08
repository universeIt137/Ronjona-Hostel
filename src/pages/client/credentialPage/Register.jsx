import React, { useState } from "react";
import axios from "axios"; // Import axios to make API requests
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        role: "user" // Default role
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        const confirmPassword = e.target.confirmPassword.value;
        if (formData.password !== confirmPassword) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Password not matched",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        };

        try {
            const response = await axiosPublic.post("/createAdmin", formData); // Adjust your API URL
            console.log(response.data);
            setLoading(false);
            if (response) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register success. Contact admin.",
                    showConfirmButton: false,
                    timer: 1500
                });

                // Reset form data after successful registration
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    password: "",
                    role: "user" // Default role
                });

                e.target.reset();
            }
        } catch (error) {
            setLoading(false);
            setError("Failed to register. Please try again.");
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>

                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium" htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        {/* confirm password */}
                        <div className="space-y-2 relative">
                            <label htmlFor="confirmPassword" className="block text-sm text-gray-600">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type={showPassword1 ? 'text' : 'password'}
                                placeholder="Enter your confirm password"
                                name='confirmPassword'
                                className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                                required
                            />
                            <span
                                onClick={() => setShowPassword1(!showPassword1)}
                                className="absolute top-[40%] text-xl right-3 text-gray-600 cursor-pointer"
                            >
                                {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/admin-login" className="text-blue-500">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
