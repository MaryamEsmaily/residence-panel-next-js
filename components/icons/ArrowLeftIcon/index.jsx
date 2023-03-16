import React from "react";
import classNames from "utils/classNames";

function ArrowLeftIcon({ className }) {
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
        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
      </g>
    </svg>
  );
}

export default ArrowLeftIcon;
