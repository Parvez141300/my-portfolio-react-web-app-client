import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";
import Skills from "../pages/Home/Skills/Skills";
import Educations from "../pages/Home/Educations/Educations";
import Projects from "../pages/Home/Porjects/Projects";
import { Slide } from "react-awesome-reveal";

const RootLayout = () => {
  return (
    <div>
      {/* nav bar start */}
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-primary/50 py-3">
        <Slide direction="down" duration={1500}>
          <NavBar></NavBar>
        </Slide>
      </nav>
      {/* nav bar end */}

      {/* main for route change */}
      <main className="min-h-screen pt-24 space-y-14">
        {/* banner section */}
        <section>
          <Banner></Banner>
        </section>

        {/* about section */}
        <section>
          <About></About>
        </section>

        {/* technical Skills */}
        <section>
          <Skills></Skills>
        </section>

        {/* education section */}
        <section>
          <Educations></Educations>
        </section>

        {/* projections section */}
        <section>
          <Projects></Projects>
        </section>

        {/* contact section */}
        <section>
          <Contact></Contact>
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
