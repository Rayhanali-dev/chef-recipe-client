import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 py-8 sm:py-12 lg:py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className='text-white'>
                            <h3 className="text-white mb-3 font-medium">Foxeresto</h3>
                            <p>Monday - Friday: 9am - 10pm</p>
                            <p>Saturday - Sunday: 10am - 11pm</p>
                        </div>
                        <div className='text-white'>
                            <h3 className="text-white mb-3 font-medium">Menu Links</h3>
                            <Link className='block mb-2' to={`/`}>Home</Link>
                            <Link className='block mb-2' to={`/`}>About</Link>
                            <Link className='block mb-2' to={`/`}>Offer</Link>
                            <Link className='block mb-2' to={`/`}>Gallery</Link>
                        </div>
                        <div className='text-white'>
                            <h3 className="text-white mb-3 font-medium">Support</h3>
                            <Link className='block mb-2' to={`/`}>Privacy Policy</Link>
                            <Link className='block mb-2' to={`/`}>Terms & condition</Link>
                            <Link className='block mb-2' to={`/`}>Order & pre order</Link>
                            <Link className='block mb-2' to={`/`}>order cancellation</Link>
                        </div>
                        <div className='text-white'>
                            <h3 className="text-white mb-3 font-medium">Contact Us</h3>
                            <div className='flex gap-6'>
                                <FaFacebook className='w-8 h-8'></FaFacebook>
                                <FaTwitter className='w-8 h-8'></FaTwitter>
                                <FaInstagram className='w-8 h-8'></FaInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;