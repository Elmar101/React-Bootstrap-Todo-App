import React from "react";

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
                {this.state.error && <p className="text-danger"> { this.state.error } </p>}
                <form  onSubmit={this.addItemhandleSubmit}>
                    <div className="input-group">  
                        <input className="form-control" type="text" name="textItem" />
                        <div className="input-group-append">
                            <button  className="btn btn-primary" type="submit"> Add Item </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Actions;