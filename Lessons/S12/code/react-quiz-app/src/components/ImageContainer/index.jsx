import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  img {
    width: 200px;
    heigth: auto;
  }
`;

function ImageContainer({ image }) {
  return (
    <Container>
      <img src={image} alt="Home page banner" />
    </Container>
  );
}

ImageContainer.propTypes = {
  image: PropTypes.any,
};

export default ImageContainer;
