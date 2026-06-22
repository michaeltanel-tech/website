import { DetailedSection } from "./DetailedSection";

export const WorkExperience = () => {
  return (
    <div className="content workExperience">
      <p className="section-heading">Experience</p>
      <DetailedSection
        title="Team Lead & Software Developer"
        company="3Pillar Global (previously Jonah Group) — Business Banking Application"
        workPeriod="Feb 2022 – Present"
        description={[
          "Full stack developer & team lead working on client projects in the finance industry.",
          "In charge of on-time and high-quality delivery of new features, improvements, and bugfixes, as well as managing the team.",
          "Tech stack includes: React, Redux, Java Spring Boot, JPA.",
        ]}
      />
      <DetailedSection
        title="Freelance Software Consultant"
        company="Michael Tanel Consulting"
        workPeriod="May 2020 – March 2022"
        description={[
          "Performed consulting services in the software and IT space.",
          "Managed projects with multiple clients — worked closely with them to understand their business problems and deliver custom or out-of-box solutions.",
          "Projects ranged from software development, server migrations, compliance management, IT infrastructure planning, and customer service.",
        ]}
      />
      <DetailedSection
        title="Software Developer — Online Design Template Website"
        company="Venngage Inc."
        workPeriod="June 2019 – March 2020"
        description={[
          "Full stack developer using Docker, Express.js, React, Redux, and CSS to ship features on a weekly release cadence.",
          "Large focus on improving processes to follow agile techniques — implementing TDD, proper staging environments, code cleanups, and project scoping.",
        ]}
      />
      <DetailedSection
        title="Software Developer — Aircraft Maintenance Management Software"
        company="IFS"
        workPeriod="May 2017 – April 2018"
        description={[
          "Supported an aviation maintenance management software product for the commercial and defense industries.",
          "Responsibilities included feature design and implementation, bug fixes, code reviews, and documentation.",
          "Key technologies: AWS, PostgreSQL, AngularJS, Java, Docker, Shippable, Git, agile methodology.",
        ]}
      />
      <DetailedSection
        title="Software Developer — Part & Tool Rentals System"
        company="Magna"
        workPeriod="Summers 2016 & 2018"
        description={[
          "Replaced a paper ticket system that wasted ~20 hours/week managing part and tool rentals.",
          "Led design and implementation as the lead developer — designed the database schema and set up MariaDB, Apache/PHP, and GitLab servers.",
          "Built a clean, user-friendly Angular 6 + Google Material Design web app.",
        ]}
      />
      <DetailedSection
        title="Software Developer — Invoice & Payment Tracking System"
        company="Magna"
        workPeriod="Summers 2016 & 2018"
        description={[
          "Collaborated with the Finance team to redesign an MS Access solution for invoice and payment tracking.",
          "Designed and implemented a relational database model consisting of 23 tables.",
        ]}
      />
    </div>
  );
};
