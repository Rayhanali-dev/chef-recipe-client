import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { picture_url, name, years_of_experience, recipes, likes } = chef
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-80 object-cover w-full' src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className='card-title'>{years_of_experience} years of experience</h3>
                    <div className='flex justify-between'>
                        <h3 className='card-title'>Number of recipe {recipes.length}</h3>
                        <h3 className='card-title'>{likes} like</h3>
                    </div>
                    <div className="card-actions justify-center mt-6">
                        <button className='btn btn-primary'><Link to={`/recipe`}>View Recipe</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;