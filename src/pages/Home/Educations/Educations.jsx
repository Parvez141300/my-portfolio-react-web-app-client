import React from "react";
import {
  FaAward,
  FaLayerGroup,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { MdGrade, MdOutlineMenuBook } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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

      <VerticalTimeline className="!m-0">
        {educations.map((education) => (
          <VerticalTimelineElement
            key={education?.id}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "var(--color-primary)", // তুমি চাইলে hex ব্যবহার করো: '#0ea5e9'
              color: "#fff",
              padding: "1.25rem",
              borderRadius: "0.75rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  var(--color-primary)",
            }}
            date={education?.duration}
            dateClassName="text-accent"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaUserGraduate size={20} />}
          >
            <div className="space-y-2">
              <h3 className="vertical-timeline-element-title text-xl flex items-center gap-2 font-bold">
                <FaUniversity />
                {education?.institute}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm flex items-center gap-2">
                <FaUserGraduate size={15} /> {education?.level}
              </h4>
              <p className="text-justify">{education?.description}</p>
              <div className="space-y-2 mt-2">
                <span className="badge badge-secondary flex items-center gap-2 h-fit">
                  <FaLayerGroup /> Group: {education?.group}
                </span>
                <span className="badge badge-secondary flex items-center gap-2 h-fit">
                  <MdGrade />
                  GPA: {education?.gpa}
                </span>
              </div>
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
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Educations;
