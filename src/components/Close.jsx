import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const Container = styled("div")`
  position: fixed;
  top: ${dimensions.paddingVerticalDesktop}; 
  left: 0;
  width: ${dimensions.projectAlignLeft};
  svg {
    display: block;
    position:relative;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    stroke: ${colors.grey600};
    stroke-miterlimit: 10;
    stroke-width: 2px;
    transition: 0.5s transform ease;
    &:hover {
      transform: rotate(90deg);
      stroke: ${colors.text};
    }
  }
`
const Close = () => (
  <Container>
    <Link to="/">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 51"
    >
      <line class="cls-1" x1="4.96" y1="47" x2="49.96" y2="2" />
      <line class="cls-1" x1="4.96" y1="47" x2="49.96" y2="2" />
      <line class="cls-1" x1="49.5" y1="47" x2="4.5" y2="2" />
    </svg>
    </Link>
  </Container>
  
)

export default Close
