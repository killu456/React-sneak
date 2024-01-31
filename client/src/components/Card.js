import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { AddBasketAction, DelBasketAction, GetBasketItemsAction } from "../store/BasketReducer";
import { createFavoriteDevice, deleteFavoriteDevice } from "../http/favoriteApi";
import { AddFavoriteAction, DelFavoriteAction, GetFavoritesAction } from "../store/FavoritesReducer";
import { createBasketDevice, deleteBasketDevice } from "../http/basketApi";
import { repActive } from "../store/userReducer";
import { deleteDevice } from "../http/deviceApi";
import { DelSneakerAction, PutCartAction } from "../store/SneakersReducer";
import { ChangeModalOpen } from "../store/AdminReducer";


function Card({id,name, url, price}){
    const dispatch = useDispatch()
    const Items = useSelector(state => state.Basket.BasketItems)
    const Favorites = useSelector(state => state.Favorites.Favorites)
    const {Sneakers} = useSelector(state => state.Sneakers)
    const {User} = useSelector(state => state.UserR)
    const {IsAdmin} = useSelector(state => state.AdminR)

    const [Plus,setPlus] = React.useState(false);
    const [Like,setLike] = React.useState(false);


    React.useEffect(() => {
        if(Items.find((prev) => prev.name === name && !Plus ))setPlus(!Plus);
        if(Favorites.find((prev) => prev.name === name && !Like ))setLike(!Like);
    },[])


    function DelDevice(){
        dispatch(DelSneakerAction(id))
        deleteDevice(id)    
    }
    

    function addBasket(){ 
        try{
            if(!Plus) {
                const data = createBasketDevice({userId:User.id,deviceId:id})
                dispatch(AddBasketAction(data))
            }
            else {
                const BId = Items.filter((e) => e.name === name)[0].ItemId
                deleteBasketDevice(BId) 
                dispatch(DelBasketAction(BId))
            }
            setPlus(!Plus);
            dispatch(repActive())
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    function addFav(){
        try{
            if(!Like) {
                const data = createFavoriteDevice({userId:User.id,deviceId:id});
                dispatch(AddFavoriteAction(data));
            }
            else {
                const FId = Favorites.filter((e) => e.name === name)[0].ItemId
                deleteFavoriteDevice(FId) 
                dispatch(DelFavoriteAction(FId))
            }
            setLike(!Like)
            dispatch(repActive())
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }


    function PutCart(){
        dispatch(PutCartAction({id,name, url, price}))
        dispatch(ChangeModalOpen())
    }

    return(
    <div className="card">
    <div className="j-c-s-a" style={{position:"relative"}}>
        {!IsAdmin ? 
            <img className="LikeImg" onClick = {()=> {addFav()}} src={Like ? "/img/liked.png" : "/img/unliked.png"} width={32} height={32} alt="Unliked" />
            :
            <>
            <button className="ButtonPutCart" onClick={() => PutCart()}>
                редактировать
            </button>
            <img onClick = {()=> {DelDevice()}} src={"/img/exit.png"} width={32} height={32} alt="Del" />
            </>
        }
            
    </div>
    <img width={133} height={112} src= {process.env.REACT_APP_API_URL + url} alt="Sneakers" />
    <h5> {name}</h5>
    <div className="cardChildDiv">
        <div className="container">
            <span>Цена:</span>
            <b> {`${price} руб`}</b>
        </div>
        {!IsAdmin && <img onClick = {()=> {addBasket()}} width={32} height={32} src = {Plus ? "/img/addPlus.png" : "/img/plus.png"} alt="Plus" />}
    </div>
    </div>
    );
}

export default Card;