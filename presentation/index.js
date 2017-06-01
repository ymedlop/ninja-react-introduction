import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import Clock from './components/clock';
import QA from './qa';
import Slides from './slides';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactold: require("../assets/images/reactold.png"),
  reactnew: require("../assets/images/reactnew.png"),
  danview: require("../assets/images/DanView.png"),
  wrong: require("../assets/images/wrong.jpg"),
  end: require("../assets/images/end.jpg"),
  introduction: require("../assets/images/introduction.jpg"),
  panic: require("../assets/images/panic.jpg"),
  flux: require("../assets/images/flux.png"),
  yoda: require("../assets/images/yoda.jpg"),
  avatar: require("../assets/images/avatar.jpg"),
  github: require("../assets/images/github.png"),
  linkedin: require("../assets/images/linkedin.png"),
  logo: require("../assets/images/logo.png"),
  qa: require("../assets/images/qa.jpg"),
  blog: require("../assets/images/blog.png"),
  twitter: require("../assets/images/twitter.png"),
  life: require("../assets/images/life.png"),
  mvc: require("../assets/images/mvc.png"),
};

preloader(images);

const user = {
  photo: images.avatar,
  name: 'Yeray Medina López',
  company: '@BBVA PaaS Studio',
  social: [
    {
      name: 'github',
      link: 'https://github.com/ymedlop',
      photo: images.github
    },
    {
      name: 'linkdin',
      link: 'https://www.linkedin.com/in/ymedlop',
      photo: images.linkedin
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/ymedlop',
      photo: images.twitter
    },
    {
      name: 'blog',
      link: 'https://ymedlop.es',
      photo: images.blog
    },
  ]
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2400000
    };
    this.timer = false;
    this.updateCount = this.updateCount.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.updateCount, 1000)
  }
  componentWillUpdate(nextProps, nextState) {
    nextState.count === 0 && clearInterval(this.timer);
  }
  updateCount() {
    this.setState(prevState => ({ count: (prevState.count - 1000) }));
  }
  renderContent() {
    const { count } = this.state;
    if (count === 0) {
      return <QA image={images.qa} />;
    }
    return <Slides user={user} images={images} />;
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <Clock count={count} />
        {this.renderContent()}
      </div>
    );
  }
}
