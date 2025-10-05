import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink to="/" className='mx-2 btn btn-outline btn-success'>Home</NavLink>
        <NavLink to="/about" className='mx-2 btn btn-outline btn-success' >About</NavLink>
        <NavLink to="" className='mx-2 btn btn-outline btn-success'>Listed Books</NavLink>
        <NavLink to="" className='mx- btn btn-outline btn-success'>Page to Read</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className="text-xl font-bold">Book Vibe</h2>
            </div> 
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn bg-green-600 hover:bg-green-700 text-white">Sign In</a>
                <a className="btn btn-info text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;