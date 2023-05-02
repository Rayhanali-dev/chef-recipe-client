import React from 'react';
import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div className='h-[600px] relative'>
                    <img className='w-full h-full object-cover' src={banner} alt="" />
                    <div className='absolute top-0 flex items-center justify-center flex-col left-0 w-full h-full backdrop-brightness-50'>
                        <div className='text-center'>
                            <h3 className='text-7xl mb-4 text-white'>Welcome To Foxeresto</h3>
                            <p className='text-2xl text-white'>Come with family & feel the joy of mouthwatering food</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;