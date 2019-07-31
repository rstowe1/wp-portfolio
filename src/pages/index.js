import React from "react"
import { Container } from "react-grid-system"


import Layout from "../components/layout"
import Cardito from "../components/cardito"

const aboutMe = 'About Me'

const bodyByMe = 'this is the body again and again'

const IndexPage = () => (
  <Layout>
    <Container>
      <Cardito title={aboutMe} body={bodyByMe}/>
    </Container>
  </Layout>
)

export default IndexPage
