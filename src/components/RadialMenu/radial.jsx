import React from "react";
import "./radial.scss";

export class RadialMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  _clickButton = (ev) => {
    ev.stopPropagation();
    if (!this.state.open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  _clickWrapper = (ev) => {
    ev.stopPropagation();
  };

  // TODO: add text above menu for each li when hover and then active.
  render() {
    return (
      <div className="component">
        <button
          className="cn-button"
          id="cn-button"
          onClick={this._clickButton}
        >
          {this.state.open ? "-" : "+"}
        </button>
        <div
          className={`cn-wrapper ${this.state.open ? "opened-nav" : ""}`}
          id="cn-wrapper"
          onClick={this._clickWrapper}
        >
          <ul>
            <li>
              <a href="#">
                <span className="icon-picture"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-headphones"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-home"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-facetime-video"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-envelope-alt"></span>
              </a>
            </li>
          </ul>
        </div>
        <div
          id="cn-overlay"
          className={`cn-overlay ${this.state.open ? "on-overlay" : ""}`}
        ></div>
      </div>
    );
  }
}
