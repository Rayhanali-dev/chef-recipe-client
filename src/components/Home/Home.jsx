import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Banner from '../Banner/Banner';
import BookTable from '../BookTable/BookTable';
import FoodGallery from '../FoodGallery/FoodGallery';


const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-center text-3xl font-bold my-8'>Restaurant Chef</h3>
                <p className='text-xl text-center px-0 mb-8 lg:px-64'>Assertively myocardinate robust e-tailers for extensible human capital.
                        dpropriately benchmark networks.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-14'>
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
            <FoodGallery></FoodGallery>
            <BookTable></BookTable>
        </div>
    );
};

export default Home;