import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-beige min-h-screen">
      <Header />

      <main>
        <p>Main Content</p>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
