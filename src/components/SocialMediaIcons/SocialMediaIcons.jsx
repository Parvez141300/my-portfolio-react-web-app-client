import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Follow Me</h3>
      <div className="flex gap-2 items-center">
        <SecondaryButton className="rounded-full py-7">
          <a
            href="https://www.linkedin.com/in/parvez-hossain-alif/?locale=en_US"
            target="_blank"
          >
            <FaLinkedin size={25} color="white" />
          </a>
        </SecondaryButton>
        <SecondaryButton className="rounded-full py-7">
          <a href="https://github.com/Parvez141300" target="_blank">
            <FaGithub size={25} color="white" />
          </a>
        </SecondaryButton>
        <SecondaryButton className="rounded-full py-7">
          <a href="https://x.com/Parvez19188" target="_blank">
            <FaSquareXTwitter size={25} color="white" />
          </a>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
