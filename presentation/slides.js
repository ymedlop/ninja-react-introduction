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
  ListItem,
  SlideSet,
  CodePane,
  Link
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import createTheme from "spectacle/lib/themes/default";
import {
  IntroSlide,
  ReactSlide,
  UserSlide,
  QuoteSlide
} from './components/slides';

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
      transition={["fade", "zoom"]}
      transitionDuration={500}
      theme={theme}
    >
      <SlideSet>
        <IntroSlide image={props.images.logo} />
        <UserSlide user={props.user} />
      </SlideSet>

      <SlideSet>
        <ReactSlide image={props.images.introduction} />
        <QuoteSlide quote="React is a view layer that uses virtual DOM for performance." cite="Someone" />
        <QuoteSlide quote="React can be used as the V in MVC." cite="Someone" />
        <Slide bgColor="secondary">
          <Image width="100%" src={props.images.reactold} />
        </Slide>
        <Slide bgColor="secondary">
          <Image width="100%" src={props.images.danview} />
        </Slide>
        <Slide bgColor="secondary">
          <Image width="100%" src={props.images.mvc} />
        </Slide>
        <Slide bgColor="secondary">
          <Image width="100%" src={props.images.reactnew} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Core Concepts
          </Heading>
        </Slide>
      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            JSX
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Text textColor="primary" textSize="1.0em">
            JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.
          </Text>
        </Slide>
        <QuoteSlide
          quote="In React, your entire application’s UI is built using function composition and JSX is an abstraction over those functions."
          cite="Someone"
        />
      </SlideSet>

      <Slide bgColor="secondary">
        <Heading size={3} textColor="primary">
          Unidirectional Data Flow
        </Heading>
      </Slide>

      <SlideSet>
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
      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Declarative
          </Heading>
        </Slide>
        <QuoteSlide
          quote="Declarative views make your code more predictable and easier to debug."
          cite="React Documentation"
        />
        <Slide bgColor="secondary">
          <Heading size={5} textColor="primary">
            HOW vs WHAT
          </Heading>
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
      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Components Based
          </Heading>
        </Slide>
        <QuoteSlide
          quote="Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."
          cite="React Documentation"
        />
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
        <QuoteSlide
          quote="Props are set by the parent and they are fixed throughout the lifetime of a component."
          cite="React Documentation"
        />
        <QuoteSlide
          quote="Any component that receives props should consider that data immutable and owned by the parent"
          cite="Brad Westfall from css tricks"
        />
        <Slide bgColor="secondary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/props.example")}
          />
        </Slide>
        <Slide bgColor="secondary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/props1.example")}
          />
        </Slide>
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
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/state.example")}
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
          <Heading size={6} textColor="primary">
            Be careful. The State make the components.
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="1.0em">
              <List textSize="1.0em" padding="0">
                <ListItem textSize="1.0em" style={{ 'listStyleType': 'none' }}>Difficult to test</ListItem>
                <ListItem textSize="1.0em" style={{ 'listStyleType': 'none' }}>Difficult to reason about</ListItem>
                <ListItem textSize="1.0em" style={{ 'listStyleType': 'none' }}>Easy to put business logic in the component</ListItem>
                <ListItem textSize="1.0em" style={{ 'listStyleType': 'none' }}>Difficult to share information to others.</ListItem>
              </List>
            </Quote>
            <Cite>Cam Jackson from 9 things every React.js beginner should know</Cite>
          </BlockQuote>
        </Slide>
      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Component Lifecycle
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary">
            The life cycle of a component is divided into three states
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="primary">
            Two handlers for each state, "will" function will be calling before the state, "did" function will be calling after entering the state.
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Image width="100%" height="500px" src={props.images.life} />
        </Slide>
      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Composition
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Text textSize="1em" textColor="primary">
            React components can make use of other React components.
          </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            Presentational Components
          </Heading>
        </Slide>
        <QuoteSlide
          quote="They have no idea how the props they received came to be. They have no idea about state."
          cite="Brad Westfall from css tricks"
        />
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Container Components
          </Heading>
        </Slide>
        <QuoteSlide
          quote="They serve as a intermediary between Presentational Components and the rest of the application"
          cite="Brad Westfall from css tricks"
        />
        <QuoteSlide
          quote="Container Components can be created just like any other React component"
          cite="Brad Westfall from css tricks"
        />
        <Slide bgColor="secondary" textColor="primary">
          <iframe
            width='100%'
            height='500px'
            scrolling='no'
            title='gwZbYa'
            src='//codepen.io/gaearon/embed/gwZbYa/?height=265&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/gaearon/pen/gwZbYa/'>gwZbYa</a> by Dan Abramov (<a href='https://codepen.io/gaearon'>@gaearon</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Pattern HOC
          </Heading>
        </Slide>
        <QuoteSlide
          quote="They are a pattern that emerges from React's compositional nature."
          cite="React Documentation"
        />
        <QuoteSlide
          quote="A higher-order component is a function that takes a component and returns a new component."
          cite="React Documentation"
        />
        <Slide bgColor="secondary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/hoc.example")}
          />
        </Slide>
        <Slide bgColor="secondary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/hoc1.example")}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Bonus Track
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Recompose
          </Heading>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
            <List textSize="1.0em" padding="0">
              <ListItem textSize="1.0em" style={{ 'listStyleType': 'none' }}>
                <Link
                  href="https://github.com/acdlite/recompose"
                  target="blank"
                  textColor="primary"
                >
                  Recompose
                </Link>
                <Link
                  href="https://egghead.io/lessons/react-compose-multiple-higher-order-components-together-using-recompose"
                  target="blank"
                  textColor="primary"
                >
                  EggHead course
                </Link>
                <Link
                  href="https://github.com/timkindberg/egghead-recompose"
                  target="blank"
                  textColor="primary"
                >
                  Egghead course repo
                </Link>
              </ListItem>
            </List>
        </Slide>

      </SlideSet>

      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Dev Tools
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <List textSize="1.0em" padding="0">
            <ListItem textSize="1.0em">
              <Link
                href="https://yarnpkg.com/lang/en/"
                target="blank">
                Yarn
              </Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link
                textColor="primary"
                href="https://webpack.github.io/"
                target="blank">
                Webpack
              </Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link
                textColor="primary"
                href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
                target="blank"
              >
                React Developer Tools
              </Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link
                textColor="primary"
                href="https://github.com/airbnb/javascript/blob/master/react/README.md"
                target="blank"
              >
                Airbnb React/JSX Style Guide
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Testing
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <List textSize="1.0em" padding="0">
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://facebook.github.io/jest/" target="blank">Jest</Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://github.com/airbnb/enzyme" target="blank">Enzyme</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            CSS
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <List textSize="1.0em" padding="0">
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://github.com/threepointone/glamor" target="blank">Glamour</Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://github.com/gajus/react-css-modules" target="blank">CSS Modules</Link>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            React Libraries
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <List textSize="1.0em" padding="0">
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://github.com/ReactTraining/react-router" target="blank">React Router</Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="http://www.material-ui.com" target="blank">React Material</Link>
            </ListItem>
            <ListItem textSize="1.0em">
              <Link textColor="primary" href="https://github.com/FormidableLabs/spectacle" target="blank">Spectacle</Link>
            </ListItem>
          </List>
        </Slide>
      </SlideSet>


      <SlideSet>
        <Slide bgColor="secondary">
          <Heading size={6} fit caps lineHeight={1} textColor="primary">
            Congratulations you know React.js!!
          </Heading>
          <Image src={props.images.end}/>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={props.images.yoda}/>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={9} fit caps lineHeight={1} textColor="primary">
            React Europe Keynote 2017
          </Heading>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QW5TE4vrklU" frameborder="0" allowfullscreen></iframe>
        </Slide>
      </SlideSet>

      <SlideSet>
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
          <Image src={props.images.flux} width="100%"/>
        </Slide>
      </SlideSet>
    </Deck>
);

export default Slides;