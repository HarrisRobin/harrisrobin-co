import "./App.css"
import React, { Component } from "react"
import Section from "./components/section.component"
import Text from "./components/text.component"
import Logo from "./components/logo.component"

class App extends Component {
  render() {
    return (
      <Section flex={1} flexDirection={["column", "row"]} wrap="wrap">
        <Section
          bg="#201E34"
          width={["100vw", "50vw"]}
          flexDirection="column"
          pl={[2, 3]}
          pt={[2]}
          pb={[2, 3]}
          pr={[2]}
        >
          <Text fontSize={[3, 4]} fontWeight="900" color="#bddfff" mt={[2]}>
            Harris Robin Kalash
          </Text>

          <Text
            fontSize={[2, 3]}
            fontWeight="bold"
            lineHeight={[1.4, 1.6]}
            color="white"
            mt={[2]}
          >
            I'm a Fullstack Developer that spends most of his day working in
            Javascript. I currently divide my time between: running an agency,
            teaching people how to code and taking machine learning courses.
          </Text>

          <Text
            fontSize={[0, 1]}
            color="#bddfff"
            fontWeight="900"
            mt={[2]}
            letterSpacing={3}
          >
            CLIENTS
          </Text>

          <Section style={{ display: "block" }} flex={1} mt={[2]} wrap="wrap">
            <Logo height={["20px", "20px", "30px"]} mr={[2, 2, 3]} mb={[2]} src="images/logos/Real@3x.png" alt="real ventures logo" />
            <Logo height={["20px", "20px", "30px"]} mr={[2, 2, 3]} mb={[2]} src="images/logos/Crew@3x.png" alt="crew logo" />
            <Logo height={["20px", "20px", "30px"]} mr={[2, 2, 3]} mb={[2]} src="images/logos/mylo@3x.png" alt="mylo logo" />
            <Logo height={["20px", "20px", "30px"]} mr={[2, 2, 3]} mb={[2]} src="images/logos/dialogue@3x.png" alt="mylo logo" />
          </Section>
        </Section>
      </Section>
    )
  }
}

export default App
