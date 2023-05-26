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
        <img width={22} height={22} src="/img/cart.png" />
      </li>
      <li>
        <Link to = "/favorites">
          <img width={20} height={20} src="/img/fav.png" />
        </Link>
      </li>

      <li>
        <Link to = "/orders">
        <img width={26} height={26} src="/img/sneakers.png" />
        </Link>
      </li>
       <li>
        <Link to = "/user">
        <img width={20} height={20} src="/img/user.png" />
        </Link>
      </li>
    </ul>
  </header>);
}

export default Header;