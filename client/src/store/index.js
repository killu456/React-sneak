import { applyMiddleware, createStore ,combineReducers} from "redux";
import { sneakersReducer } from "./SneakersReducer";
import thunk from "redux-thunk";
import { basketReducer } from "./BasketReducer";
import { favoritesReducer } from "./FavoritesReducer";
import { ordersReducer } from "./OrdersReducer";
import { ThemeReducer } from "./RTheme";
import userReducer from "./userReducer";
import AdminReducer from "./AdminReducer";

const rootReducer = combineReducers({
    Sneakers:sneakersReducer,
    Basket:basketReducer,
    Favorites:favoritesReducer,
    Orders:ordersReducer,
    Theme:ThemeReducer,
    UserR:userReducer,
    AdminR:AdminReducer,
})


export const store  = createStore(rootReducer,applyMiddleware(thunk))