// src/components/JobItem.jsx
import React from "react";

const JobItem = React.memo(({ job }) => {
  console.log("Rendering JobItem:", job.title);
  return <li>{job.title}</li>;
});

export default JobItem;
