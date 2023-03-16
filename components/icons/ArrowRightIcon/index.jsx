import React from "react";
import classNames from "utils/classNames";

function ArrowRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={classNames(className, "w-3 h-3")}
      style={{
        stroke: "currentcolor",
        strokeWidth: 5.33333,
      }}
    >
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
      </g>
    </svg>
  );
}

export default ArrowRightIcon;
