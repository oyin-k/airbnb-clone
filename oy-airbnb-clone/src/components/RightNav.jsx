import React from "react";

import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import styled from "styled-components";

const StyledRightNav = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    box-shadow: -10px 0 20px 0 rgba(0, 0, 0, 0.07);
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 15rem;
    padding: 2rem;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    z-index: 5000;
    justify-content: flex-start;
  }
`;

const RightNav = ({ open }) => {
  return (
    <StyledRightNav open={open}>
      <p>Become a host</p>
      <div className="header__rightLanguage">
        <LanguageIcon />
        <ExpandMoreIcon />
      </div>
      <div className="header__rightAvatar">
        <Avatar />
      </div>
    </StyledRightNav>
  );
};

export default RightNav;
