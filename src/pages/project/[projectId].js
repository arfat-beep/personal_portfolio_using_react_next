import React, { useParams } from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

import { projects } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ListTitle } from "../../components/Technologies/TechnologiesStyles";
import {
  ExternalLinks,
  UtilityList,
} from "../../components/Projects/ProjectsStyles";
const projectDetails = ({ projectId }) => {
  const router = useRouter();
  const id = router?.query?.projectId;

  const project_de = projects.find((project) => project?.id == id);
  return (
    <>
      <Header />
      <Section>
        <div className="project_details">
          <div className="img_div">
            {project_de?.image.map((img) => (
              <div>
                <img src={img} />
              </div>
            ))}
          </div>
          <div className="project_desc">
            <ListTitle>Top features</ListTitle>
            <ul className="project_desc_ul">
              {project_de?.details_desc.map((desc) => (
                <li style={{ marginTop: "15px", fontSize: "24px" }}>
                  <AiOutlineArrowRight style={{ marginRight: "10px" }} />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="project_links">
            <UtilityList>
              <ExternalLinks href={project_de?.source}>
                {project_de?.server ? "Client" : "Code"}
              </ExternalLinks>
              {project_de?.server && (
                <ExternalLinks href={project_de?.server}>Server</ExternalLinks>
              )}
              <ExternalLinks href={project_de?.visit}>Live site</ExternalLinks>
            </UtilityList>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};
export const getServerSideProps = async (context) => {
  console.log(context.query);
  const { projectId } = context.query;
  if (!projectId) {
    projectId = null;
  }
  return { props: { projectId: projectId } };
};
export default projectDetails;
