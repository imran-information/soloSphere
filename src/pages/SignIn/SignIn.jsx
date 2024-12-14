import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content gap-0 flex-col lg:flex-row-reverse ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <img src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393" alt="" />
                    </div>
                    <div className="card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-5'>Don’t you have an account? <Link className='text-blue-600' to='/signUp'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;