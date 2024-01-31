import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authRouters, publicRouters } from "../routers";
import Info from "./Info";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/constants";



export function AppRouter(){
    const {IsAuth} = useSelector(state => state.UserR)
    return(
        <Routes>
            {IsAuth &&
                authRouters.map(({path,Component}) => 
                    <Route key = {path} path = {path} element = {<Component/>}/>
                )
            }



            {publicRouters.map(({path,Component}) => 
                    <Route key = {path} path = {path} element = {<Component/>}/>
            )}

            <Route path="*" element = {
                <div className="overlay">
                    <div className="block">
                        <Info Title = {"Или перешли по несуществующей ссылке :("}
                              Paragraph = {"Вы не зарегистрировались"}
                              Url = {"/img/image.png"}
                              W = {70}
                              H = {70}
                              pathRoute = {REGISTRATION_ROUTE}/>
                    </div>
                </div>
                }
            />
        </Routes>
    )
}