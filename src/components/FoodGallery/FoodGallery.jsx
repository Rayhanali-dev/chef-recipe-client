import React from 'react';
import img1 from '../../assets/abhishek-hajare-_3dTLrMwiW8-unsplash.jpg';
import img2 from '../../assets/aigars-peda-a_iKAg00LN4-unsplash.jpg';
import img3 from '../../assets/nik-owens-40OJLYVWeeM-unsplash.jpg';
import img4 from '../../assets/olayinka-babalola-r01ZopTiEV8-unsplash.jpg';
import img5 from '../../assets/sorin-popa-XAxvKp0tdwU-unsplash.jpg';
import img6 from '../../assets/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg';
import img7 from '../../assets/stories-v1rUvnVMMkM-unsplash.jpg';
import img8 from '../../assets/abhishek-hajare-_3dTLrMwiW8-unsplash.jpg'

const FoodGallery = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h2 className='text-center text-3xl font-bold my-8'>Our Food Gallery</h2>
                    <p className='text-xl mb-8 px-0 lg:px-64'>Assertively myocardinate robust e-tailers for extensible human capital.
                        dpropriately benchmark networks.</p>
                </div>
                <div className='grid grid-cols-1 mb-9 mg:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img1} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img2} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img3} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img4} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img5} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img6} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img7} alt="" />
                    </div>
                    <div className='h-[400px]'>
                        <img className='w-full h-full object-cover' src={img8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodGallery;