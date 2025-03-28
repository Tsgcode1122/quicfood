import React from "react";
import styled from "styled-components";
import { breakpoints } from "./BreakPoints";

const SectionContainer = styled.div`
  padding: 2rem 1.5rem;

  @media (max-width: 320px) {
    padding: 2rem 0.8rem;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 400px) and (max-width: 499px) {
    padding: 2rem 1.2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: ${breakpoints.m}) {
    padding: 2rem 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1150px;
    padding: 2rem 4rem;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1400px;
    padding: 2rem 5rem;
    margin: 0 auto;
  }
`;

const SectionDiv = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default SectionDiv;
