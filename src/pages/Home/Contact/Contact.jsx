import React from "react";
import contactImage from "../../../assets/contact-image/contact.png";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-10/12 mx-auto space-y-12 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <RiContactsBook3Fill size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          Contact <span className="underline text-secondary">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Contact Card */}
        <div className="bg-gradient-to-t from-primary to-secondary border border-[#99999999] rounded-3xl p-5 space-y-3">
          <div>
            <img
              className="rounded-2xl w-full"
              src={contactImage}
              alt={contactImage}
            />
          </div>
          <h3 className="text-xl font-bold">Parvez Hossain Alif</h3>
          <p>Frontend Developer</p>
          <p>
            I am available for freelance work. Connect with me via email or call
            or fill up the form.
          </p>
          <ul>
            <li>
              <strong className="flex items-center gap-2">
                <FaPhoneVolume />
                Phone:
              </strong>
              +880 1743063201
            </li>
            <li>
              <strong className="flex items-center gap-2">
                <MdMarkEmailRead />
                Email:
              </strong>
              parvez.alif.dev@gmail.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-gradient-to-tr from-primary to-secondary rounded-3xl p-5 flex flex-col justify-center col-span-2 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <p>Name</p>
              <input
                required
                className="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p>Phone</p>
              <input
                required
                className="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
                type="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>

          <div>
            <p>Email</p>
            <input
              required
              className="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div>
            <p>Subject</p>
            <input
              className="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
              type="text"
              placeholder="Enter Your Subject"
            />
          </div>

          <div>
            <p>Message</p>
            <textarea
              required
              className="bg-white text-xs md:text-base rounded-xl p-2 border-none w-full h-36"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="btn btn-accent rounded-xl w-full hover:from-gray-300 hover:to-gray-100 transition-all duration-300"
            >
              SEND MESSAGE →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
