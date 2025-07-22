import React from "react";

import ProtectedRoutes from "../(auth)/login/_components/ProtectedRoutes";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <ProtectedRoutes>{children}</ProtectedRoutes>
    </section>
  );
};

export default layout;
