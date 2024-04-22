import React from "react";
import ReactDOM, { createRoot} from "react-dom/client";
// import { createRoot } from "react-dom/client";

//this is old thing now we not use this thing in our react app
// const heading1 = React.createElement("h1", { id: "title", key: "h1" }, "Tushar Viradiya1");
// const heading2 = React.createElement("h2", { id: "title", key: "h2" }, "Tushar Viradiya2");
// const heading3 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
// const heading44 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
// const heading5 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
// const heading6 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
// const heading7 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");
// const heading8 = React.createElement("h3", { id: "title", key: "h3" }, "Tushar Viradiya3");

// const heading4 = React.createElement("div", { id: "title", tushar:"viradiya" }, [heading1, heading2, heading3]);
// // const heading5 = (<h1 id="title">Tushar Viradiya</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("test", createRoot);
// root.render(heading4);

// // funcional componet and class componet
// const App2 = (
//     <div>hello world</div>// this is jsx and when we pass this we need to use </>
// )
// const App1 = () => {
//     return <h1>Tushar Viradiya</h1>;//this is functional componet and when we render we pass the name 
// }

//this app.js file not just normal js file but also react js file this is module file.

const Title = () => (
        <a href="/">
            <img className="logo" src="data:image/jpeg;base64,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" alt="logo"/>
        </a>
)

const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const burgerKing = {
    image: "https://source.unsplash.com/random",
    name: "burger king",
    cuisine: ["burger", "American"],
    rating: 4.2
}

const ReastroCard = (props) => {
    return (
        <div className="card">
            <img src={burgerKing.image} alt="image"/>
            <h3>{burgerKing.name}</h3>
            <h4>{burgerKing.cuisine.join(", ")}</h4>
            <h5>Rating: {burgerKing.rating}</h5>
        </div>
    );
}

const Body = () => {
    return (
        <div class="body-card">
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
            <ReastroCard/>
        </div>
    );
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

const AppLayout = () => {
    return (
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
}

const roor = ReactDOM.createRoot(document.getElementById("root"));
roor.render(<AppLayout/>);