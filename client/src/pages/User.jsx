import { useDispatch} from "react-redux";
import { AddUser, ChangeIsAuth } from "../store/userReducer";
import { Navigate } from "react-router-dom";
import { login, registration } from "../http/userApi";

function User(){
    const [EmailSingUp,setEmailSingUp] = useState('');
    const [PasswordSingUp,setPasswordSingUp] = useState('');

    const [EmailLogin,setEmailLogin] = useState('');
    const [PasswordLogin,setPasswordLogin] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();
    }

    const clickSingUp = async () => {
        try{
            let data = await registration(Email,Password);
            dispatch(ChangeIsAuth());
            dispatch(AddUser(data));
            Navigate(SHOP_ROUTE);
        }
        catch(e){
            alert(e.response.data.message);
        }
    }

    const clickLogin = async () => {
        try{
            let data = await login(Email,Password);
            dispatch(ChangeIsAuth());
            dispatch(AddUser(data));
            Navigate(SHOP_ROUTE);
        }
        catch(e){
            alert(e.response.data.message);
        }
    }

    return(
    <div className="cartEmpty">
             <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form onSubmit = {handleSubmit} >
					<label for="chk" aria-hidden="true">Регистрация</label>
					<input value={EmailSingUp} onChange={ e => setEmailSingUp(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value={PasswordSingUp} onChange={ e => setPasswordSingUp(e.target.value)}  type="password" name="pswd" placeholder="Пароль" required=""/>
					<button type = "submit" onClick={() => clickSingUp()} >Регистрация</button>
				</form>
			</div>

			<div className="login">
				<form onSubmit = {handleSubmit}>
					<label for="chk" aria-hidden="true">Вход</label>
					<input value = {EmailLogin} onChange={ e => setEmailLogin(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value = {PasswordLogin} onChange={ e => setPasswordLogin(e.target.value)} type="password" name="pswd" placeholder="Пароль" required=""/>
					<button type = "submit" onClick={() => clickLogin()} >Вход</button>
				</form>
			</div>
	    </div>
    </div>
    
    );
}

export default User;