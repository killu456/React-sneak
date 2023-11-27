import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authRouters, publicRouters } from "../routers";
import Info from "./Info";



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

            <Route path="*" element = {<Info
                   Title = {"Перепроверьте пожалуйста"}
                   Paragraph = {"Вы неправильно ввели ссылку :("}
                   Url = {"/img/sad.png"}
                   W = {70}
                   H = {70}
                />}
            />
        </Routes>
    )
}