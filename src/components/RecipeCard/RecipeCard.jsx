import React from 'react';
import ViewRecipe from '../ViewRecipe/ViewRecipe';

const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const { name, ingredients, rating, image_url, Method } = recipe;
    return (
        <div>
            <div className="card w-96 h-[800px] bg-base-100 shadow-2xl">
                <figure><img className='h-[300px] object-cover w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>Ingredients</p>
                    {
                        ingredients.map((item, index) => <li key={index}>{item}</li>)
                    }
                    <p>Ratings: {rating}</p>
                    <p>Cooking Method: {Method}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary w-full mt-4">Add To Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;