import React from "react";

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <p>HMR should keep the text input above when a React component and styles are updated.</p>
    );
  }

}
