import React from "react";
import Header from './Header';
import TodoList from './TodoList';
import Actions from './Actions';
class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ["item 1", "item 2", "item 3", "item 4"]
        }
        this.clearItem = this.clearItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() { 
        const json = localStorage.getItem("items");
        const items =  JSON.parse(json);
        if(items){
            this.setState({ items: items })
        }
       // console.log(items);

    }

    componentDidUpdate(prevProps,prevState){
       if( prevState.items.length !== this.state.items.length ){
           const str = JSON.stringify(this.state.items)
           localStorage.setItem('items',str);
       }
    }

    componentWillUnmount(){
        console.log(' Komponent silindikde')
    }
    clearItem(){
        this.setState({ items: [] })
    }
    addItem(item){
        if(!item){
            return " Item Elave edin";
        }else if( this.state.items.indexOf(item) > -1 ){
            return " Item Listede var";
        }else {
            this.setState(prevState => {
                return { items: [...prevState.items,item]}
            })
        }
    }
    deleteItem(_item){
       this.setState( prevState => { 
           const arr = prevState.items.filter(item => { return item !== _item })
           return { items: arr}
        })
    }
    render(){
        const app = {
            title: "Iphone",
            description: " Telefon" 
          };

        return(
            <div className="container by-5"> 

                <div className="card">
                    
                    <div className="card-header">
                        <Header title = { app.title } description = { app.description }/> 
                    </div>

                    <div className="card-body">
                        <TodoList 
                                items = { this.state.items } 
                                onClearItem = {this.clearItem} 
                                onDeleteItem ={this.deleteItem}
                        /> 
                    </div>

                    <div className="card-footer">
                         <Actions onAddItem = { this.addItem} />
                    </div>
                </div>
                
             </div>
        )
    }

    
}
export default TodoApp;