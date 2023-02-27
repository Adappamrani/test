import React from "react";
import PropTypes from "prop-types";

const AddRowButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Add Row
    </button>
  );
};

AddRowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddRowButton;
