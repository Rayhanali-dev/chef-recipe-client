import React from 'react';
import ViewRecipe from '../ViewRecipe/ViewRecipe';

const RecipeCard = ({recipe}) => {
    const {recipes} = recipe;
    console.log(recipes);
    return (
        <div>
            {
                recipes.map(viewRecipe => <ViewRecipe key={viewRecipe.id} viewRecipe={viewRecipe}></ViewRecipe>)
            }
        </div>
    );
};

export default RecipeCard;