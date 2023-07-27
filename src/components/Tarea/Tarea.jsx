import React, { useState } from "react";
import { TareaForm } from "../TareaForm/TareaForm";


export function Tarea(){
    //Estados
    const [title,setTitle]=useState("");
    const [tareas,setTareas]=useState([]);

    //Base de la aplicacion
    function handleClick(event){
        event.preventDefault(); 
        setTitle("Gabriel")       
    }
    function handleChange(event){
        const valorActualInput=event.target.value;
        setTitle(valorActualInput)
    }


    function handleSubmit(event){
        event.preventDefault(); 
     

        const newTarea={
            id:crypto.randomUUID(),
            title:title,
            completed:false
        }

       
        const temp=[...tareas];
       
            temp.unshift(newTarea);
            setTareas(temp);
            console.log(temp);
        
       

    }

  /*   //ComponenteModal 
    function Modal(){

    } */



    function handleUpdate(id,value){
        const temp=[...tareas];
        const item=temp.find(item=>item.id==id);
        item.title=value;
        setTareas(temp);
    }
    function handleDeleteTarea(id){
        const temp=tareas.filter(item=>item.id!=id);
        setTareas(temp);
    }
    return(
        
        <div className="container">
                <form onSubmit={handleSubmit} className="formTareas">

                    <input type="text" placeholder="Tu tarea" className="inputTarea" value={title} onChange={handleChange}/>
                    <input className="buttonCreate" type="submit" value="Crear Tarea"  />
                   
            
                </form>
                {
                    tareas.map((item)=>(
                       < TareaForm key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDeleteTarea}/>
                    ))
                }
        </div>
    
        

    )
}