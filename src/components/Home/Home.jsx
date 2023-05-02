import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            <h3>This is Home components</h3>
        </div>
    );
};

export default Home;