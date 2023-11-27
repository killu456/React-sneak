
import { Admin } from "./pages/Admin"
import { Basket } from "./pages/Basket"
import Fav from "./pages/Favorites"
import Orders from "./pages/Orders"
import SneakersItems from "./pages/SneakersItems"
import User from "./pages/User"
import { ADMIN_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/constants"



export const authRouters = [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:BASKET_ROUTE,
        Component:Basket
    },
    {
        path:ORDER_ROUTE,
        Component:Orders
    },
    {
        path:FAVORITE_ROUTE,
        Component:Fav
    }

]


export const publicRouters = [
    {
        path:SHOP_ROUTE,
        Component:SneakersItems
    },
    {
        path:REGISTRATION_ROUTE,
        Component:User
    }
]