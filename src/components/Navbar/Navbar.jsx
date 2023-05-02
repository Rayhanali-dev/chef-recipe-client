import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (
        <div>
            <div className="bg-base-300">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Foxeresto</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-6 menu-horizontal px-1">
                            <Link to={`/`}>Home</Link>
                            <Link to={`/blog`}>Blog</Link>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={`/login`}>Login</Link>
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Navbar;