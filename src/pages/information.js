import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import Img from "gatsby-image"
import Close from "components/Close"
import LinkItem from "components/LinkItem"
import CircleDate from "components/CircleDate"
import { ProjectTitle, ProjectHeaderGrid, Description, Container } from "../styles/sharedEmotion"
import "styles/projectShowcase.scss"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const BodyText = styled("div")`
grid-column: 11/span 10;
a {
  -webkit-transition: border-bottom  ease .1s;
  -moz-transition: border-bottom  ease .1s;
  -o-transition: border-bottom ease .1s;
  transition: border-bottom ease .1s;
  color: currentColor;
  text-decoration: none;
  border-bottom: 1px solid #000;

  &:hover {
    border-bottom: 2px solid #000;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
 
  }
`
const Links = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
  text-align: left;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`
const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-bottom: 1.5rem;
  max-width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 100%;
    height: auto;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`
const TextContainer = styled("div")`
  padding: 0rem 0 1rem 0rem;
`

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
    padding-left: 0vw;
    row-gap: 0rem;
    grid-template-columns: 1fr 1fr;
  }
`

const RenderBody = ({ meta, data }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />

    <Container>
      <BrowserView>
        <Close />
          <ProjectHeaderGrid>
              <div style={{gridRow:1, gridColumn:1}}>
                <CircleDate category={"Person"} date={data.content.frontmatter.birthdate} filter={"none"}/>
              </div>
              <div style={{gridRow:2,gridColumn:1}}>
                <ProjectTitle>{data.content.frontmatter.display}</ProjectTitle>
              </div>
          </ProjectHeaderGrid>
        <TextContainer>
          <Grid>
            <div style={{ gridColumn: "1/span 5" }}>
              {" "}
              <Description>Photos</Description>
            </div>
            <div style={{ gridColumn: "7/span 3" }}>
              <Description>Links</Description>
            </div>

            <div style={{ gridColumn: "11/span 10" }}>
              <Description>Details</Description>
            </div>
            <div style={{ gridColumn: "1/span 5" }}>
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div style={{ gridColumn: "7/span 3" }}>
              <Links>
                {data.content.frontmatter.links.map((link, i) =>
                    <li>
                      <LinkItem href={link.url}>{link.label}</LinkItem>
                    </li>
                )}
              </Links>
              <Description>What I Do</Description>
              <Links>
                {data.content.frontmatter.services.map((service) => (
                    <div>{service}</div>
                ))}
              </Links>
              <Description>Hobbies</Description>
              <Links>
                {data.content.frontmatter.hobbies.map((hobby) => (
                  <div>{hobby}</div>
                ))}
              </Links>
            </div>
            <BodyText dangerouslySetInnerHTML={{ __html: data.content.html }}/>
          </Grid>
        </TextContainer>
      </BrowserView>
    </Container>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  return (
    <Layout>
      <RenderBody data={data} meta={meta} />
    </Layout>
  )
}


export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    content: markdownRemark(fileAbsolutePath: {regex: "/information.md/"}) {
      html
      frontmatter {
        display
        birthdate
        links {
          url 
          label
        }
        services
        hobbies
      }
    }
    headshot: file(relativePath: { eq: "me_new_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
