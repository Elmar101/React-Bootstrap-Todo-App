import React from "react";
import TodoItem from './TodoItem';
const TodoList = (props) => {

    return(
        <div>
            <ul className="list-group">
            {
                props.items.map( (item, index)=>{
                    return(  
                        <TodoItem 
                            item={item}
                            key={index} 
                            onDeleteItem={props.onDeleteItem}
                        />
                    )
                })
            }
            </ul>
            {
                props.items.length>0 
                ?
                <p> 
                <button className="btn btn-outline-danger float-right btn-sm mt-3" 
                        onClick={props.onClearItem}
                > 
                    Clear Item
                </button> 
            </p>
            : <p className="alert alert-warning p-3"> item elave edin zehmet olmazsa ....</p>

            }
            
        </div>
    )
   
}
export default TodoList;