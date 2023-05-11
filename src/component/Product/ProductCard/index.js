import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasket2Fill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai";
import ProductDetails from "../../../Pages/ProductDetails";


const ProductCard = ({el}) => {
    const {favorite} = useSelector(s => s.favorite)
    const {basket} = useSelector(state => state.basket)
    const bas = basket.some(some => some.id === el.id)
    const heart = favorite.some(some => some.id === el.id)
    const dispatch = useDispatch()
    const [bio, setBio] = useState(100);
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }
    console.log(el)
    function getOpen (text){
        if (bio === 100){
            return setBio(text.length)
        }else{
            return setBio(100)
        }
    }
    return (
        <div className="flex w-[300px] mx-auto  rounded-md  ">
            <div
                className=" max-w-sm bg-white   border border-gray-200 rounded-md  shadow dark:bg-gray-800 dark:border-gray-700">
               <Link to={`/details/${el.id}`} >
                   <img className="rounded-t-lg " src={el.image}  alt="img"/>
               </Link>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                    </a>
                    <div><p>{el.description?.slice(0,bio)}</p>
                        <span style={{
                            color: "#0750ee",
                            cursor: "pointer",
                            fontWeight: "500"
                        }} onClick={()=> getOpen(el.description)}>{bio === 100 ? "Читать дальше" : "Закрыть"}</span>
                    </div>
                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>*/}

                    { bas ? <Link to={"/basket"}>
                        <button type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <BsBasket2Fill/>
                        </button>
                    </Link>
                        :<button onClick={addToBasket}
                        className="inline-flex items-center px-3 pt-[8px] pb-[6px] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {el.price} $
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

export default ProductCard;