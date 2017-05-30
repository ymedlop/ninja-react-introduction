import React from "react";
import {
  Heading,
  Image,
  Text,
} from "spectacle";
import Enhance from './enhance';

const IntroSlide = (props) => (
  <div>
    <Heading
      size={6}
      fit caps
      lineHeight={1}
      textColor="primary"
    >
      Introduction to
    </Heading>
    <Image src={props.image} />
    <Text textColor="primary">@ymedlop</Text>
  </div>
);

export default Enhance(IntroSlide);