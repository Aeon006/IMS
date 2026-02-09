import React from "react";

const actions = [
  {
    title: "Post vacancy",
    description: "Create internships with role details, duration, stipend, and requirements."
  },
  {
    title: "Accept or reject",
    description: "Move applications through review states and trigger intern onboarding."
  },
  {
    title: "Assign tasks",
    description: "Deliver learning tasks with deadlines and track progress per intern."
  },
  {
    title: "Assign projects",
    description: "Group interns by project, monitor milestones, and close out deliverables."
  }
];

export default function ActionPanel() {
  return (
    <section className="panel">
      <h2>Core management actions</h2>
      <div className="panel-grid">
        {actions.map((action) => (
          <div key={action.title} className="panel-item">
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
