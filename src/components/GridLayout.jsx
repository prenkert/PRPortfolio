import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 20vw));
  padding-left: ${dimensions.homeAlignLeft};
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`

export default class Grid extends React.Component {
  render() {
    return <GridLayout>{this.props.children}</GridLayout>
  }
}
