import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { ListItem, ListTitle } from "../Technologies/TechnologiesStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel : +8801819439292">+8801819439292</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto : arfatrahman08@gmail.com">
            arfatrahman08@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/arfat-beep">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/arfatxyz/">
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/arfat.xyz">
            <AiFillFacebook size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
