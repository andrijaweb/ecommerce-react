import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-beige min-h-screen">
      <Header />

      <main className="px-[3.75rem] py-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
