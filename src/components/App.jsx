import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Node from "./Node";
const App = () => {
  return (
    <div>
      <h1>
        <Header />
        <Node />
        <Node />
        <Node />
        <Node />
        <Footer />
      </h1>
    </div>
  );
};
export default App;
