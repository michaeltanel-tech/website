import React from "react";

export const DetailedSection = ({ title, company, workPeriod, description,  }) => {
  return (
    <>
      <h2 className="workTitle">{title}</h2>
      <h4>{company}</h4>
      <h5>{workPeriod}</h5>
      <div>
        <ul>
          {description?.map((line) => {
            return <li>{line}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
