var root = document.getElementById('root');
var number = 0;

var addOneHandler = () => {
    number++;
    renderApp();
    console.log("add one");
}

var minusOneHandler = () => {
    number--;
    renderApp();
    console.log("minus one");
}

function renderApp(){
    var template =  <div>
                        <h1 id="header">number:  {number} </h1>
                        <button onClick={ addOneHandler }> + </button>
                        <button onClick={ minusOneHandler }> - </button>
                    </div>;

    ReactDOM.render(template , root);
}

renderApp();
