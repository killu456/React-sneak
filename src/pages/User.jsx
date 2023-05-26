import { useDispatch, useSelector } from "react-redux";
import { SneakersFetch } from "../asyncAction/fetchSneakers";

function User(){



    return(
    <div className="cartEmpty">
            <div className="main">      
                <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="signup">
            <form>
                <label  aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required=""/>
                <input type="email" name="email" placeholder="Email" required=""/>
                <input type="password" name="pswd" placeholder="Password" required=""/>
                <button className="Button">Sign up</button>
            </form>
        </div>

        <div className="login" /*onClick={() => GetSneak()}*/>
            <form>
                <label  aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required=""/>
                <input type="password" name="pswd" placeholder="Password" required=""/>
                <button className="Button">Login</button>
            </form>
            </div>
        </div>
    </div>
    
    );
}

export default User;