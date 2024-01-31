import { Link } from "react-router-dom";

function Info({Title,Paragraph,Url,W,H,onRemove,pathRoute}){
    return(
    <div className="cartEmpty">
        <img className="mb-20" width= {`${W}px`} height= {`${H}px`} src={Url} alt="Empty" />
        <h2>{Paragraph}</h2>
        <p className="op-6">{Title}</p>
        <Link to = {pathRoute}>
        <button onClick = {onRemove &&  onRemove } className="greenButton">
          <img src="/img/arrow.png" alt="Arrow" />
          перейти
        </button>
        </Link>
    </div> 
    );
}

export default Info;