import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const RecipeCard = ({ recipe }) => {
    const notify = () => toast("Add To Favourite");
    console.log(recipe);
    const [disable, setDisable] = useState(false);
    const handlerAddToFav = () => {
        setDisable(true)
        notify();
    }
    const { name, ingredients, rating, image_url, Method } = recipe;
    return (
        <div>
            <div className="card h-[800px] bg-base-100 shadow-2xl">
                <figure><img className='h-[300px] object-cover w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>Ingredients</p>
                    {
                        ingredients.map((item, index) => <li key={index}>{item}</li>)
                    }
                    <div className='flex justify-start gap-3'>
                        <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
                        <p>{rating}</p>
                    </div>
                    <p>Cooking Method: {Method}</p>
                    <div className="card-actions ">
                        <button disabled={disable} onClick={handlerAddToFav} className="btn btn-primary w-full mt-4">Add To Favourite</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;