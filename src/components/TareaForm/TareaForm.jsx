import { useState } from "react"

export function TareaForm({item,onUpdate,onDelete}){
    const [edit,setEdit]=useState(false);

    function FormEdit(){
        const [valorNuevo,setValorNuevo]=useState(item.title);

        function handleSubmit(event){
            event.preventDefault();
        }
        function handleChange(event){
            const value=event.target.value;
            setValorNuevo(value)
        }
        function handleUpdateClick(){
            onUpdate(item.id,valorNuevo);
            setEdit(false);
        }
      
        return(
            <form className="FormTarea update" onSubmit={handleSubmit}>
                <input className="inputTarea updateInput" type="text" value={valorNuevo} onChange={handleChange} onSubmit={handleSubmit}/>
                <div className="buttonContainer">
                <button className="button" onClick={handleUpdateClick}>Actualizar</button>
                </div>
                
            </form>
        )
    }
    function Form(){
        return(
            <div className="FormTarea">
                {item.title}
                <div className="buttonsAll">
                    <div className="buttonContainer">
                        <button className="button" onClick={()=>setEdit(true)}>Actualizar</button>
                    </div>
                    <div className="buttonContainer">
                        <button className="button" onClick={()=>onDelete(item.id)}>Eliminar</button>
                    </div>
                </div>
               
             </div> 
        )
    }
    return(
            <div className="cotainer">
                { edit?<FormEdit />:<Form />}
            </div>
        
    )
}