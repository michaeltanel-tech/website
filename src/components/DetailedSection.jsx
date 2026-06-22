export const DetailedSection = ({ title, company, workPeriod, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        {company && <p className="card-company">{company}</p>}
        {workPeriod && <p className="card-period">{workPeriod}</p>}
      </div>
      {description?.length > 0 && (
        <ul>
          {description.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
