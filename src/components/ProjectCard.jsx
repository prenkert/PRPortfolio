import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import PropTypes from "prop-types"
import Cursor from "./Cursor"
import CircleDate from "./CircleDate"
import Img from 'gatsby-image'

const ProjectCardContainer = styled("div")`
  transition: all 150ms ease-in-out;
  box-sizing: border-box;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 1em;
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: currentColor;
  &:hover .projectCardTitle {
    text-decoration: underline;
  }
`
const ProjectCardContent = styled("div")`
  padding: 0.5em 1em 0.5em 0em;
  position: relative;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1em 2.5em 0.5em 0em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("h3")`
  line-height: 1.5;
`

const ProjectCardTitle = styled("h2")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  display: inline-block;
  padding-right: 1rem;
`

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
  }
  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }
  render() {
    return (
      <React.Fragment>
        <ProjectCardContainer
          onMouseEnter={() => this.onHover()}
          onMouseLeave={() => this.onOut()}
        >
          <Cursor show={this.state.active}>
            <LinkTo to={`${this.props.path}`}>
              <ProjectCardContent className="ProjectCardContent">
                <ProjectCardTitle className="projectCardTitle">
                  {this.props.title}
                </ProjectCardTitle>
              </ProjectCardContent>
              <Img
                fluid={this.props.thumbnail.childImageSharp.fluid}
                style = {{
                  "background-color": "#fff",
                  "justify-content": "center",
                  "align-items": "center",
                  "overflow": "hidden",
                  "position": "relative",
                  "height": "22.75vh",
                  "max-width": "100%"
                }}
                imgStyle = {{
                  "height": "100%",
                  "width": "100%",
                }}
              />
            </LinkTo>
            <ProjectCardCategory onClick={this.categoryFilter}>
              <CircleDate category={this.props.category} date={this.props.date.substring(0,4)} filter={"none"}/>
            </ProjectCardCategory>{" "}
          </Cursor>
        </ProjectCardContainer>
      </React.Fragment>
    )
  }
}

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}

export default ProjectCard
