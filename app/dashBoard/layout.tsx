import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="container mx-auto">{children}</section>;
};

export default layout;
