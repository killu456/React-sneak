import { useDispatch, useSelector} from "react-redux"
import React, { useState } from "react"
import { ChangeModalOpen } from "../store/AdminReducer"
import { createDevice, fetchDevices, updateDevice } from "../http/deviceApi"
import { AddSneakerAction, GetSneakersAction, PutCartAction } from "../store/SneakersReducer"
import { repActive } from "../store/userReducer"



export function ModalWind(){
    const dispatch = useDispatch()
    const {PutItem} = useSelector(state => state.Sneakers)
    const [ArrayInfo,setArrayInfo] = useState([])
    const [name,setName] = useState(PutItem.name ? PutItem.name : "")
    const [price,setPrice] = useState(PutItem.price ? PutItem.price : 0)
    const [file,setFile] = useState(null)

    const addDevice = async () => {
        try{
            const formData = new FormData()
            formData.append('name',name)
            formData.append('price',`${price}`)
            formData.append('img',file)
            formData.append('info',JSON.stringify(ArrayInfo))
            createDevice(formData).then(data => dispatch(AddSneakerAction(data)))
            dispatch(ChangeModalOpen())
            dispatch(PutCartAction(""))
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    const changeInfo = (key,value,number) => { 
        setArrayInfo(ArrayInfo.map(i => i.number === number ? {...i,[key]:value} : i)) 
    }

    const PutDevice = async () => {
        try{
            const formData = new FormData()
            formData.append('name',name)
            formData.append('price',`${price}`)
            formData.append('img',file)
            formData.append('info',JSON.stringify(ArrayInfo))
            formData.append('id',PutItem.id)
            dispatch(ChangeModalOpen())
            dispatch(PutCartAction(""))
            updateDevice(formData)
            
        }
        catch(e){
            if(e.response.data.message) alert(e.response.data.message);
            else alert(e.message)
        }
    }

    const Exit = () => {
        dispatch(ChangeModalOpen())
        dispatch(PutCartAction("")) 
    }




    return(
<div className="overlay j-a">
    <div className="ModalWind">
        <div className="Row j-c-s-a a-c">
            <h2>{!PutItem ? "Добавить товар" : "Редактировать товар" }</h2>
            <img src="/img/exit.png" width={"4%"} height={"4%"} onClick={() => Exit()}/>
        </div>
        <hr/>

        <form className="column-flex FormAdmin">

            <input type = "text" 
                   name="Device" 
                   placeholder="Введите название товара" 
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <input type = "number"
                   name="Price" 
                   placeholder="Введите стоимость товара"
                   value={price}
                   onChange={e => setPrice(Number(e.target.value))}/>
            <input type = "file" 
                   name="File" 
                   placeholder="Добавьте файл"
                   onChange={ e => setFile(e.target.files[0])}/>

            <div className="Row">
                <hr/>
            </div>
    
            <button type="button" className="buttonDiv"  onClick={() =>  setArrayInfo([...ArrayInfo,{title:'',description:'',number:Date.now()}])}>Добавить новое свойство</button>
                 {ArrayInfo.map((i) => 
                    <div className="Row" key={i.number}>
                        <input 
                            type="text" 
                            style={{width:"35%"}}
                            value={i.title} 
                            name = "name_property" 
                            placeholder="Введите название свойства"
                            onChange = {(e) => changeInfo('title',e.target.value,i.number)}/>
                        <input 
                            style={{width:"35%"}}
                            type="text" 
                            value = {i.description} 
                            name = "info_property" 
                            placeholder="Введите описание свойства"
                            onChange={(e) => changeInfo('description',e.target.value,i.number)}
                        />
                        <button className="buttonBuy" type = "button" onClick={() =>  setArrayInfo(ArrayInfo.filter(obj => obj.number !== i.number))}>Удалить</button>
                    </div>
            )}
         


            
            
            <div className="ButtonContainer"> 
                <button className="buttonBuy" onClick={() => dispatch(ChangeModalOpen())}>Закрыть</button>
                <button  className="buttonBuyClick " onClick={() => { {!PutItem ? addDevice() : PutDevice()}}}>
                    {!PutItem ? "Добавить" : "Редактировать" }
                </button>
            </div>

        </form>


    </div>
</div>)
}