import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {


    return (
        <div className="navbar px-32 border-b-2">
            <div className="flex-1">
                <Link to='/' className="text-2xl font-semibold flex gap-2 items-center">
                    <img className='w-10' src={logo} alt="" />
                    SoloSphere</Link>
            </div>
            <div className="flex-none gap-5">
                <ul className='flex gap-5'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink>All Jobs</NavLink></li>
                </ul>
                <Link className='btn btn-neutral' to='/signIn'>SignIn</Link>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;