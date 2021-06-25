import React from "react";
import { Icon } from "fronton-react";

function ArrowIcon(props) {
  return (
    <Icon {...props} width={14} height={8}>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.6667 1.33333L12.3334 0L7.00006 5.33333L1.66669 0L0.333355 1.33333L7.00006 8L13.6667 1.33333Z"
          fill="#464C5C"
        />
      </svg>
    </Icon>
  );
}

export default ArrowIcon;
