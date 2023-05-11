const initialState = {
    basket: [],
}
export const BasketReducer = (state = initialState, action) =>{
   switch (action.type){
    case "ADD_TO_BASKET":
        let bas = state.basket.find(el => el.id === action.payload.id)
        if (bas) {
            return {...state, basket: state.basket.map((el) => el.id === bas.id ? {...el, count: el.count + 1} : el )}
        } else {
            return {...state, basket: [...state.basket, {...action.payload, count: 1}]}
        }
       case "DELETE":
           const newBasket = state.basket.filter(el => el.id !== action.payload.id)
           return { ...state, basket: newBasket }
    case "DEC_BASKET" : {
        return      {...state,basket: state.basket.map(el => {
                if (el.id === action.payload.id && el.count > 1){
                    return {...el, count: el.count - 1}
                }else{
                    return el
                }
            })}
    }
    default:
       return  state
}
}