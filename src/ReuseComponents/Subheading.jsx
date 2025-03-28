import React from "react";
import styled from "styled-components";

const Subheading = ({ text, color, fontSize, align }) => {
  return (
    <StyledSubheading color={color} fontSize={fontSize} align={align}>
      {text}
    </StyledSubheading>
  );
};

export default Subheading;

const StyledSubheading = styled.h2`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  color: ${(props) => props.color || "#333"};
  text-align: ${(props) => props.align || "left"};
  font-weight: 600;
  margin-bottom: 10px;
`;
