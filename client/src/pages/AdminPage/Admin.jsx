import { useDispatch, useSelector } from "react-redux"
import { ChangeModalOpen } from "../../store/AdminReducer"
import { ModalWind } from "../../components/ModalWind"
import "./AdminCss.css"
import { SHOP_ROUTE } from "../../utils/constants"
import { Link } from "react-router-dom"



export function Admin(){
    const dispatch = useDispatch()
    const {ModalOpen} = useSelector(state => state.AdminR)
    const {Orders} = useSelector(state => state.Orders)
    return(
        <>
            <div className="RowAdmin posAbsolute">
                <div className="PanelDiv" onClick={() => dispatch(ChangeModalOpen())}>
                    Добавить товар
                </div> 
                <Link to = {SHOP_ROUTE} className="PanelDiv">
                        Список товаров
                </Link>
                <div className="PanelDiv">
                    Список заказов
                </div> 
                <div className="PanelDiv">
                    Список покупок
                </div>
            </div>
           
        </>
    )
}