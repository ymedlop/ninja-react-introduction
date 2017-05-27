// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  SlideSet
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


import {
  ComponentDefinitionSlide,
  TemplateSlide
} from './components/slides/components';
import {
  IntroductionSlide,
  ReactSlide,
  FeaturesSlide,
} from './components/slides';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: require("../assets/images/react.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >

        <SlideSet>
          <Slide transition={["zoom"]} bgColor="primary">
            <IntroductionSlide />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <ReactSlide image={images.react} />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <FeaturesSlide />
          </Slide>
        </SlideSet>

        <SlideSet>
          <Slide transition={["fade"]} bgColor="primary">
            <ComponentDefinitionSlide />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <TemplateSlide />
          </Slide>
        </SlideSet>

        <CodeSlide
          size={6}
          transition={["zoom", "fade"]}
            lang="js"
            code={require("raw-loader!../assets/examples/imperative.example")}
            ranges={[
                { loc: [0, 270], title: "Programación imperativa" },
            ]}
        />
      </Deck>
    );
  }
}
