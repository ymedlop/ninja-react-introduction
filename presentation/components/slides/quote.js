import React from "react";
import {
  BlockQuote,
  Quote,
  Cite
} from "spectacle";
import Enhance from './enhance';

const QuoteSlide = (props) => (
  <div>
    <BlockQuote>
      <Quote textSize="1.5em">{props.quote}</Quote>
      <Cite>{props.cite}</Cite>
    </BlockQuote>
  </div>
);

export default Enhance(QuoteSlide);