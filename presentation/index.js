// Import React
import React from "react";
import glamorous from "glamorous";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Appear,
  CodePane,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Image,
  Quote,
  Slide,
  Layout,
  Fit,
  Fill,
  S,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  dolls: require("../assets/matryoshka-doll.jpg"),
  logo: require("../assets/React-icon.png"),
  sizes: require("../assets/framework-size.png"),
  pillar: require("../assets/pillar.png"),
  icon: require("../assets/doll-icon.png"),
  planning: require("../assets/planning.png"),
  plan: require("../assets/plan-examp.jpg"),
  cloud: require("../assets/cloud.png")
};

preloader(images);

const BodyOne = glamorous.div({border: '20px solid #fdb417', height: '80vh', backgroundColor: '#ada22f'})

const BodyTwo = glamorous.div({border: '20px solid #cb2040', height: '80vh', width: '105%', backgroundColor: '#FAFAFA'})

const BodyThree = glamorous.div({border: '20px solid #601d53', width: '105%', height: '80vh', backgroundColor: '#fdb417'})

const BodyFour = glamorous.div({border: '20px solid #417686', width: '105%', height: '80vh', backgroundColor: '#cb2040'})

const Header = glamorous.div({border: '10px solid #fdb417', width: '100%', height: '150px'})

const BlockOne = glamorous.div({border: '10px solid #417686', height: '300px', margin: '2em 0'})

const BlockTwo = glamorous.div({border: '10px solid #601d53', height: '300px', margin: '2em 0 2em 1em'})

const Footer = glamorous.div({border: '10px solid #cb2040', width: '100%', height: '150px'})

const TinyCompOne = glamorous.div({border: '10px solid #FAFAFA', width: '15%', height: '100px'})

const TinyCompTwo = glamorous.div({border: '10px solid #601d53', width: '15%', height: '100px'})

const TinyCompThree = glamorous.div({border: '10px solid #417686', width: '15%', height: '100px'})

const theme = createTheme({
  primary: "#417686",
  secondary: "#601d53",
  tertiary: "#fdb417",
  quartenary: "#cb2040",
  quinary: "#ada22f",
  white: "#FAFAFA",
  black: "#424242"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar">

        <Slide transition={["slide"]} bgColor="secondary" align="flex-start">
          <BodyOne>
            <Image
              src={images
              .dolls
              .replace("/", "")}
              height="300px"
              bgColor="quartenary"
              padding="1em"
              margin="10% 60% 10% -10%"/>

            <Heading
              size={1}
              fit
              textColor="white"
              margin="5% 0 20% 15%"
              bgColor="primary"
              padding="20px"
              lineHeight={2}>
              matryoshka-inspired development: the component heart of React
            </Heading>
          </BodyOne>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="flex-start">
          <BodyTwo>
            <Layout>
              <Fill >
                <Heading size={6} textColor="secondary" caps margin="20% 0 0 0">React?</Heading>
                <Image
                  src={images
                  .logo
                  .replace("/", "")}
                  height="100px"/>
                <List padding="0 1em">
                  <ListItem textSize="24px">Created by the Facebook dev team 2013.
                  </ListItem>
                  <ListItem textSize="24px">Is actually a UI library not fully fledged framework
                  </ListItem>
                  <ListItem textSize="24px">Often described as “the V in the MVC structure”</ListItem>
                  <ListItem textSize="24px">main goal is to be fast, simple and scalable</ListItem>
                </List>
              </Fill>

              <Fit>
                <Image
                  src={images
                  .sizes
                  .replace("/", "")}
                  margin="20% 0 0 0"/>
                <Cite>
                  <Link
                    href="https://gist.github.com/Restuta/cda69e50a853aa64912d"
                    textSize="10px"
                    textColor="quinary">
                    https://gist.github.com/Restuta/cda69e50a853aa64912d</Link>
                </Cite>
              </Fit>
            </Layout>
          </BodyTwo>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="flex-start">
          <BodyTwo>
            <Heading size={5} textColor="secondary" margin="5% 0">Main Pillars of React
            </Heading>

            <Layout>
              <Fill>
                <Heading size={6} textColor="black">
                  Props
                </Heading>
                <Image
                  src={images
                  .pillar
                  .replace("/", "")}
                  height="400px"/>
              </Fill>

              <Fill>
                <Heading size={6} textColor="tertiary">
                  Components
                </Heading>
                <Image
                  src={images
                  .pillar
                  .replace("/", "")}
                  height="400px"/>
              </Fill>

              <Fill>
                <Heading size={6} textColor="black">
                  State
                </Heading>
                <Image
                  src={images
                  .pillar
                  .replace("/", "")}
                  height="400px"/>
              </Fill>
            </Layout>
          </BodyTwo>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <BlockQuote>
            <Quote textSize="48px" textColor="white">
              React doesn't help you organize that state, it just says: I know you need to
              deal with state, so let's just call it state and have programmatic ways to set
              and get that state.</Quote>
            <Cite>
              <Link href="https://css-tricks.com/project-need-react/" textColor="tertiary">
                Chris Coyer -
                <S type="italic" textColor="secondary">
                  When Does a Project Need React?</S>
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="black"
          textColor="black"
          align="flex-start">

          <BodyThree>

            <Heading size={6} textColor="primary" caps margin="5% 0 0 0">Components are not new</Heading>
            <Heading size={6} textColor="primary" caps>..but they're what React excels at</Heading>

            <Text margin="5% .5em .5em .5em">
              Other big names in Javascript have something similar.</Text>

            <Text margin=".5em">
              For Angular folks: React components are more than templates, they're more like
              directives.</Text>

            <Text margin=".5em">
              Most similar to Ember components.</Text>

            <Text>
              Vue's are similar but are a function, not a class, & render automatically.</Text>

          </BodyThree>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="quinary"
          textColor="primary"
          align="flex-start">
          <BodyFour>
            <Heading size={6} textColor="tertiary" margin="5% 0 0 0">
              What do we mean by components in React?</Heading>
            <Text textColor="white" margin="5% 0 0 0">
              Straight from the React Docs:</Text>
            <Text textSize="32px" margin="1em" textColor="white" textAlign="justify">
              <S type="italic">Components let you split the UI into independent, reusable
                pieces, and think about each piece in isolation.</S>
            </Text>

            <Text textSize="32px" margin="1em" textColor="white" textAlign="justify">
              <S type="italic">Conceptually, components are like JavaScript functions. They
                accept arbitrary inputs (called "props") and return React elements describing
                what should appear on the screen.</S>
            </Text>

            <Text textColor="black" textSize="24px" margin="2em 0 0 0">Components are NOT web modules.</Text>

          </BodyFour>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="black"
          textColor="primary"
          align="flex-start">
          <Heading size={6} textColor="white" margin="0 0 5% 0">
            So basically...</Heading>

          <Layout>
            <Fill>
              <Header></Header>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <BlockOne></BlockOne>
            </Fill>
            <Fill>
              <BlockTwo></BlockTwo>
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Footer></Footer>
            </Fill>
          </Layout>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="black"
          textColor="primary"
          align="center center">
          <Footer>
            <Layout>

              <Appear><TinyCompOne/></Appear>
              <Appear><TinyCompTwo/></Appear>
              <Appear><TinyCompThree/></Appear>

            </Layout>
          </Footer>

          <Text textColor="white" margin="2em 0 0 0">This is done with a props statement : this.props.children
          </Text>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="black"
          textColor="black"
          align="flex-start">
          <BodyThree>
            <Heading size={6} textColor="secondary" caps>Planning & Structure</Heading>
            <Layout>
              <Fill>
                <Text textSize="28px" textAlign="justify" margin="1em">
                  <S type="italic">
                    The first thing you'll want to do is to draw boxes around every component (and
                    subcomponent) in the mock and give them all names. If you're working with a
                    designer, they may have already done this, so go talk to them!
                  </S>
                </Text>
                <Text textSize="28px" textAlign="justify" margin="1em">
                  <S type="italic">
                    But how do you know what should be its own component? Just use the same
                    techniques for deciding if you should create a new function or object.
                  </S>
                </Text>
              </Fill>

              <Fill>
                <Image
                  src={images
                  .planning
                  .replace("/", "")}
                  margin="20%"/>
              </Fill>
            </Layout>
          </BodyThree>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="black"
          textColor="black"
          align="flex-start">
          <Image
            src={images
            .plan
            .replace("/", "")}
            height="120%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" align="flex-start">
          <BodyOne>
            <Heading size={6} textColor="secondary" caps margin="5% 0 0 0">Benefits of Components</Heading>
            <List margin="5%">
              <ListItem>
                JSX looks a lot like HTML & so it's pretty easy to read
              </ListItem>
              <ListItem>
                SPEED
              </ListItem>
              <ListItem>
                Self-contained = easily maintainable</ListItem>
              <ListItem>
                You can pretty easily use it with frameworks</ListItem>
            </List>
          </BodyOne>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="flex-start">

          <Heading size={6} textColor="white" caps margin="0 0 5% 0">Ok so let's dig
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/comp.example")}
            margin="20% 0 0 0"></CodePane>

          <Text textColor="white" margin="10% 0 0 0">* this is ES6 syntax</Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          align="flex-start">
          <BodyFour>
            <Heading size={6} textColor="white" caps>Types</Heading>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/import.example")}
              margin="5% 0 0 0"></CodePane>
            <Text textColor="black" margin="1em 0 0 0">
              At the most basic level there are two types of components:
            </Text>
            <Text>Class-based</Text>
            <Text>Function</Text>
          </BodyFour>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" align="flex-start">
          <BodyOne>
            <Text>
              The easiest way to choose: do you need lifecycle methods?
            </Text>
          </BodyOne>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          align="flex-start">
          <BodyFour>
            <Heading size={6} textColor="white" caps margin="10% 0 0 0">What about interactivity?
            </Heading>
            <Heading size={6} textColor="white" margin="10% 0 0 0">
              Lifecycle Methods
            </Heading>
          </BodyFour>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          align="flex-start">
          <BodyThree>
            <Text>A lot of the thought behind React's component types goes back to CS
              fundamental binaries
            </Text>
            <Text>
              Stateless vs Stateful
            </Text>
            <Text>
              Pure vs Non-pure</Text>
          </BodyThree>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" align="center center">
          <Heading size={6} textColor="primary" caps>
            One last thing...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" align="center center">
          <Heading size={6} textColor="quartenary">
            These slides are React.
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center">
          <BodyTwo>
            <Heading size={6} margin="20% 0 20% 0">
              <Link href="http://formidable.com/open-source/spectacle/" textColor="black">
                Spectacle by Formidable Labs</Link>
            </Heading>
            <Heading size={6} textColor="secondary" caps>
              Let's take a look...</Heading>
          </BodyTwo>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          textColor="primary"
          align="flex-start">
          <Heading size={6} textColor="secondary">And that's all I have to say about that...</Heading>

          <Image
            src={images
            .icon
            .replace("/", "")}
            margin="10% 0"/>

          <Text>
            Github Repo
            <Link
              href="https://github.com/audoralc/matryoshka-development"
              textColor="secondary">
              https://github.com/audoralc/matryoshka-development</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
