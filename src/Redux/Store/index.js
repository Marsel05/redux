import {applyMiddleware, combineReducers, createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {MainReducer} from "../Reducer";
import {BasketReducer} from "../Reducer/BasketReducer";
import {FavoriteReducer} from "../Reducer/FavoriteReducer";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))
