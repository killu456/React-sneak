import { useDispatch, useSelector} from "react-redux";
import { AddUser, ChangeIsAuth } from "../store/userReducer";
import { login, registration } from "../http/userApi";
import React, { useState } from "react";
import { ChangeIsAdmin } from "../store/AdminReducer";

function User(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();
    }

    const clickSingUp = async () => {
        try{
            const data = await registration({name,email,password,role:"USER"});
            dispatch(ChangeIsAuth());
            dispatch(AddUser(data));
            alert("Регистрация прошла успешно!")
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    const clickLogin = async () => {
        try{
            const data = await login(email,password);
            dispatch(ChangeIsAuth());
            dispatch(AddUser(data));
            console.log(data)
            alert("Авторизация прошла успешно!")
            if(data.role == "ADMIN") dispatch(ChangeIsAdmin())
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    return(
    <div className="cartEmpty">
             <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form onSubmit = {handleSubmit} >
					<label for="chk" aria-hidden="true">Регистрация</label>
                    <input  value = {name} onChange={ e => setName(e.target.value)} type="name" name="name" placeholder="Name" required=""/>
                    <input value={email} onChange={ e => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value={password} onChange={ e => setPassword(e.target.value)}  type="password" name="pswd" placeholder="Пароль" required=""/>
					<button type = "submit" onClick={() => clickSingUp()} >Регистрация</button>
				</form>
			</div>

			<div className="login">
				<form onSubmit = {handleSubmit}>
					<label for="chk" aria-hidden="true">Вход</label>
					<input  value = {email} onChange={ e => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input value = {password} onChange={ e => setPassword(e.target.value)} type="password" name="pswd" placeholder="Пароль" required=""/>
					<button type = "submit" onClick={() => clickLogin()} >Вход</button>
				</form>
			</div>
	    </div>
    </div>
    
    );
}

export default User;