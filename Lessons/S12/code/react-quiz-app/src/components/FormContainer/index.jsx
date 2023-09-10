import { Container } from "@mui/material";
import PropTypes from "prop-types";

function FormContainer({ children }) {
  return (
    <Container
      sx={{
        background: "#f1f1f1",
        borderRadius: "20px",
        p: 3,
        width: "40vw",
        height: "100%",
      }}
    >
      {children}
    </Container>
  );
}

FormContainer.propTypes = {
  children: PropTypes.any,
};

export default FormContainer;
