import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";

const RootLayout = () => {
  return (
    <div>
      {/* nav bar start */}
      <nav className="fixed w-full z-50 backdrop-blur-xl bg-primary/60">
        <NavBar></NavBar>
      </nav>
      {/* nav bar end */}

      {/* main for route change */}
      <main className="min-h-screen pt-24">
        {/* banner section */}
        <section>
          <Banner></Banner>
        </section>

        {/* about section */}
        <section>
            
        </section>

        {/* on route change */}
        <div>
          <Outlet></Outlet>
        </div>
      </main>

      {/* for footer section */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
