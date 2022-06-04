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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        perspiciatis delectus fugiat ullam necessitatibus ab obcaecati quae sed,
        omnis quasi illo eligendi quia, eveniet voluptatibus cumque blanditiis
        porro consequatur ea?
      </SectionText>
      <Button onClick={() => (window.location = "https://arfat.xyz/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
