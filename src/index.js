import React from "react";
import { render } from "react-dom";
import ReactLifeCycle from "./ReactLifeCycle";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ReactLifeCycle name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
