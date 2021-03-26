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
        console.log(items);

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
            <div> 
                <Header title = { app.title } description = { app.description }/> 

                <TodoList 
                    items = { this.state.items } 
                    onClearItem = {this.clearItem} 
                    onDeleteItem ={this.deleteItem}/> 

                <Actions onAddItem = { this.addItem} />
             </div>
        )
    }

    
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1> {this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class TodoList extends React.Component {

    render(){
        return(
            <div>
                <ul>
                {
                    this.props.items.map( (item, index)=>{
                        return(  
                            <TodoItem 
                                item={item}
                                key={index} 
                                onDeleteItem={this.props.onDeleteItem}
                            />
                        )
                    })
                }
                </ul>
                <p> <button onClick={this.props.onClearItem}> Clear Item</button> </p>
            </div>
        )
    }
}

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.deleteItemHandler = this.deleteItemHandler.bind(this);
    }
    deleteItemHandler(){
        this.props.onDeleteItem(this.props.item);
    }
    render(){
        return(
            <li> 
                <b>{ this.props.item } </b> 
                <button style={{ marginLeft: '15px'}} onClick={ this.deleteItemHandler }> x </button> 
            </li>
           
        )
    }
}

class Actions extends React.Component {
    constructor(props){
        super(props);
        this.state = {  error: ''}
       this.addItemhandleSubmit = this.addItemhandleSubmit.bind(this);
    }
    addItemhandleSubmit (e) {
        e.preventDefault();
        const item = e.target.elements.textItem.value.trim();
        const err = this.props.onAddItem(item);
        this.setState({ error: err })
        e.target.elements.textItem.value = '';
    };
    render(){
        return( 
            <div>
                {this.state.error && <p> { this.state.error } </p>}
                <form  onSubmit={this.addItemhandleSubmit}>
                    <input type="text" name="textItem" />
                    <button type="submit"> Add Item </button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<TodoApp/>, document.getElementById('root'));