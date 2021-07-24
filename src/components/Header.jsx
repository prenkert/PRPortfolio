import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import "@fontsource/lobster"

const HeaderContainer = styled("div")`
  position: relative;
  left: ${dimensions.homeAlignLeft};
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  margin-bottom: ${dimensions.paddingVerticalDesktop};
  }
`

const LogoStyle = styled("h1")`
  font-family:"Lobster";
  font-size: 3em;
  align-self: start;
  white-space: nowrap
`

const HeaderLinks = styled("div")`
  padding-left: 1em;
  padding-right: 1em;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1em;

  a {
    color: ${colors.grey600};
    text-decoration: none;
    border-bottom: 2px solid transparent;
    height: 100%;

    display: block;
    position: relative;

    transition: 100ms ease-in-out color;

    &:hover {
      color: ${colors.text};
    }

    &.Link--is-active {
      color: ${colors.text};
    }
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoStyle>
            Phil Renkert
        </LogoStyle>
        <h2 style={{   justifySelf: "center",  alignSelf: "end", fontSize: "1.5em", padding: 0, margin: 0 }}>
          <HeaderLinks>
            <Link activeClassName="Link--is-active" to="/">
              Projects
            </Link>
            <Link activeClassName="Link--is-active" to="/information">
              Information
            </Link>
            <a target="_blank" href="mailto:prenkert@live.com">
              Contact
            </a>
          </HeaderLinks>
        </h2>
        {/* <Filter categories={this.props.categories}></Filter> */}
      </HeaderContainer>
    )
  }
}
