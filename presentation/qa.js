import React from "react";

const styles = {
  'backgroundColor': '#1F2022',
  'width': '100%',
  'height': '100%',
  'position': 'absolute',
  'textAlign': 'center'
};
const stylesImg = {
  'top': '25%',
  'position': 'relative'
};

const QA = (props) => (
  <div style={styles}>
    <img style={stylesImg} src={props.image} />
  </div>
);

export default QA;