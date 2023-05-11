import React from 'react';
import {useSelector} from "react-redux";
import BasketCard from "../BasketCard";

const Basket = () => {
    const {basket} = useSelector(state => state.basket)
    const totalPrice = basket.reduce((acc, el) => {
        return acc + el.count * el.price
    }, 0)
    return (

        <div className=" container mx-auto w-5/6 py-20 relative overflow-x-auto">
            {
              basket.length === 0 ?  <div>
                    <h1 className="text-center  text-5xl bg-blue-950 py-5 text-white uppercase">cart is empty:</h1>
                </div> :
                  <div>
                      <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr className="bg-gray-600 text-gray-200">
                              <th scope="col" className="px-6 py-3">
                                  Img
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Count
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Action
                              </th>
                          </tr>
                          </thead>
                          <tbody>
                          {
                              basket.map((el)=> <BasketCard el={el}/>)
                          }
                          </tbody>
                      </table>
                      <div >
                          <h1 className="py-5 w-[200px] rounded text-center text-black text-[20px] ">Total price: {Math.round(totalPrice)} USD$</h1>
                      </div>
                      </div>

            }

        </div>

    );
};

export default Basket;