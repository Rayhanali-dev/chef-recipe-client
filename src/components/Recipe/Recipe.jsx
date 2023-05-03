import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData(); 
    console.log(recipe);
    const {picture_url, name, } = recipe
    return (
        <div className='h-[600px] relative'>
            <img className='w-full h-full object-cover' src={picture_url} alt="" />
            <div className='absolute w-full h-full top-0 left-0 backdrop-brightness-50'>

            </div>
        </div>
    );
};

export default Recipe;