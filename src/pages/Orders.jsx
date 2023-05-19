import Card from "../components/Card";
import Info from  "../components/Info";
import axios from "axios";


import React from "react";

function Orders(){
    const [cartOrders,setCartOrders] = React.useState([]);

    React.useEffect( ()=> {
        async function fetchdata(){
          const userOrders = await axios.get('https://645d3ef1250a246ae31b9fbb.mockapi.io/orders');
          setCartOrders(userOrders.data);
        }
        fetchdata();
    },[]);

    return(
        <>
        {cartOrders.length > 0  ? 
            <>
            <h1>Мои заказы</h1>
            <div className="ds-f">
                {cartOrders.map((item) =>
                    <>
                    <h3>Заказ #{item.order}</h3>
                    <div className="block">
                    {item.orders.map((obj,index) => 
                        <Card 
                        key = {index}
                        id = {obj.id}
                        title = {obj.title}
                        url = {obj.url}
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
            />
            }
        </>
    );
}

export default Orders;