import { applyMiddleware, createStore ,combineReducers} from "redux";
import { sneakersReducer } from "./getSneakers";
import thunk from "redux-thunk";
import { itemsReducer } from "./getItems";
import { favoritesReducer } from "./getFavorites";
import { ordersReducer } from "./getCartOrders";

const rootReducer = combineReducers({
    Sneakers:sneakersReducer,
    Items:itemsReducer,
    Favorites:favoritesReducer,
    Orders:ordersReducer,
})


export const store  = createStore(rootReducer,applyMiddleware(thunk))