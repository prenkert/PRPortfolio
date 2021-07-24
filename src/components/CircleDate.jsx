import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import dimensions from "styles/dimensions"

const Grid = styled("div")`
  display: grid;
  grid-template-columns: min-content min-content
`
const Date = styled("div")`
  font-size: 1rem;
  padding: 0 0.25rem 0 0.25rem;
  margin: 0;
`
class CircleDate extends React.Component {
    render() {
        return (
            <div class="CircleDate">
              <Grid>
                <Circle category={this.props.category} inactive={false} filter={this.props.filter}/>
                <Date>{this.props.date}</Date>
              </Grid>
            </div>
        )
    }
}

export default CircleDate
