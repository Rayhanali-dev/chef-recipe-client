import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provides/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user, loggedOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false)
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
                <div className='max-w-7xl mx-auto'>
                    <div className="flex md:hidden py-3 justify-between items-center px-5">
                        <Link to={`/`} className="btn btn-ghost normal-case text-xl">Foxeresto</Link>
                        <div onClick={() => setOpen(!open)}>
                            {
                                open ? <XMarkIcon className='w-6 h-6 text-black'></XMarkIcon> : <Bars3Icon className='w-6 h-6 text-black'></Bars3Icon>
                            }
                            {
                                open && <div>
                                    <div className='flex flex-col absolute top-[72px] p-7 text-white right-0 z-10 bg-slate-700 w-56 gap-6'>
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
                            }
                        </div>
                    </div>
                    <div className='md:flex justify-between py-3 hidden items-center'>
                        <div>
                            <Link to={`/`} className="btn btn-ghost normal-case text-xl">Foxeresto</Link>
                        </div>
                        <div className='flex gap-6'>
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
                        </div>
                        <div>
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
                    {/* <div className="navbar-center hidden md:block lg:flex">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;