// Import React
import React from "react";
import Iframe from 'react-iframe'

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  SlideSet,
  BlockQuote,
  Quote,
  Heading,
  Image,
  Cite,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  react: require("../assets/images/react.png"),
  danview: require("../assets/images/DanView.png"),
  wrong: require("../assets/images/wrong.jpg"),
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

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            Introduction to
          </Heading>
          <Image src='https://raw.githubusercontent.com/ymedlop/website/master/website/static/img/react/react.png'/>
          <Cite>Yeray Medina López</Cite>
        </Slide>

        <SlideSet>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} textColor="secondary">
              What is React.js?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote size={1}>React is a view layer that uses virtual DOM for performance.</Quote>
              <Cite>Someone</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>React can be used as the V in MVC..</Quote>
              <Cite>Someone</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.wrong} />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.danview} />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.react} />
          </Slide>
        </SlideSet>

        <SlideSet>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} textColor="secondary">
              Declarative
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Declarative views make your code more predictable and easier to debug.</Quote>
              <Cite>React Documentation</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Act of programming in languages that conform to the mental model of the developer rather than the operational model of the machine</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={5} textColor="secondary">
              Imperative vs Declarative
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Text>
              Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array
            </Text>
          </Slide>
          <CodeSlide
            size={6}
            transition={["zoom", "fade"]}
              lang="js"
              code={require("raw-loader!../assets/examples/imperative1.example")}
              ranges={[
                { loc: [0, 1], title: "Imperative way" },
                { loc: [0, 2], title: "Init result variable" },
                { loc: [0, 3], title: "Loop our array" },
                { loc: [0, 4], title: "Push every item * 2" },
                { loc: [0, 6], title: "Return result" },
                { loc: [4, 7], image: 'http://vignette4.wikia.nocookie.net/monsterlegends/images/8/83/Obama-not-bad-l.png/revision/latest?cb=20160221181532&path-prefix=es' },
              ]}
          />
          <CodeSlide
            size={6}
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/examples/declarative1.example")}
            ranges={[
              { loc: [0, 1], title: "Declarative way" },
              { loc: [0, 2], title: "Do the Magic" },
              { loc: [4, 3], image: 'http://s2.quickmeme.com/img/96/9663bb227666e5f862c971df66150ed18f2373794ca058310ecbd2479c726d60.jpg' },
            ]}
          />
          <Slide transition={["fade"]} bgColor="primary">
            <Text>
              DOM Example
            </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Iframe
                width="100%"
                height="500px"
                url="//jsfiddle.net/ymedlop/qzttu2av/7/embedded/js,html,result/dark/"
                display="initial"
                position="relative"
                allowFullScreen
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Iframe
              url="https://codesandbox.io/embed/rvxk0E96"
              width="100%"
              height="500px"
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </Slide>
        </SlideSet>

        <SlideSet>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} textColor="secondary">
              Components Based
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</Quote>
              <Cite>React Documentation</Cite>
            </BlockQuote>
          </Slide>
        </SlideSet>
      </Deck>
    );
  }
}
