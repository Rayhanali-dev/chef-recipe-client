import React from 'react';

const ViewRecipe = ({viewRecipe}) => {
    console.log(viewRecipe);
    return (
        <div>
            <h3>{viewRecipe.name}</h3>
        </div>
    );
};

export default ViewRecipe;