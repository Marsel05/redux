
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BsBasket2Fill} from "react-icons/bs";
import {AiTwotoneHeart} from "react-icons/ai";



const ProductDetails = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const {basket} = useSelector(s => s.basket)
    const {favorite} = useSelector(s => s.favorite)
    const bas = basket.some(some => some.id === details.id)
    const heart = favorite.some(some => some.id === details.id)
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: details})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: details})
    }
    const getDetails = () => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((res)=> {
                setDetails(res.data)
            })
    }
    useEffect(() => {
       getDetails(details)
    }, [])
    // console.log(el.image)
    const [bio, setBio] = useState(160);
    function getOpen (text){
        if (bio === 160){
            return setBio(text.length)
        }else{
            return setBio(160)
        }
    }

    const {category,description,image,title} = details
    return (
        <div className="flex items-start justify-evenly w-full py-[50px]">
                <img src={image} width={400}  alt="img"/>
            <div className="p-[100px] bg-gray-200 bg-blur-2xl  ">
                <h1 className="text-blue-600 font-medium text-3xl">{title}</h1>
                <h2 className="font-bold text-4xl my-2"> USD:{details.price}$</h2>
                <div className="w-[500px] text-xl"><p>{description?.slice(0,bio)}</p>
                    <span style={{
                        color: "#0750ee",
                        cursor: "pointer",
                        fontWeight: "500"
                    }} onClick={()=> getOpen(description)}>{bio === 160 ? "Читать дальше" : "Закрыть"}</span>
                </div>
                <h1 className="text-3xl text-orange-500 font-bold">{category}</h1>
                <div className="py-5">
                    { bas ? <Link to={"/basket"}>
                            <button type="button"
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <BsBasket2Fill/>
                            </button>
                        </Link>
                        :<button onClick={addToBasket}
                                 className="inline-flex items-center px-3 pt-[8px] pb-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {details.price} $
                        </button>}
                    <button onClick={addToFavorite}
                            className={ heart ? "text-gra       y-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mr-2 mb-2" : "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mr-2  mb-2"}>
                        <AiTwotoneHeart className={heart ? "text-red-600" : "text-white"}/>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;