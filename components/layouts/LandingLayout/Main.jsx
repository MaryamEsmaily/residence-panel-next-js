import React from "react";

function Main({ children }) {
  return (
    <div className="w-screen h-[calc(100vh-128px)] overflow-y-auto">
      {children}
    </div>
  );
}

export default Main;
