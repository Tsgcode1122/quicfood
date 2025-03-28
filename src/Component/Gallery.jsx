import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Img1 from "../Images/q1.jpg";
import Img2 from "../Images/q2.jpg";
import Img3 from "../Images/q4.jpg";
import Img4 from "../Images/q3.jpg";
import Img5 from "../Images/q5.jpg";
import Img6 from "../Images/q6.jpg";
import Img7 from "../Images/q10.jpg";

const images = [
  { id: 1, src: Img1 },
  { id: 2, src: Img3 },
  { id: 3, src: Img2 },
  { id: 4, src: Img4 },
  { id: 5, src: Img5 },
  { id: 6, src: Img6 },
  { id: 7, src: Img7 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length].src);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length].src,
    );
  };

  return (
    <>
      <MasonryContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 4 }}
          gutterBreakPoints={{ 350: "10px", 750: "15px", 1024: "20px" }}
        >
          <Masonry>
            {images.map((image, index) => (
              <ImageWrapper key={image.id} onClick={() => openModal(index)}>
                <Image src={image.src} alt={`Gallery ${image.id}`} />
                <Overlay />
              </ImageWrapper>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </MasonryContainer>

      {selectedImage && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <ModalContent>
            <NavButton onClick={prevImage}>
              <LeftOutlined />
            </NavButton>
            <motion.img
              src={selectedImage}
              alt="Full View"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <NavButton onClick={nextImage}>
              <RightOutlined />
            </NavButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Gallery;

const MasonryContainer = styled.div`
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 10px;
  border-radius: 10px;
  border: 1px solid #ffffffa7;
  pointer-events: none;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const customStyles = {
  content: {
    background: "rgba(0, 0, 0, 0.8)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
