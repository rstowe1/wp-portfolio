import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  body, html{
    background: rgb(220,220,220);
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles/>
    <Header/>
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

export default Layout