import React from 'react';
import ProductCard from "../Product/ProductCard";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(s => s.favorite)
    return (
        <div  className="container  bg-no-repeat bg-center bg-cover  flex flex-wrap gap-9 mx-auto w-full">
                {
                   favorite.length === 0 ?  <div>
                            <h1 className="flex justify-center rounded-xl text-5xl bg-blue-950 py-5 px-[440px] ml-10 text-white my-20 uppercase w-full ">no favorite</h1>
                        </div> :
                    favorite.map((el)=>(
                        <div >
                            <ProductCard el={el}/>
                        </div>

                    ))
                }
        </div>

    );
};

export default Favorite;