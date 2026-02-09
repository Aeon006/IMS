import React from "react";

export default function WorkflowList({ steps }) {
  return (
    <section className="panel">
      <h2>Hiring workflow</h2>
      <ol className="workflow">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="badge">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
