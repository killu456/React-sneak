import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Fav from "./pages/Favorites";
import SneakersItems from "./pages/SneakersItems";
import Orders from "./pages/Orders";



import React from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";

export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoaiding, setIsLoading] = React.useState(true);

  const [Items,setItems] = React.useState([]);
  const [cartItems,setCartItems] = React.useState([]);
  const [Favorite,setFavorite] = React.useState([]);
  

  React.useEffect( ()=> {
    async function fetchdata(){

      const cartResponse = await axios.get('https://645bd41aa8f9e4d6e774412f.mockapi.io/items');
      const itemsResponse = await axios.get('https://645bd41aa8f9e4d6e774412f.mockapi.io/sneakers');
      const favoriteResponse = await axios.get('https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites');
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setFavorite(favoriteResponse.data);
      setIsLoading(false);
    }

    fetchdata();
    
  },[]);


  async function addToCart(obj){
      const objCart = cartItems.find((elem)=> elem.title === obj.title) 
      if(!objCart){ 
         const {data} = await axios.post("https://645bd41aa8f9e4d6e774412f.mockapi.io/items",obj); 
         setCartItems((prev) => [...prev,data]); 
      }
      else{
        axios.delete(`https://645bd41aa8f9e4d6e774412f.mockapi.io/items/${objCart.id}`); 
        setCartItems((prev) => prev.filter((item) => item.title !== objCart.title));
      }
  }


  async function addToFav(obj){
    const objCart = Favorite.find((elem)=> elem.title === obj.title) 
    if(!objCart){ 
       const {data} = await axios.post("https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites",obj); 
       setFavorite((prev) => [...prev,data]); 
    }
    else{
      axios.delete(`https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites/${objCart.id}`); 
      setFavorite((prev) => prev.filter((item) => item.title !== objCart.title));
    }
  }

  


return(
  <AppContext.Provider value = {{Favorite,Items,cartItems,addToCart,addToFav}}>
 <div className="wrapper">
      {cartOpened ? 
          <Drawer 
          items = {cartItems}
          addToCart = {addToCart} 
          onClickCartRemove = {()=> setCartOpened(false)}  
          />
        : 
      undefined}
      <Header onClickCart = {()=> setCartOpened(true)}/>

      <div className="content">
      <Routes>
            <Route path = "/favorites" element = {
                  <Fav Favorite = {Favorite}/>
            }/>
             <Route path = "/orders" element = {
                  <Orders/>
            }/>
            <Route path = "/" element = {
                  <SneakersItems
                  isLoading={isLoaiding}
                  Items = {Items}
                  />
            }/>
        </Routes>
        </div>
    </div>
    </AppContext.Provider>
    );
}

export default App;
