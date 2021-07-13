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
import {Container, ProjectTitle, ProjectHeaderGrid, Description, Challenge} from "../styles/sharedEmotion"
import Img from "gatsby-image"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

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
        <Close/>
        <Container>
              <ProjectHeaderGrid>
                <div style={{gridRow:1, gridColumn:1}}>
                  <CircleDate category={project.frontmatter.project_category} date={project.frontmatter.project_post_date} filter={"none"}/>
                </div>
                <div style={{gridRow:2,gridColumn:1}}>
                  <ProjectTitle>{project.frontmatter.project_title}</ProjectTitle>
                </div>
                <div style={{gridArea: "1 / 2 / 3 / auto"}}>
                  <Description>Upshot</Description>
                  <Challenge>{project.frontmatter.description}</Challenge>
                </div>{" "}
              </ProjectHeaderGrid>

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
        </Container>
      </Layout>
    </>
  )
}

