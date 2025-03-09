import React, { useState } from "react";
import JobFilter from "./components/JobFilter";
import withTitle from "./components/withTitle";
import "./App.css";

const JobList = ({ jobs }) => {
  return (
    <ul className="job-list">
      {jobs.map((job, index) => (
        <li key={index}>{job.title}</li>
      ))}
    </ul>
  );
};

// Sample job data
const jobData = [
  { title: "Frontend Developer", category: "Tech" },
  { title: "Backend Developer", category: "Tech" },
  { title: "HR Manager", category: "Management" },
];

const JobListWithTitle = withTitle(JobList, "Job Listings");

const App = () => {
  const [category, setCategory] = useState("");

  const filteredJobs =
    category === ""
      ? jobData
      : jobData.filter((job) => job.category === category);

  return (
    <div className="container">
      <h1>Job Dashboard</h1>
      <JobFilter
        categories={["Tech", "Management"]}
        onSelectCategory={setCategory}
      />
      <JobListWithTitle jobs={filteredJobs} />
    </div>
  );
};

export default App;
