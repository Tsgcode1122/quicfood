import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./BreakPoints";
import { Colors } from "../Colors/ColorComponent";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
        font-family: "Scheherazade New", sans-serif;
        
  }

  body {
   background-color: ${Colors.pureWhite};
    color: #333;
    /* background-image: repeating-linear-gradient(
    to right, 
    transparent, 
    transparent 79px, 
    #e3e3e359 80px, 
    transparent 81px
  );
  background-size: 100vw 100%; */
  }

  h1 {
    font-size: 2.5rem;
    
    @media (max-width: ${breakpoints.ss}) {
      font-size: 1.2rem;
    }
    @media (max-width: ${breakpoints.xl}) {
      font-size: 2.2rem;
    }
    @media (max-width: ${breakpoints.lg}) {
      font-size: 2rem;
    }
    @media (max-width: ${breakpoints.md}) {
      font-size: 1.8rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.5rem;
    }
     @media (max-width: ${breakpoints.ss}) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: ${breakpoints.md}) {
      font-size: 1.7rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.4rem;
    }
     @media (max-width: ${breakpoints.ss}) {
      font-size: 1rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    @media (max-width: ${breakpoints.md}) {
      font-size: 1.5rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2rem;
    }
     @media (max-width: ${breakpoints.ss}) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    @media (max-width: ${breakpoints.md}) {
      font-size: 0.9rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 0.85rem;
    }
    @media (max-width: ${breakpoints.ss}) {
      font-size: 0.7rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
