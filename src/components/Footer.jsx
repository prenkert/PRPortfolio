import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import Content from "components/FooterWhiteContent"

const FooterContainer = styled("div")`
  text-decoration: none;
  position: relative;

  padding-top: 1.75em;
  background-color: #131414;
  padding-left: 5%;
  padding-right: 5%;

  align-items: left;

  svg {
    max-width: 50px;
  }
`
const Footer = () => (
  <React.Fragment>
    <FooterContainer>
      Get in touch
    </FooterContainer>
  </React.Fragment>
)

export default Footer
