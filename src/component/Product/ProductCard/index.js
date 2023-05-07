import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasket2Fill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai";


const ProductCard = ({el}) => {
    const {favorite} = useSelector(s => s)
    const {basket} = useSelector(state => state)
    const bas = basket.some(some => some.id === el.id)
    const heart = favorite.some(some => some.id === el.id)
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }
    return (
        <div className="flex w-[400px] mx-auto   py-10">
            <div
                className=" flex bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-[200px]" src={el.image} alt="img"/>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>

                    { bas ? <Link to={"/basket"}>
                        <button type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <BsBasket2Fill/>
                        </button>
                    </Link>
                        :<button onClick={addToBasket}
                        className="inline-flex items-center px-3 pt-[10px] pb-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {el.price} $
                        </button>}
                    <button onClick={addToFavorite}
                            className={ heart ? "bg-white" : "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"}>
                            <AiTwotoneHeart className={heart ? "text-red-600" : "text-white"}/>
                    </button>


                </div>
            </div>
        </div>


    );
};

export default ProductCard;