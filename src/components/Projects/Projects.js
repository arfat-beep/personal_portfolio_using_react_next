import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Link from "next/link";

const Projects = () => (
  <Section nopadding id="project">
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image[0]} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.source}>Code</ExternalLinks>
            <ExternalLinks href={project.visit}>Source</ExternalLinks>
            <ExternalLinks>
              <Link clssName="arfat" href={`/project/${project.id}`}>
                Details
              </Link>
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
