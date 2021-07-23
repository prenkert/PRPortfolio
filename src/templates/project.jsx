import React from "react"
import Helmet from "react-helmet"
import styled from '@emotion/styled'
import { Link, graphql } from "gatsby"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import CircleDate from "components/CircleDate"
import LinkItem from "components/LinkItem"
import Close from "components/Close"
import dimensions from "styles/dimensions"
import {Container, ProjectTitle, ProjectHeaderGrid, Description, Challenge, Links} from "../styles/sharedEmotion"
import Img from "gatsby-image"

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
          tools
          project_links {
            url
            label
          }
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
const MainContainer = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: calc(100vh - ${dimensions.paddingVerticalDesktop});
`
const ProjectInfoGrid = styled("div")`
  display: grid;
  grid-template-columns: max-content max-content auto;
  column-gap: 2rem;
  margin-bottom: 2rem;
  height: max-content;
`
const ProjectBody = styled("div")`
  .gatsby-resp-image-background-image {
    padding-bottom: 0 !important;
  }
  .gatsby-resp-image-image {
    position: relative !important;
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
              <MainContainer>
                <ProjectHeaderGrid>
                  <div style={{gridRow:1, gridColumn:1}}>
                    <CircleDate category={project.frontmatter.project_category} date={project.frontmatter.project_post_date} filter={"none"}/>
                  </div>
                  <div style={{gridRow:2,gridColumn:1}}>
                    <ProjectTitle>{project.frontmatter.project_title}</ProjectTitle>
                  </div>
                </ProjectHeaderGrid>

                <Img 
                  fluid={project_preview_thumbnail}
                  style = {{
                    "flex": "1 1 auto",
                    "margin-bottom":"2rem",
                    "overflow": "hidden"
                  }}
                  imgStyle = {{
                    "object-position": "center"
                  }}
                />

                <ProjectInfoGrid>
                  <div style={{gridColumn: 1}}>
                    <Description>Links</Description>
                    <Links style={{paddingBottom: 0}}>
                      {project.frontmatter.project_links.map((link, i) =>
                          <li>
                            <LinkItem href={link.url}>{link.label}</LinkItem>
                          </li>
                      )}
                    </Links>
                  </div>
                  <div style={{gridColumn: 2}}>
                    <Description>Tools</Description>
                    <Links style={{paddingBottom: 0}}>
                      {project.frontmatter.tools.map((tool) => (
                          <li>{tool}</li>
                      ))}
                    </Links>
                  </div>
                  <div style={{gridColumn: 3}}>
                    <Description>Upshot</Description>
                    <Challenge>{project.frontmatter.description}</Challenge>
                  </div>
                </ProjectInfoGrid>              
              </MainContainer>
              <div className = "project-post">
                <Description>Details</Description>
                <ProjectBody
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />
              </div>
        </Container>
      </Layout>
    </>
  )
}

