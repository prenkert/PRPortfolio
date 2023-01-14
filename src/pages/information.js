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
import { ProjectTitle, ProjectHeaderGrid, Description, Container, Links} from "../styles/sharedEmotion"
import "styles/projectShowcase.scss"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const BodyText = styled("div")`
grid-column: 3;
overflow: hidden auto;
position: relative;
padding-right: 2rem;
bottom: 0px; 
height: auto;
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
const LayoutContainer = styled("div")`
  height: calc(100vh - 2*${dimensions.paddingVerticalDesktop});
  paddingBottom: "${dimensions.paddingVerticalDesktop}";
  overflow: hidden;
  display: flex;
  flex-flow: column
`
const TextContainer = styled("div")`
  margin: 0rem 0 2rem 0rem;
  flex: 1;
  overflow: hidden;
`
const Grid = styled("div")`
  display: grid;
  height: 100%;
  grid-template-columns: minmax(50px, 1fr) max-content 3fr;
  grid-template-rows: max-content minmax(0,1fr);
  column-gap: 50px;
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
    <Close/>
    <Container>
      <BrowserView>
        <LayoutContainer>
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
            <div style={{ gridColumn: "1"}}>
              {" "}
              <Description>Photos</Description>
            </div>
            <div style={{ gridColumn: "2" }}>
              <Description>Links</Description>
            </div>

            <div style={{ gridColumn: "3" }}>
              <Description>Details</Description>
            </div>
            <div style={{ gridColumn: "1" }}>
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div style={{ gridColumn: "2", overflow: "auto" }}>
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
        </LayoutContainer>
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
