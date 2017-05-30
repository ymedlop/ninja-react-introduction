import React from "react";
import {
  Deck,
  Slide,
  BlockQuote,
  Quote,
  Heading,
  Image,
  Cite,
  Text,
  List,
  ListItem
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import createTheme from "spectacle/lib/themes/default";
import UserInfo from './components/userinfo';

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const Slides = (props) => (
    <Deck
      transition={["fade"]}
      transitionDuration={500}
      theme={theme}
    >
      <Slide bgColor="secondary">
        <Heading size={6} fit caps lineHeight={1} textColor="primary">
          Introduction to
        </Heading>
        <Image src={props.images.logo} />
        <Text textColor="primary">@ymedlop</Text>
      </Slide>

      <Slide bgColor="secondary">
        <UserInfo user={props.user} />
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          What is React.js?
        </Heading>
        <Image src={props.images.introduction}/>
      </Slide>

      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">React is a view layer that uses virtual DOM for performance.</Quote>
          <Cite>Someone</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">React can be used as the V in MVC..</Quote>
          <Cite>Someone</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary">
        <Image src={props.images.reactold} />
      </Slide>
      <Slide bgColor="secondary">
        <Image src={props.images.danview} />
      </Slide>
      <Slide bgColor="secondary">
        <Image src={props.images.reactnew} />
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Core Concepts of React.js
        </Heading>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          JSX
        </Heading>
      </Slide>

      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">In React, your entire application’s UI is built using function composition and JSX is an abstraction over those functions.</Quote>
          <Cite>Someone</Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Unidirectional Data Flow
        </Heading>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Reconciliation
        </Heading>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          The algorithm React uses to diff one tree with another to determine which parts need to be changed.
        </Heading>
      </Slide>


      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Declarative
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">Declarative views make your code more predictable and easier to debug.</Quote>
          <Cite>React Documentation</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">Act of programming in languages that conform to the mental model of the developer rather than the operational model of the machine</Quote>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size={5} textColor="primary">
          Imperative vs Declarative
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <Text textSize="1.5em">
          Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array
        </Text>
      </Slide>
      <CodeSlide
        sizeList={6}
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
        lang="js"
        code={require("raw-loader!../assets/examples/declarative1.example")}
        ranges={[
          { loc: [0, 1], title: "Declarative way" },
          { loc: [0, 2], title: "Do the Magic" },
          { loc: [4, 3], image: 'http://s2.quickmeme.com/img/96/9663bb227666e5f862c971df66150ed18f2373794ca058310ecbd2479c726d60.jpg' },
        ]}
      />
      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          DOM Example
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <iframe
          width="100%"
          height="500px"
          src="//jsfiddle.net/ymedlop/qzttu2av/7/embedded/js,html,result/dark/"
          style={{ position: 'relative', display: 'initial' }}
          allowFullScreen
          frameBorder="0"
        />
      </Slide>
      <Slide bgColor="secondary">
        <iframe
          src="https://codesandbox.io/embed/rvxk0E96"
          width="100%"
          height="500px"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          style={{ position: 'relative', display: 'initial' }}
          allowFullScreen
          frameBorder="0"
        />
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Components Based
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</Quote>
          <Cite>React Documentation</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          Two types of data that control a component.
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Props
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">Props are set by the parent and they are fixed throughout the lifetime of a component.</Quote>
          <Cite>React Documentation</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">
            Any component that receives props should consider that data immutable and owned by the parent
          </Quote>
          <Cite>Brad Westfall from css tricks</Cite>
        </BlockQuote>
      </Slide>
      <CodeSlide
        size={6}
        lang="jsx"
        code={require("raw-loader!../assets/examples/props2.example")}
        ranges={[
          { loc: [0, 273], title: "React parent component" },
        ]}
      />
      <CodeSlide
        size={6}
        lang="jsx"
        code={require("raw-loader!../assets/examples/props1.example")}
        ranges={[
          { loc: [0, 273], title: "React component" },
        ]}
      />
      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          State
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          The state of a component is managed by it. The state of a component may change over the life of the component.
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <iframe
          src="https://codesandbox.io/embed/rvxk0E96"
          width="100%"
          height="500px"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          style={{ position: 'relative', display: 'initial' }}
          allowFullScreen
          frameBorder="0"
        />
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          Be careful. The State make the components.
        </Heading>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.0em">
            <List textSize="1.0em" padding="0">
              <ListItem textSize="1.0em">Difficult to test</ListItem>
              <ListItem textSize="1.0em">Difficult to reason about</ListItem>
              <ListItem textSize="1.0em">Easy to put business logic in the component</ListItem>
              <ListItem textSize="1.0em">Difficult to share information to others.</ListItem>
            </List>
          </Quote>
          <Cite>Cam Jackson from 9 things every React.js beginner should know</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          <Image src={props.images.panic} />
        </Heading>
      </Slide>
      <Slide bgColor="secondary">
        <List>
          <ListItem textSize="1em">Presentational Components</ListItem>
          <ListItem textSize="1em">Container Components</ListItem>
        </List>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Presentational Components
        </Heading>
        <Text textSize="1em">
          Stateless components
        </Text>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">
            They have no idea how the props they received came to be. They have no idea about state.
          </Quote>
          <Cite>Brad Westfall from css tricks</Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Container Components
        </Heading>
        <Text textSize="1em">
          Stateful components
        </Text>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">They serve as a intermediary between Presentational Components and the rest of the application</Quote>
          <Cite>Brad Westfall from css tricks</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote textSize="1.5em">Container Components can be created just like any other React component</Quote>
          <Cite>Brad Westfall from css tricks</Cite>
        </BlockQuote>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Bonus Track
        </Heading>
      </Slide>

      <Slide bgColor="secondary">
        <Heading size={6} textColor="primary">
          Flux is a pattern for managing data flow in your application. The most important concept is that data flows in one direction
        </Heading>
      </Slide>

      <Slide bgColor="secondary">
        <Image src={props.images.flux} />
      </Slide>

      <Slide bgColor="primary">
        <Image src={props.images.yoda}/>
      </Slide>

      <Slide bgColor="primary">
        <Heading size={6} fit caps lineHeight={1} textColor="secondary">
          Congratulations you know React.js!!
        </Heading>
        <Image src={props.images.end}/>
      </Slide>

      <Slide bgColor="primary">
        <Heading size={9} fit caps lineHeight={1} textColor="primary">
          Want to know more ?
        </Heading>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QW5TE4vrklU" frameborder="0" allowfullscreen></iframe>
      </Slide>
    </Deck>
);

export default Slides;