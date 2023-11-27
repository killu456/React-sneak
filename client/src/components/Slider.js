import React from "react";

export function Slider(){
    return(
        <div className="slider">
            <div className="infoSlider">
                <div className="sizeDiv" style={{position:"absolute",top:"3%",left:"3%"}}>
                    <img src = "img/adidas.png" style={{width:'13%'}}/>
                </div>
                <div className="sizeDiv" >
                    <p>
                        <span style={{fontSize:'38px',color:'#8BB43C',}}>Stan Smith</span>
                        <span style={{fontSize:'38px'}}>,<br/>Forever!</span>
                    </p>
                </div>
                <div className="sizeDiv" >
                    <button>Купить</button>
                </div>
            </div>

            <div className="imgSlider">
                <img src = "img/fog.png"/>
            </div>
        </div>

    );
}