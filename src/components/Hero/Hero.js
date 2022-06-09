import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nodepadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a professional web developer. I have experience working on basic
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>{" "}
        and <strong>React</strong>. I've also experience on creating WordPress
        website.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            `https://drive.google.com/file/d/1lPcZHPzI1h-xvLkFrqK-A6W2cq1qF2lr/view?usp=sharing`,
            "_blank"
          )
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
