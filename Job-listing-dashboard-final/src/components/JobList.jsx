// src/components/JobList.jsx
import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, filterCategory }) => {
  const filteredJobs = filterCategory
    ? jobs.filter((job) => job.category === filterCategory)
    : jobs;

  return (
    <ul className="job-list">
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobList;
