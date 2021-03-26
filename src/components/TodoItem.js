import React from "react";

const TodoItem = (props) => {
   
    return(
        <li className="list-group-item"> 
            <b>{ props.item } </b> 
            <button 
                className="btn btn-sm btn-danger float-right" 
                onClick={ ()=> props.onDeleteItem(props.item) }
            > x 
            </button> 
        </li>
        
    )
}

export default TodoItem;