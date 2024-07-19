import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <SideBar />
        <section className="flex flex-col min-h-screen flex-1 px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="full-width">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
