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
        At <strong>QUIC Foods</strong>, we specialize in shipping African food
        products to people in the USA. Our goal is to make high-quality,
        traditional ingredients easily accessible to Africans abroad, ensuring
        they can enjoy the taste of home no matter where they are.
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

      <ContactSection>
        <h2>Contact Us</h2>
        <ContactList>
          <ContactItem>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaWhatsapp size={20} />
            </a>
          </ContactItem>
          <ContactItem>
            <a
              href="https://instagram.com/quicfoods"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram size={20} />
            </a>
          </ContactItem>
          {/* <ContactItem>
            <FaWhatsapp size={20} />
            <a
              href="https://wa.me/234987654321"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 🇳🇬
            </a>
          </ContactItem> */}
          <ContactItem>
            <a href="tel:+1234567890">
              {" "}
              <FaPhone size={20} />
            </a>
          </ContactItem>
          <ContactItem>
            <a href="mailto:support@quicfoods.com">
              {" "}
              <FaEnvelope size={20} />
            </a>
          </ContactItem>
        </ContactList>
      </ContactSection>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 1rem 1rem 6rem 1rem;
  text-align: center;

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
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    display: flex;
    flex-direction: column;

    span {
      font-size: 18px;
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

const ContactSection = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 24px;
    color: #e63946;
  }
`;

const ContactList = styled.div`
  justify-content: center;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f8;
  padding: 10px 15px;
  border-radius: 8px;
  width: fit-content;

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    background: #e63946;
    a {
      color: white;
    }
  }
`;
