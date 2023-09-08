import PropTypes from "prop-types";

function Square({ onClick, value }) {
  return (
    <button
      style={{
        height: "2rem",
        width: "2rem",
        backgroundColor: "#f1f1f1",
        display: "grid",
        placeItems: "centers",
        padding: 0,
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Square;
