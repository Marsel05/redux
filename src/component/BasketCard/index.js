
import React from 'react';
import { useDispatch } from 'react-redux';
import {TiMinus, TiPlus} from "react-icons/ti";

const BasketCard = ({ el }) => {
    const dispatch = useDispatch();

    const basDelete = () => {
        dispatch({ type: 'DELETE', payload: el});
    };
    const addProduct = () => {
        dispatch({ type: 'ADD_TO_BASKET', payload: el});
    };
    const decProduct = () => {
        dispatch({ type: 'DEC_BASKET', payload: el});
    };

    return (
        <tr className="bg-gray-800 rounded-full border-b dark:bg-gray-800 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                <img className="rounded-[10px]" src={el.image} width={140} alt="" />
            </th>
            <td className="px-6 py-4 text-[20px] text-white font-bold">{el.title}</td>
            <td className="px-6 py-4">
                <div className="flex">
                    <button onClick={decProduct} className="bg-gray-800 border-2 border-gray-500 text-gray-500 text-[20px] rounded-full p-[2px]   "><TiMinus/></button>
                    <p className="bg-gray-700 w-14 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-2 text-white ">{el.count}</p>
                    <button onClick={addProduct} className="bg-gray-800 border-2 border-gray-500 text-gray-500 text-[20px] rounded-full p-[2px]"><TiPlus/></button>
                </div>
            </td>
            <td className="px-6 py-4 text-[18px] text-white">{Math.round(el.price * el.count)}$</td>
            <td className="px-6 py-4">
                <button
                    onClick={basDelete}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default BasketCard;
