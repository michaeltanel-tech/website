import { NavLink } from "react-router-dom";
import { DetailedSection } from "./DetailedSection";

export const Education = () => {
  return (
    <div className="content education">
      <p className="section-heading">Education</p>
      <DetailedSection
        title="Bachelor's Degree in Applied Science — Computer Engineering"
        company="Queen's University"
        workPeriod={"Class of 2019"}
        description={[
          "Specialized in Software Engineering with a focus on backend development and solution design.",
          "Developed a strong interest in application security.",
        ]}
      />
      <DetailedSection
        title="Teaching Assistant — ELEC 377: Operating Systems"
        company="Queen's University"
        workPeriod={"2019"}
        description={[
          "Assisted in running a 2-hour lab each week with ~60 students.",
          "Answered questions, clarified concepts, and evaluated lab reports.",
        ]}
      />
      <DetailedSection
        title="Professional Internship"
        company={"IFS (formerly Mxi Technology)"}
        workPeriod={"May 2017 – April 2018"}
        description={[
          "Spent 1 year between 3rd and 4th year working as a junior software developer for IFS.",
          <> More details in the <NavLink to="/work-experience">Experience section</NavLink>.</>,
        ]}
      />
      <DetailedSection
        title="President — Queen's Network Security Design Team"
        company="Queen's University"
        workPeriod={"2019"}
        description={[
          "Created lecture material, ran tutorials, and handled logistics and growth of the team.",
          "Topics covered: XSS, SQL injection, reconnaissance, ARP spoofing, packet sniffing, exploits, firewalls, password cracking, and more.",
        ]}
      />
      <DetailedSection
        title="Frosh Week Leader"
        company="Queen's University"
        workPeriod={"2015"}
        description={[
          "Led a group of 30 first-year students throughout Frosh Week alongside 8 teammates.",
          "Goal was to welcome incoming students, help them build friendships, and give them a great introduction to Queen's.",
        ]}
      />
      <DetailedSection
        title="Lead Developer — Queen's Technology & Media Association (QTMA)"
        company="Queen's University"
        workPeriod={"2019"}
        description={[
          "Built a collaborative music app where users can request and vote on songs to determine the playlist queue.",
          "Led the development team as part of QTMA's startup incubator initiative.",
        ]}
      />
    </div>
  );
};
