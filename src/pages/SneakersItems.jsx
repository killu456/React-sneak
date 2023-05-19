import Card from "../components/Card";
import React from "react";
import ContentLoader from "react-content-loader";

function SneakersItems({isLoading,Items}){
    const [searchValue,setSearchValue] = React.useState('');

    function onChangeSearchInput(event){
        setSearchValue(event.target.value);
    }


    return(
    <>
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки"}</h1>
        <div className="search-block">
            <img src="/img/search.png" width={18} height={18} alt="Search" />
            <input onChange={onChangeSearchInput} placeholder="Поиск..."  value = {searchValue}/>
            {searchValue ? <img onClick = {()=> setSearchValue('')} className="clearSearch" src = "/img/btn-remove.png" alt = "clear"/> : undefined}
        </div>

    <div className="ds-f">
    {isLoading? 
        [...Array(10)].map(()=>
        <div className="card">
        <ContentLoader 
         speed={2}
         width={150}
         height={265}
         viewBox="0 0 150 265"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
       >
         <rect x="0" y="0" rx="11" ry="11" width="150" height="155" /> 
         <rect x="0" y="167" rx="10" ry="10" width="150" height="15" /> 
         <rect x="0" y="189" rx="10" ry="10" width="100" height="15" /> 
         <rect x="0" y="230" rx="8" ry="8" width="80" height="25" /> 
         <rect x="118" y="226" rx="7" ry="7" width="32" height="32" />
        </ContentLoader>
        </div> 
        )
    
        :

      Items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj,index)=> 
          <Card 
          key = {index}
          title = {obj.title} 
          url = {obj.url} 
          price = {obj.price}
          /> )
          
    }
      
    </div>
    </>
    );
}
export default SneakersItems;