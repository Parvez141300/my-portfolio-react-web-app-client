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
  const educations = [
    {
      id: 1,
      level: "Diploma-in-Engineering",
      institute: "Munshiganj Polytechnic Institute",
      duration: "2018 - 2023",
      group: "Computer Technology",
      board: "BTEB",
      gpa: "3.83 out of 4",
      description:
        "I completed a 4-year Diploma in Computer Science & Technology from Munshiganj Polytechnic Institute under the Bangladesh Technical Education Board (BTEB). My coursework covered programming (C, Java, Python), networking, database management, and PC hardware, with hands-on training through a mandatory 6-month industrial attachment. I developed practical skills in software troubleshooting, system maintenance, and project development.",
      key_achievements: [
        "Completed 4-year Diploma in Computer Science & Technology",
        "Hands-on industrial training for 6 months",
        "Developed practical skills in software and hardware",
      ],
    },
    {
      id: 2,
      level: "Secondary School Certificate (S.S.C)",
      institute: "Dattapara Nabadiganta High School",
      duration: "2017 - 2018",
      group: "Business Studies",
      board: "Dhaka",
      gpa: "4.33 out of 5",
      description:
        "I completed my Secondary School Certificate (SSC) in Business Studies from Dattapara Nabadiganta High School, where I gained a strong foundation in accounting, commerce, and economics. The curriculum honed my analytical skills and understanding of business operations, preparing me for further academic and professional pursuits in the commercial sector.",
      key_achievements: [
        "Strong foundation in accounting, commerce, and economics",
        "Developed analytical and business understanding skills",
      ],
    },
  ];

  return (
    <div
      id="educations"
      className="max-w-10/12 mx-auto space-y-8 md:space-y-12 min-h-[100vh-73px]"
    >
      <div className="flex justify-center items-center gap-2">
        <span className="text-secondary">
          <MdOutlineMenuBook size={30} />
        </span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center gap-2">
          My <span className="underline text-secondary">Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educations.map((education) => (
          <div key={education.id} className="bg-gradient-to-tr from-primary to-secondary p-10 rounded-xl space-y-2 text-accent">
            <h5 className="text-xl flex items-center gap-2 font-bold">
              <FaUniversity />
              {education?.institute}
            </h5>
            <h3 className="text-sm flex items-center gap-2">
              <FaUserGraduate size={20} /> {education?.level}
            </h3>

            <h6 className="flex items-center gap-2 mb-5 text-sm">
              <SlCalender />
              {education?.duration}
            </h6>
            <p className="text-justify">{education?.description}</p>
            <span className="badge badge-secondary flex items-center gap-2 h-fit">
              <FaLayerGroup /> Group: {education?.group}
            </span>
            <span className="badge badge-secondary flex items-center gap-2 h-fit">
              <MdGrade />
              GPA: {education?.gpa}
            </span>
            <h5 className="flex items-center gap-2 font-bold">
              <FaAward />
              Key Achievements
            </h5>
            <ul className="list-disc list-inside">
              {education.key_achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
