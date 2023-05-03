import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    const { picture_url, name, description, likes, years_of_experience, recipes } = recipe;
    console.log(description);
    return (
        <div>
            <div className='h-[600px] relative'>
                <img className='w-full h-full object-cover' src={picture_url} alt="" />
                <div className='absolute flex flex-col justify-center items-center w-full h-full top-0 left-0 backdrop-brightness-50'>
                    <div className='text-center max-w-7xl mx-auto'>
                        <h3 className='text-5xl text-white mb-6'>{name}</h3>
                        <p className='text-white text-xl px-44'>{description}</p>
                        <p className='text-white text-xl my-3'>Recipes: {recipes.length}</p>
                        <p className='text-white text-xl'>Experience: {years_of_experience}</p>
                        <p className='text-white text-xl mt-3'>Likes: ${likes}</p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-center text-4xl font-bold my-8'>Recipe Items</h3>
                <div className='grid grid-cols-3 my-8'>
                    {
                        recipes.map(recipe => <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;