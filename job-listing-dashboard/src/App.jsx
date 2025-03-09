import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import withTitle from "./components/withTitle";
import JobFilter from "./components/JobFilter";
import JobItem from "./components/JobItem";
import useFetchJobs from "./hooks/useFetchJobs";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Full-stack"];

  // Day 1: HOC
  const JobListWithTitle = withTitle(JobList, "Job Listings");

  return (
    <AuthProvider>
      <div className="container">
        <h1>Job Dashboard</h1>

        {/* Day 2: Authentication Component */}
        <AuthComponent />

        {/* Day 1: HOC usage */}
        <JobListWithTitle selectedCategory={selectedCategory} />

        {/* Day 2: Job Filter */}
        <JobFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </AuthProvider>
  );
};

const AuthComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

// Day 1: JobList Component
const JobList = ({ selectedCategory }) => {
  const { data, loading, error } = useFetchJobs();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Mock data for jobs (replace with actual data fetching in useFetchJobs)
  const mockJobs = [
    { id: 1, title: "Frontend Developer", category: "Frontend" },
    { id: 2, title: "Backend Developer", category: "Backend" },
    { id: 3, title: "Full-stack Developer", category: "Full-stack" },
  ];

  const filteredJobs =
    selectedCategory === "All"
      ? mockJobs
      : mockJobs.filter((job) => job.category === selectedCategory);

  return (
    <ul>
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default App;
