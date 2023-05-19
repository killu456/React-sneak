import { Link } from "react-router-dom";

function Header(props){
    return(
    <header>
    <div>
      <Link to = "/">
          <img width={40} height={40} src="/img/logo.png" />
      </Link>
      <div>
        <h3>React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul>
      <li onClick = {props.onClickCart}>
        <img width={18} height={18} src="/img/cart.png" />
        <span>1205 руб</span>
      </li>
      <li>
        <Link to = "/favorites">
          <img width={18} height={18} src="/img/fav.png" />
        </Link>
      </li>

      <li>
        <Link to = "/orders">
        <img width={18} height={18} src="/img/user.png" />
        </Link>
      </li>
    </ul>
  </header>);
}

export default Header;