import React from "react";
import ReactDom from "react-dom";

class ReactLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
  }
  update = () => this.setState({ val: this.state.val + 1 });
  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    console.log("render");
    return <button onClick={this.update}>{this.state.val}</button>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnMount() {
    console.log("componentWillUnMount");
  }
}
class Wrapper extends React.Component {
  mount() {
    ReactDom.render(<ReactLifeCycle />, document.getElementById("a"));
  }
  unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById("a"));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a" />
      </div>
    );
  }
}
export default Wrapper;
