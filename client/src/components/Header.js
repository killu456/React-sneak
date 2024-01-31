import { Link } from "react-router-dom";
import { RepBasketOpenAction, RepCartOpenAction } from "../store/BasketReducer";
import { useDispatch, useSelector} from "react-redux";
import { RepThemeAction } from "../store/RTheme";
import { ADMIN_ROUTE, FAVORITE_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/constants";

function Header(){
  const dispatch = useDispatch()
  const Theme = useSelector(state => state.Theme.ThemeDL)
  const {IsAdmin} = useSelector(state => state.AdminR)
    return(
    <header>
      <div>
      <Link to = {SHOP_ROUTE}>
          <img width={40} height={40} src="/img/logo.png" alt = "logo"/>
      </Link>
      <div>
        <h3>React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
      {IsAdmin ?
      <div>
        <Link to = {ADMIN_ROUTE}>
          Панель администрирования
        </Link>  
      </div>
      :
    <ul>
      <li onClick = {() => dispatch(RepBasketOpenAction())}>
        <img width={22} height={22} src="/img/cart.png"  alt = "cart"/>
      </li>
      <li>
        <Link to = {FAVORITE_ROUTE}>
          <img width={20} height={20} src="/img/fav.png" alt = "fav" />
        </Link>
      </li>

      <li>
        <Link to = {ORDER_ROUTE}>
        <img width={26} height={26} src="/img/sneakers.png" alt = "sneakers" />
        </Link>
      </li>
       <li>
        <Link to = {REGISTRATION_ROUTE}>
        <img width={20} height={20} src="/img/user.png"  alt = "reg"/>
        </Link>
      </li>
    </ul>
      }
    <button className="moon-sun" onClick={() => dispatch(RepThemeAction()) }><img width={70} height={70} src= {Theme? "img/moon.png":"img/sun.png"}/></button>
    
  </header>);
}

export default Header;