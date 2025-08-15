import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";
import Skills from "../pages/Home/Skills/Skills";
import Educations from "../pages/Home/Educations/Educations";
import Projects from "../pages/Home/Porjects/Projects";
import { Slide } from "react-awesome-reveal";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FaLink } from "react-icons/fa";

const RootLayout = () => {
  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}`;
  const title = "Check out this awesome portfolio";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = window.location.href; //get current url
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="relative">
      {/* nav bar start */}
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-secondary/50 py-3">
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

        {/* sticky social share links */}
        <section className="fixed  top-1/2 -translate-y-1/2 left-1  z-20 flex flex-col gap-3">
          <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={40} round></LinkedinIcon>
          </LinkedinShareButton>

          <EmailShareButton url={shareUrl} title={title}>
            <EmailIcon size={40} round></EmailIcon>
          </EmailShareButton>

          <FacebookShareButton url={shareUrl} title={title}>
            <FacebookIcon size={40} round></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url={shareUrl} title={title}>
            <WhatsappIcon size={40} round></WhatsappIcon>
          </WhatsappShareButton>

          <div className="relative flex flex-col">
            <div className="w-fit">
              <button
                onClick={handleCopy}
                className="btn btn-secondary rounded-full px-2 py-2"
              >
                <FaLink size={20} />
              </button>
            </div>
            {copied && (
              <span className="sticky top-0 text-green-500">Copied!</span>
            )}
          </div>
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
