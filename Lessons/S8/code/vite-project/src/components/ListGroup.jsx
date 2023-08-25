import { useState } from "react";
import PropTypes from "prop-types";

function ListGroup(props) {
  //   let items = ["Breaking Bad", "Better call Saul", "Avengers"];
  const [selectedItem, setSelectItem] = useState(-1);

  const selectItem = (index) => {
    setSelectItem(index);
    props.parentJob(index);
  };

  return (
    <>  
      <h1>{props.name}</h1>
      <ul className="list-group">
        {props.items.map(
          (
            item,
            index // Q?
          ) => (
            <li
              className={
                selectedItem === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => selectItem(index)} // what would happen? : showName()
              key={index} // why we should use key in React (hint was given)?
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

ListGroup.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  parentJob: PropTypes.func, // search
};

export default ListGroup;
