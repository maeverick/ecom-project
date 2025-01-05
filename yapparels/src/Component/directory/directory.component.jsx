import React from "react";
import "./directory.style.css";
import { Link } from "react-router-dom";
import MenuItem from "../menu item/menu-item.component";
import { sections } from "./072 directory.data";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory">
        <h1>Featured Products</h1>
        <div className="directory-menu">
          {this.state.sections.map((section) => {
            const { title, id, ...others } = section;
            return <MenuItem key={id} title={title} {...others} />;
          })}
        </div>
      <span className="view">
      <Link  to={"/products"}>VIEW ALL PRODUCTS</Link>
      </span>
      </div>
    );
  }
}
export default Directory;
