import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provides/AuthProvider';

const Navbar = () => {
    const { user, loggedOut } = useContext(AuthContext);
    console.log(user);
    const handleLoggedOut = () => {
        loggedOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="bg-base-300">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown md:hidden">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu gap-5 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "text-orange-400" : ""
                                } to={`/`}>Home</NavLink>

                                <NavLink className={({ isActive }) =>
                                    isActive ? "text-orange-400" : ""
                                } to={`/blog`}>Blog</NavLink>

                                <NavLink className={({ isActive }) =>
                                    isActive ? "text-orange-400" : ""
                                } to={`/login`}>Login</NavLink>

                                <NavLink className={({ isActive }) =>
                                    isActive ? "text-orange-400" : ""
                                } to={`/register`}>Register</NavLink>

                                <div className="navbar-end">
                                    {
                                        user ? <div className='flex gap-6 items-center'>
                                            <img src={user.photoURL} alt="" className='rounded-full bg-slate-500 w-14 h-14' />
                                            <button onClick={handleLoggedOut} className='btn btn-primary'>Log Out</button>
                                        </div> : <button className='btn btn-primary'><Link to={`/login`}>Login</Link></button>
                                    }
                                </div>
                            </ul>
                        </div>
                        <Link to={`/`} className="btn btn-ghost normal-case text-xl">Foxeresto</Link>
                    </div>
                    <div className="navbar-center hidden md:block lg:flex">
                        <ul className="menu gap-6 menu-horizontal px-1">
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-orange-400" : ""
                            } to={`/`}>Home</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-orange-400" : ""
                            } to={`/blog`}>Blog</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-orange-400" : ""
                            } to={`/login`}>Login</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-orange-400" : ""
                            } to={`/register`}>Register</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='hidden md:block'>
                            {
                                user ? <div className='flex gap-6 items-center'>
                                    <div className='group'>
                                        <img title={user.displayName} src={user.photoURL} alt="" className='rounded-full bg-slate-500 w-14 h-14' />
                                    </div>
                                    <button onClick={handleLoggedOut} className='btn btn-primary'>Log Out</button>
                                </div> : <button className='btn btn-primary'><Link to={`/login`}>Login</Link></button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;