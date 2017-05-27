import React from "react";
import {
  Image
} from "spectacle";

export class ReactSlide extends React.Component {
    render() {
        const { image } = this.props;
        return (
            <div>
              <Image src={image} />
            </div>
        );
    }
}
