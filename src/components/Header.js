import { Link } from "react-router-dom";
import { RepCartOpenAction } from "../store/getItems";
import { useDispatch, useSelector} from "react-redux";
import { RepThemeAction } from "../store/RTheme";

function Header(){
  const dispatch = useDispatch()
  const Theme = useSelector(state => state.Theme.ThemeDL)
    return(
    <header>
    <div>
      <Link to = "/">
          <img width={40} height={40} src="/img/logo.png" alt = "logo"/>
      </Link>
      <div>
        <h3>React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul>
      <li onClick = {() => dispatch(RepCartOpenAction())}>
        <img width={22} height={22} src="/img/cart.png"  alt = "cart"/>
      </li>
      <li>
        <Link to = "/favorites">
          <img width={20} height={20} src="/img/fav.png" alt = "fav" />
        </Link>
      </li>

      <li>
        <Link to = "/orders">
        <img width={26} height={26} src="/img/sneakers.png" alt = "sneakers" />
        </Link>
      </li>
       <li>
        <Link to = "/user">
        <img width={20} height={20} src="/img/user.png"  alt = "user"/>
        </Link>
      </li>
    </ul>
    <button className="moon-sun" onClick={() => dispatch(RepThemeAction()) }><img width={70} height={70} src= {Theme? "img/moon.png":"img/sun.png"}/></button>
    
  </header>);
}

export default Header;