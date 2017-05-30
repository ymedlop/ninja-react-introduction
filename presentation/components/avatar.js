import React from "react";
import {
  Image,
} from "spectacle";

export default (props) => (
  <div className="avatar">
    <Image
      width="70px"
      height="70px"
      src={props.photo}
      style={{ 'borderRadius': '50%', 'border': '3px solid #FFF', 'boxShadow': '0 0 1px 1px rgba(0,0,0,.3)' }}
    />
  </div>
);