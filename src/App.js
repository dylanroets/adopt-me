const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Lola",
                animal: "Dog",
                breed: "Goldador",
            }),
            React.createElement(Pet, {
                name: "Skittzens",
                animal: "Cat",
                breed: "Mix Breed",
            }),
            React.createElement(Pet, {
                name: "Lambeau",
                animal: "Dog",
                breed: "Black Labrador",
            }),
        ]
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));