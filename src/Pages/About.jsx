import React, { useEffect } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <p>
        We specialize in shipping African food products to people in the USA.
        Our goal is to make high-quality, traditional ingredients easily
        accessible to Africans abroad, ensuring they can enjoy the taste of home
        no matter where they are.
      </p>

      <WhyChooseUs>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <span>🌍 Authentic African Ingredients</span>
            <p>
              We source from trusted suppliers to bring you the best quality.
            </p>
          </li>
          <li>
            <span>🚀 Fast & Reliable Preorder System</span>
            <p>We ensure quick processing and delivery of all orders.</p>
          </li>
          <li>
            <span>💳 Flexible Ordering</span>
            <p>Order anytime with no product limit, hassle-free.</p>
          </li>
          <li>
            <span>📦 Safe Packaging & Delivery</span>
            <p>Your products arrive fresh and well-packaged.</p>
          </li>
        </ul>
      </WhyChooseUs>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 1rem 1rem 6rem 1rem;
  text-align: left;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #222;
    margin-bottom: 1rem;

    span {
      color: #e63946;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
  }
`;

const WhyChooseUs = styled.div`
  border-radius: 12px;
  margin-top: 2rem;

  h2 {
    font-size: 24px;
    color: #e63946;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: white;
    padding: 0.5rem 0.5rem 0.5rem 0;
    border-radius: 8px;
    margin-bottom: 1rem;
    /* box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); */
    text-align: left;
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #222;
    }

    p {
      font-size: 16px;
      margin-top: 5px;
      color: #555;
    }
  }
`;
