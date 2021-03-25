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



function trick(){
    var element = (
        <>
            <h1>Tarix : {new Date().toLocaleTimeString()}</h1>
        </>
    );
    ReactDOM.render(element , root);
}
setInterval(()=>{trick();},1000)


