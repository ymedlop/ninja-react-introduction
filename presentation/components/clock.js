import React from "react";

const styles = {
  'zIndex': 999999,
  'position': 'fixed',
  'color': 'red',
  'textAlign': 'right',
  'width': '100%'
};

const Clock = (props) => {
  const countTime = new Date(props.count);
  const minutes = countTime.getMinutes();
  const seconds = countTime.getSeconds();
  const getFormat = unit => unit < 10 ? `0${unit}` : unit;
  return (
    <div style={styles}>
      <span>
        {`${getFormat(minutes)}:${getFormat(seconds)}`}
      </span>
    </div>
  );
};

export default Clock;