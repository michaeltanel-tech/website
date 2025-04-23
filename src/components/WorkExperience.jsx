import React from "react";
import { DetailedSection } from "./DetailedSection";

export const WorkExperience = () => {
  return (
    <div className="content workExperience">
      <DetailedSection
        title="Team Lead & Software Developer - Business Banking Application"
        company="3Pillar Global (previously Jonah Group)"
        workPeriod="Feb 2022 - Present"
        description={[
          "Full stack developer & team lead working on client projects in the finance industry.",
          "In charge of on-time and high-quality delivery of new features, improvements, and bugfixes, as well as managing the team.",
          "Tech stack includes: React, Redux, Java Spring Boot, JPA.",
        ]}
      />
      <DetailedSection
        title="Freelance Software Consultant"
        company="Michael Tanel Consulting"
        workPeriod="May 2020 - March 2022"
        description={[
          "Performed consulting services in the software and IT space.",
          "Managed projects with multiple clients. Worked closely with them to understand their business problems, and then deliver a custom or out-of-box solution to fit their needs.",
          "Projects ranged from: software development, server migrations, compliance management, IT infrastructure planning, and customer service.",
        ]}
      />
      <DetailedSection
        title="Software Developer - Online Design Template Website"
        company="Venngage Inc."
        workPeriod="June 2019 - March 2020"
        description={[
          "Full stack developer, working with Docker, Express.js for Node.js, React, Redux, CSS to roll out new features, continuous improvements, and bugfixes on a weekly release basis.",
          "Large focus on improving processes to follow agile techniques – implementing TDD, proper staging and pre-staging environments, code cleanups, project breakdown & scoping, etc.",
        ]}
      />
      <DetailedSection
        title="Software Developer - Part & Tool Rentals System"
        company="Magna"
        workPeriod="Summers 2016 & 2018"
        description={[
          "Replaced a paper ticket system used to track part and tool rentals. Roughly 20 hours per week were being wasted managing this paper system.",
          "Myself, along with a junior co-op developer, were given the opportunity to design and implement a web solution to manage the parts and tools.",
          "I took the lead developer/project manager role. I designed the database schema and setup the servers required for the project which included: database server running MariaDB, Apache server with PHP5, a GitLab server to host our code repository.",
          "Using Angular 6 and Google Material Design, we implemented a clean and user friendly website to manage these parts and tools in a more efficient manner.",
        ]}
      />
      <DetailedSection
        title="Software Developer - Invoice & Payment Tracking System"
        company="Magna"
        workPeriod="Summers 2016 & 2018"
        description={[
          "Collaborated with the Finance team to redesign and implement an MS Access solution to model the data for invoice and payment tracking as the existing solution could not support this.",
          "Designed and implemented a relational database model consisting of 23 tables.",
        ]}
      />
      <DetailedSection
        title="Software Developer - Aircraft Mainentance Management Software"
        company="IFS"
        workPeriod="May 2017 - April 2018"
        description={[
          "Supported an aviation maintenance management software product for the commercial and defense industries.",
          "Main responsibilities included: feature design and implementation, bug fixes, code reviews, and documentation.",
          "The first project focused on a legacy system, managing parts and tools used for aircraft maintenance and employee scheduling. The second project focused on a separate aircraft maintenance scheduling application.",
          "Key technologies and approaches: AWS, PostgreSQL, AngularJS, Java backend, Docker, Shippable, Bit Bucket, Git, agile methodology.",
        ]}
      />
    </div>
  );
};
