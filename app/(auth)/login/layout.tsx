import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="container mx-auto min-h-screen flex justify-center items-center">{children}</section>;
};

export default layout;
