import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (
  <h1 className="head" tabindex="5">
    Namaste React using JSX
  </h1>
);

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
const number = 1000;
// Composing Comopnents
const HeaderComponent = () => {
  return (
    <div>
      {number}
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
