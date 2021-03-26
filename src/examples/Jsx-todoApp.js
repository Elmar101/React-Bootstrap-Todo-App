const root = document.getElementById("root");

const app = {
  title: "Iphone",
  description: " Telefon",
  items: ["item 1", "item 2"],
};

const handleSubmit = (e) => {
  e.preventDefault();
  var item = e.target.elements.textItem.value;
  if (item) {
    app.items.push(item);
    e.target.elements.textItem.value = "";
    renderApp();
  }
};
const clearItemHandler = () => {
  app.items = [];
  renderApp();
};
const renderApp = () => {
  var template = (
    <div>
      <h1 id="header"> {app.title} </h1>
      <div> {app.description} </div>
      {
        <ul>
          {app.items.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      }
      <p>
        {" "}
        <button onClick={clearItemHandler}> Clear Item</button>
      </p>
      <p>{app.items.length}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="textItem" />
        <button type="submit"> Add Item </button>
      </form>
    </div>
  );

  ReactDOM.render(template, root);
}
renderApp();