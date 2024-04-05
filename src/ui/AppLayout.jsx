import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-beige min-h-screen layout">
      {isLoading && <Spinner />}

      <Header />

      <main className="px-[3.75rem] py-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
