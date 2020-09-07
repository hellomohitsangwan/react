 export const initialState = {
     basket: [
                                                        
         {
             id: "12345678",
             title: "Dell U-Series 37.5 Screen LED-Lit Monitor (U3818DW)",
             price: 320,
             rating: 5,
             image: "https://images-na.ssl-images-amazon.com/images/I/71IjK1dq-OL._SX522_.jpg"
         }   ,
    ],
};

function reducer(state, action)
{
    console.log(action);
    switch (action.type)
    {
        
        case "ADD_TO_BASKET":
            //you need to return   or it returns what the new data layer look like
            return {
                ...state,
                basket: [...state.basket , action.item],
            }
            
             //logic for adding item to basket
            
        case "REMOVE_FROM_BASKET":

            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0)
            {
                //item exists in the basket
                newBasket.splice(index, 1);
            } else
            {
                console.warn(
                    "cant remove product of"
                )
            }
            return {
                ...state, 
                basket:newBasket,
            }
            
            //Logic for removing fro the basket
            
        default:
            return state;
    }
}

export default reducer; 