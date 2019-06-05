import React from "react";

const Header = props => (
  <div>
    <header className="top">
      <h3>key metric</h3>
      <h2 className="tagline">{props.tagline}</h2>
    </header>
  </div>
);

export default Header;
