import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title", key: "h1" }, "Tushar Viradiya1");
const heading2 = React.createElement("h2", { id: "title", key: "h2" }, "Tushar Viradiya2");
const heading3 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
const heading4 = React.createElement("div", { id: "title", tushar:"viradiya" }, [heading1, heading2, heading3]);
const root = createRoot(document.getElementById("root"));
console.log("test", createRoot);
root.render(heading4);

//this app.js file not just normal js file but also react js file this is module file.