import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
const Circle = styled("div")`
  border-radius: 2px;
  margin-right: 0.675rem;
  padding: 0.13rem 0.33rem 0.05rem 0.33rem;
  display: inline-block;
  position: relative;
  z-index: -1;
  font-size: 0.85vw;
  top: -3px;
  color: white;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 1em;
  }
`

const colorDict = {
  Academic: colors.rotundaOrange,
  Personal: colors.personalCyan,
  Professional: colors.jeffersonBlue,
  All: colors.grey400
}

//
export default class Border extends React.Component {
    constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {this.props.inactive || ( this.props.filter !== "none" && this.props.filter !== this.props.category) ? (
          <Circle style={{ background: `${colors.grey400}` }}>{this.props.category}</Circle>
        ) : (
          <Circle style={{ background: `${ colorDict[this.props.category]}` }}>
            {this.props.category}
          </Circle>
        )}
      </>
    )
  }
}
