import React from "react";
import {
  Heading,
  Image,
} from "spectacle";
import Enhance from './enhance';

const ReactSlide = (props) => (
  <div>
    <Heading size={3} textColor="primary">
      What is React.js?
    </Heading>
    <Image src={props.image}/>
  </div>
);

export default Enhance(ReactSlide);