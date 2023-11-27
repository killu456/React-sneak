import { applyMiddleware, createStore ,combineReducers} from "redux";
import { sneakersReducer } from "./getSneakers";
import thunk from "redux-thunk";
import { itemsReducer } from "./getItems";
import { favoritesReducer } from "./getFavorites";
import { ordersReducer } from "./getCartOrders";
import { ThemeReducer } from "./RTheme";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    Sneakers:sneakersReducer,
    Items:itemsReducer,
    Favorites:favoritesReducer,
    Orders:ordersReducer,
    Theme:ThemeReducer,
    UserR:userReducer,
})


export const store  = createStore(rootReducer,applyMiddleware(thunk))