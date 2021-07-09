import styled from '@emotion/styled'
import dimensions from "./dimensions"

export const ProjectTitle = styled("h1")`
  margin: 0 auto;
  padding-top: 0.25rem;
  font-size: 2.75em;
  padding-bottom: 1rem;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin: 0;
    display: inline-block;
    padding-right: 0.5em;
    padding-bottom: 0.5em;
    font-size: 2em;
  }
`