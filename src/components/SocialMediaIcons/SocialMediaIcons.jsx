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
          <FaLinkedin size={25} color="white" />
        </SecondaryButton>
        <SecondaryButton className="rounded-full py-7">
          <FaGithub size={25} color="white" />
        </SecondaryButton>
        <SecondaryButton className="rounded-full py-7">
          <FaSquareXTwitter size={25} color="white" />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
