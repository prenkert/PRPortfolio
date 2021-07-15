import styled from '@emotion/styled'
import dimensions from "./dimensions"
import colors from "styles/colors"

export const Container = styled("div")`
  width: auto;
  height: auto;
  top: 0;
  padding: 0 ${dimensions.projectAlignLeft} 10rem ${dimensions.projectAlignLeft};
`
export const ProjectTitle = styled("h1")`
  font-size: 2.75em;
  white-space: nowrap;
  }
`
export const ProjectHeaderGrid = styled("div")`
  display: grid;
  height: max-content;
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

export const Links = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
  text-align: left;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`