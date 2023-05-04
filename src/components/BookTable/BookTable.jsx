import React from 'react';
import { Link } from 'react-router-dom';

const BookTable = () => {
    return (
        <div className='bg-slate-600 py-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between'>
                    <h3 className='text-white text-5xl font-bold'>Book Your Table Today. <span className='text-slate-800'>Book Now!</span></h3>
                    <Link className='block'>
                        <button className='btn btn-outline btn-warning'>
                            Book Table
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookTable;