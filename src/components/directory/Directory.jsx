import React, { Component } from "react";

import MenuItem from "../menu-item/MenuItem";

import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          size: "small"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          size: "small"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          size: "small"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/pWf0vvk/women.png",
          id: 4,
          size: "big"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/LxRcptm/men.png",
          id: 5,
          size: "big"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
