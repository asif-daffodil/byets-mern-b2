
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset(); 
    };

    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login to your account" />
            </Helmet>
            <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="max-w-[480px] w-full">
                    <Link to="/"><img
                        src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 mb-8 mx-auto block" />
                    </Link>
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
                        <form className="mt-12 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                                <div className="relative flex items-center">
                                    <input {...register("username", {
                                        required: "User name is required",
                                        minLength: {
                                            value: 3,
                                            message: "User name must be at least 3 characters"
                                        }
                                    })} type="text" className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={showPassword ? "#000" : "#bbb"}
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4 cursor-pointer"
                                        viewBox="0 0 128 128"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/" className="text-blue-600 hover:underline font-semibold">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div className="!mt-12">
                                <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Sign in
                                </button>
                            </div>
                            <p className="text-slate-900 text-sm !mt-6 text-center">Don&apos;t have an account? <Link to="/" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;