import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import Banner from '../Banner/Banner';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-center text-3xl font-bold my-16'>Restaurant Chef</h3>
                <div className='grid grid-cols-2 gap-6 mb-14'>
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;