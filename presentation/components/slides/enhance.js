import React from "react";
import { Slide } from "spectacle";

const Enhance = WrappedComponent => class extends React.Component {
  componentWillEnter(cb) {
    this.refs.slide.componentWillEnter(cb)
  }
  componentWillAppear(cb) {
    this.refs.slide.componentWillAppear(cb)
  }
  componentWillLeave(cb) {
    this.refs.slide.componentWillLeave(cb)
  }
  render() {
    const {...rest} = this.props;
    return (
      <Slide
        {...rest}
        ref='slide'
        bgColor="secondary"
        textColor="primary"
      >
        <WrappedComponent {...this.props} />
      </Slide>
    );
  }
};

export default Enhance;