import React from "react";
import {
  FaAward,
  FaLayerGroup,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { MdGrade, MdOutlineMenuBook } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Educations = () => {
  return (
    <div id="educations" className="max-w-10/12 mx-auto space-y-8 md:space-y-12 min-h-[100vh-73px]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <MdOutlineMenuBook size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          My <span className="underline text-secondary">Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* diploma */}
        <div className="bg-gradient-to-tr from-primary to-secondary p-10 rounded-3xl space-y-2">
          <h5 className="text-xl flex items-center gap-2 font-bold">
            <FaUniversity />
            Munshiganj Polytechnic Institute
          </h5>
          <h3 className="text-sm flex items-center gap-2">
            <FaUserGraduate size={20} /> Diploma-in-engineering
          </h3>

          <h6 className="flex items-center gap-2 mb-5 text-sm">
            <SlCalender />
            (2018 - 2023)
          </h6>
          <p className="text-justify">
            I completed a 4-year Diploma in Computer Science & Technology from
            Munshiganj Polytechnic Institute under the Bangladesh Technical
            Education Board (BTEB). My coursework covered programming (C, Java,
            Python), networking, database management, and PC hardware, with
            hands-on training through a mandatory 6-month industrial attachment.
            I developed practical skills in software troubleshooting, system
            maintenance, and project development.
          </p>
          <h5 className="flex items-center gap-2 font-bold">
            <FaAward />
            Key Achievements
          </h5>
          <span className="badge badge-secondary flex items-center gap-2">
            <FaLayerGroup /> Group: Computer Science & Technology
          </span>
          <span className="badge badge-secondary flex items-center gap-2">
            <MdGrade />
            GPA: 3.83 out of 4
          </span>
        </div>
        {/* SSC */}
        <div className="bg-gradient-to-tr from-primary to-secondary p-10 rounded-3xl space-y-2">
          <h5 className="text-xl flex items-center gap-2 font-bold">
            <FaUniversity />
            Dattapara Nabadiganta High School
          </h5>
          <h3 className="text-sm flex items-center gap-2">
            <FaUserGraduate size={20} /> Diploma-in-engineering
          </h3>

          <h6 className="flex items-center gap-2 mb-5 text-sm">
            <SlCalender />
            (2017 - 2018)
          </h6>
          <p className="text-justify">
          I completed my Secondary School Certificate (SSC) in Business Studies from Dattapara Nabadiganta High School, where I gained a strong foundation in accounting, commerce, and economics. The curriculum honed my analytical skills and understanding of business operations, preparing me for further academic and professional pursuits in the commercial sector.
          </p>
          <h5 className="flex items-center gap-2 font-bold">
            <FaAward />
            Key Achievements
          </h5>
          <span className="badge badge-secondary flex items-center gap-2">
            <FaLayerGroup /> Group: Business Studies
          </span>
          <span className="badge badge-secondary flex items-center gap-2">
            <MdGrade />
            GPA: 4.33 out of 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Educations;
