import React from "react";

function Plus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z"></path>
    </svg>
  );
}

export default Plus;