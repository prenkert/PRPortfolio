import styled from '@emotion/styled'
import dimensions from "./dimensions"
import colors from "styles/colors"

export const Container = styled("div")`
  margin: 0 auto;
  padding: 2rem 10.75vw 10em 10.75vw;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 2rem 3.75vw 10em 3.75vw;
  }
`
export const ProjectTitle = styled("h1")`
  font-size: 2.75em;
  white-space: nowrap;
  }
`
export const ProjectHeaderGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  row-gap: 1em;
  margin-bottom: 2rem;
`
export const Description = styled("div")`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: ${colors.grey600};
`
export const Challenge = styled("h3")`
  margin: 0;
  padding: 0;
  line-height: 1;
  display: inline;
`