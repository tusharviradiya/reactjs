const heading1 = React.createElement("h1", { id: "title" }, "Tushar Viradiya1");
const heading2 = React.createElement("h2", { id: "title" }, "Tushar Viradiya2");
const heading3 = React.createElement("h3", { id: "title" }, "Tushar Viradiya3");
const heading4 = React.createElement("div", { id: "title" }, [heading1, heading2, heading3]);
console.log(heading4);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading4);