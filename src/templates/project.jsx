import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { Link, graphql } from "gatsby"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import CircleDate from "components/CircleDate"
import LinkItem from "components/LinkItem"
import Close from "components/Close"
import VideoPlayer from "components/VideoGrid1"
import VideoPlayer2 from "components/VideoGrid2"
import TwoGrid from "components/ImageGrid2"
import OneGrid from "components/ImageGrid1"
import FourGrid from "components/ImageGrid4"
import dimensions from "styles/dimensions"
import { ProjectTitle } from "../styles/sharedEmotion"
import Img from "gatsby-image"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const Additional = styled("div")`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-bottom: 2rem;
    text-align: left;
  }
`

const Links = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
  text-align: left;
`

const AdditionalList = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
`

const TextContainer = styled("div")`
  padding: 6rem 0 7.5rem 0;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 3em 0 3em 0;
  }
`
const Container = styled("div")`
  margin: 0 auto;
  padding: 2rem 10.75vw 10em 10.75vw;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 2rem 3.75vw 10em 3.75vw;
  }
`
const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(20, 1fr);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Description = styled("div")`
  font-size: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  color: ${colors.grey600};
`

const Challenge = styled("h3")`
  margin: 0;
  padding: 0;
  line-height: 1;
  display: inline;
`

const ProjectBody = styled("div")`
  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const Spacer = styled("div")`
  padding: 1em 0 1em 0;
`

const WorkLink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`

export const query = graphql`
    query ProjectQuery($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          completed
          featured_project
          project_title
          project_category
          project_post_date(formatString: "YYYY")
          description
          project_preview_thumbnail {
            childImageSharp {
              fluid(maxWidth:1600, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
    `
    
export default function ProjectTemplate ({ data }) {
  const { markdownRemark: project } = data
  const project_preview_thumbnail = project.frontmatter.project_preview_thumbnail.childImageSharp.fluid
  return (
    <>
      <Helmet
        title={`${project.frontmatter.project_title} | Philip Renkert`}
      />
      <Layout>
        <Container>
          <BrowserView>
            <Close/>
            <Grid>
              <Grid>
                <div style={{ gridColumn: "1/span 4" }}>
                  <CircleDate category={project.frontmatter.project_category} date={project.frontmatter.project_post_date} filter={"none"}/>
                </div>
                <div style={{ gridColumn: "1/span 9" }}>
                  <ProjectTitle>{project.frontmatter.project_title}</ProjectTitle>
                </div>
              </Grid>
              <div style={{ gridColumn: "11/span 2", gridRow:"1" }}>
                <Description>Upshot</Description>
              </div>
              <div style={{ gridColumn: "11/span 10" }}>
                <Challenge>{project.frontmatter.description}</Challenge>
              </div>{" "}
            </Grid>

            <Img 
              fluid={project_preview_thumbnail}
              style = {{
                "max-height": "500px",
                "margin": "auto",
                "margin-bottom":"1rem"
              }}
              imgStyle = {{
                "object-position": "center"
              }}
            />
            

            <div className = "project-post">
              <h1>Post Body: {project.frontmatter.project_title}</h1>
              <div
                className="ProjectBody"
                dangerouslySetInnerHTML={{ __html: project.html }}
              />
            </div>
          </BrowserView>
        </Container>
      </Layout>
    </>
  )
}

