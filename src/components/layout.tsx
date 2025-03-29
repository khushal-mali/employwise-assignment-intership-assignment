import AuthImageGrid from "./AuthImageGrid";
// import Scroll from "@/components/common/scroll";
// import { IChildren } from "@/resources/types";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="overflow-hidden h-screen">
    <div className="w-full lg:grid lg:grid-cols-2 ">
      <div className="flex items-center justify-center w-full h-full">{children}</div>
      <div className="hidden lg:block">
        <AuthImageGrid />
      </div>
    </div>
    {/* <Scroll /> */}
    {/* <ToastContainer /> */}
  </main>
);

export default AuthLayout;
