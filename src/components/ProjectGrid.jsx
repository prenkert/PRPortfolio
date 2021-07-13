import React from "react"
import ProjectCard from "components/ProjectCard"
import GridLayout from "components/GridLayout"
import styled from "@emotion/styled"

const InlBlk = styled("div")`
  display: inline-block;
`
export default class ProjectGrid extends React.Component {
  render() {
    return (
      <InlBlk>
        <GridLayout>
          {this.props.projects.map((project, i) => (
            <ProjectCard
              key={i}
              category={project.node.frontmatter.project_category}
              title={project.node.frontmatter.project_title}
              thumbnail={project.node.frontmatter.project_preview_thumbnail}
              date={project.node.frontmatter.project_post_date}
              categoryOnClick={this.handleFilterSelect}
              path={project.node.frontmatter.path}
            />
          ))}
        </GridLayout>
      </InlBlk>
    )
  }
}
