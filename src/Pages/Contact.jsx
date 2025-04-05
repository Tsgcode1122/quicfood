import React, { useEffect } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <ContactSection>
      <Heading>
        We’d love to hear from you! Reach out through any of the channels below.
      </Heading>

      <ContactList>
        <ContactItem>
          <FaWhatsapp size={20} />
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </ContactItem>
        <ContactItem>
          <FaInstagram size={20} />
          <a
            href="https://instagram.com/quicfoods"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Instagram
          </a>
        </ContactItem>
        <ContactItem>
          <FaPhone size={20} />
          <a href="tel:+1234567890">Call Us</a>
        </ContactItem>
        <ContactItem>
          <FaEnvelope size={20} />
          <a href="mailto:support@quicfoods.com">Email Us</a>
        </ContactItem>
      </ContactList>
    </ContactSection>
  );
};

export default Contact;

const Heading = styled.p`
  font-size: 14px;
  padding: 1rem;
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
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 35px;
  /* align-items: center; */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f879;
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
