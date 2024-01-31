import { useSelector,useDispatch } from "react-redux";
import Card from "../components/Card";
import Info from  "../components/Info";
import { fetchOrderDevices } from "../http/orderApi";


import React from "react";
import { GetOrdersAction } from "../store/OrdersReducer";
import { SHOP_ROUTE } from "../utils/constants";

function Orders(){
    const dispatch = useDispatch();
    const {User,active} = useSelector(state => state.UserR)
    const Orders = useSelector(state => state.Orders.Orders)
    const Sneakers = useSelector(state => state.Sneakers.Sneakers)
    

    function fetchOrdersItems(data){
        let arr = [];
        let s = []
        let Id = ''
        data.forEach(e => {
            e.forEach(item => {
                s = [...s,...Sneakers.filter((obj) => item.deviceId === obj.id)]
                Id = item.orderId
            })
            if(s.length) arr = [...arr,{orderId:Id,items: s}]
            s = []
        });   
        if(arr.length) dispatch(GetOrdersAction(arr)) 
    } 
console.log(Orders)

    React.useEffect( ()=> {
        async function fetchdata(){
            await fetchOrderDevices(User.id).then(data => fetchOrdersItems(data))    
        }
        fetchdata();
    },[]);



    return(
        <>
        {Orders.length > 0  ? 
            <>
            <h1>Мои заказы</h1>
            <div className="ds-f">
                {Orders.map((item) =>
                    <>
                    <h3>Заказ #{item.orderId}</h3>
                    <div className="f-w" style={{width:"100%"}}>
                    {item.items.map((obj,index) => 
                        <Card 
                        key = {index}
                        id = {obj.id}
                        name = {obj.name}
                        url = {obj.img}
                        price = {obj.price}
                        />
                    )}
                    </div>
                    </>
                )}
            </div>
            </>
            : 
            <Info
            Title = {"Вы нищеброд?\nОформите хотябы один заказ."}
            Paragraph = {"У вас нет заказов"}
            Url = {"/img/sad.png"}
            W = {70}
            H = {70}
            pathRoute = {SHOP_ROUTE}
            />
            }
        </>
    );
}

export default Orders;