import React from "react";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import ActionPanel from "./components/ActionPanel.jsx";
import WorkflowList from "./components/WorkflowList.jsx";

const stats = [
  { label: "Open Vacancies", value: "8" },
  { label: "Applications", value: "146" },
  { label: "Active Interns", value: "23" },
  { label: "Projects", value: "6" }
];

const workflowSteps = [
  {
    title: "Create a vacancy",
    description: "Hiring managers post new internship opportunities with requirements and benefits."
  },
  {
    title: "Collect applicant profiles",
    description: "Applicants build a profile with education, skills, and resume before applying."
  },
  {
    title: "Review and decide",
    description: "Recruiters accept or reject applications and instantly onboard accepted candidates."
  },
  {
    title: "Manage interns",
    description: "Assign mentors, tasks, and projects with live status tracking."
  }
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="stats">
          {stats.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} />
          ))}
        </section>

        <section className="grid">
          <ActionPanel />
          <WorkflowList steps={workflowSteps} />
        </section>
      </main>
    </div>
  );
}
