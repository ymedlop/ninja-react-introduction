import React from "react";
import {
  Heading,
  Text
} from "spectacle";

export class TemplateSlide extends React.Component {
    render() {
        return (
            <div>
              <Heading size={5} textColor="secondary">Comenzando Con React y JSX</Heading>
              <Text size={6} textColor="secondary">
                JSX, and it is a syntax extension to JavaScript. JSX produces React "elements".
              </Text>
            </div>
        );
    }
}
