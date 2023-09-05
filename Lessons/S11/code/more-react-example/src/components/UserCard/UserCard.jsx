import "./UserCard.css";
import PropTypes from "prop-types";

function UserCard(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="profile-picture">
            <img src={props.picture.large} alt="Profile Picture" />
          </div>
          <h2 className="name">
            {[props.name.first, props.name.last].join(" ")}
            {
              // props.name.first + " " + props.name.last
            }
          </h2>
          <h3 className="username">{props.email}</h3>
          <p className="tagline">{props.phone}</p>
          <p className="description">{props.location.city}</p>
        </div>
      </div>
    </>
  );
}

UserCard.propTypes = {
  picture: PropTypes.object,
  name: PropTypes.object,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.object,
};

export default UserCard;
