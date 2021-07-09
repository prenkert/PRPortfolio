import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import dimensions from "styles/dimensions"


const Date = styled("div")`
  padding: 0 0.25rem 0 0.25rem;
  margin: 0;

  display: inline-block;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`

class CircleDate extends React.Component {
    render() {
        return (
            <div class="CircleDate">
                <Circle category={this.props.category} inactive={false} filter={this.props.filter}/>
                <Date>{this.props.date}</Date>
            </div>
        )
    }
}

export default CircleDate
