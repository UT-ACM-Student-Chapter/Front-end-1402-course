import PropTypes from "prop-types";

export default function Message(props) {
  console.log("🚀 ~ file: Message.jsx:4 ~ Message ~ props:", props);
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}

Message.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
