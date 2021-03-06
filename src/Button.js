import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <th>
        <input
          type="button"
          value={this.props.title}
          className={this.props.id}
        />
      </th>
    );
  }
}

export default Button;
