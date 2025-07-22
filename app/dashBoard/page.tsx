import ProtectedRoutes from "../(auth)/login/_components/ProtectedRoutes";
import ResumeClient from "./_components/ResumeClient";

export default async function Dashboard() {
  return (
    <div className="p-10 ">
      <ProtectedRoutes>
        <ResumeClient />
      </ProtectedRoutes>
    </div>
  );
}
