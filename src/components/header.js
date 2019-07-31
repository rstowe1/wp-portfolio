import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 16px 16px;
`

const Header = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Main Menu"
        }
      }){
        edges{
          node{
            name
            items{
              title
              object_slug
            }
          }
        }
      }
    }
  `} render={props => (
    <MainMenuWrapper>

      <MainMenuInner>
      <MenuItem to='/'>About</MenuItem>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <MenuItem to={`/${item.object_slug}`} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )}/>
)

export default Header
