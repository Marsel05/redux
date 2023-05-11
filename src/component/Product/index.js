import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../Redux/Reducer";
import ProductDetails from "../../Pages/ProductDetails";

const Product = () => {

    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(()=>{
        dispatch(getProduct())
    }, [])
    console.log(product)
    return (
        <div style={{background: "#ffffff"}}>
            <div className="container mx-auto w-5/6 ">
                <div className="flex py-20 flex-wrap gap-14">
                    {
                        product.map((el) => (
                                <ProductCard el={el}/>
                        ))
                    }
                </div>

            </div>
        </div>

    );
};

export default Product;