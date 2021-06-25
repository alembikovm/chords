import React from "react";
import { Icon } from "fronton-react";

function CleanIcon(props) {
  return (
    <Icon {...props}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z"
          fill="#464C5C"
        />
      </svg>
    </Icon>
  );
}

export default CleanIcon;
