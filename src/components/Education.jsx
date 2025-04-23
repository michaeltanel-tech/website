import React from "react";
import { NavLink } from "react-router-dom";
import { DetailedSection } from "./DetailedSection";

export const Education = () => {
  return (
    <div className="content education">
      <DetailedSection
        title="Bachelor's Degree in Applied Science"
        company="Queen's University Class of 2019"
        description={[
          "Studied engineering - specializing in Software Engineering.",
          "My main areas of focus were backend development and solution design. I also enjoyed learning about application security.",
        ]}
      />
      <DetailedSection
        title="Teaching Assistant - ELEC 377: Operating Systems"
        company="2019"
        description={[
          "Assisted in running a 2 hour lab each week with ~60 students",
          "Answered questions and clarified concepts/problems",
          "Evaluated lab reports",
        ]}
      />
      <DetailedSection
        title="Professional Internship"
        company="May 2017 - April 2018"
        description={[
          "Between 3rd and 4th year, I spent 1 year working as a junior software developer for IFS.",
          `More details can be found in the ${(<NavLink to="/work-experience">work section</NavLink>)}.`,
        ]}
      />
      <DetailedSection
        title="President of the Queen's Network Security Design Team"
        company="2019"
        description={[
          "Responsible for creating lecture material, running tutorials, and handling logistics and growth of the team.",
          "Going over topics such as XSS and SQL injection attacks, reconnaissance, ARP spoofing, packet sniffing, exploits, firewalls, password-cracking, and more.",
        ]}
      />
      <DetailedSection
        title="Frosh Week Leader"
        company="2015"
        description={[
          "Involved in being one of the leaders for a frosh group during frosh week",
          "Myself, along with 8 others on a team, led a group of 30 first year students throughout the first week of being at Queen's. The goal was to welcome them to the school, and help them make friends and have a great introduction to what Queen's was like.",
        ]}
      />
      <DetailedSection
        title="Lead Developer on the Queen's Technology and Media Association (QTMA)"
        company="2019"
        description={[
          "QTMA (Queen's Technology and Media Association) started an organization to launch and support startup ideas. Our team's idea was to create a collaborative music playing app, where users can request and vote on songs in order to determine which ones will get played next.",
          "More about this in the projects section.",
        ]}
      />
    </div>
  );
};
