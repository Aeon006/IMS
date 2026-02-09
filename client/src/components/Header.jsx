import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Internship Management System</p>
        <h1>Hire, onboard, and guide interns with one workspace.</h1>
        <p className="subtitle">
          Build vacancies, collect applicant profiles, evaluate applications, and manage intern tasks and
          projects in a single MERN-powered platform.
        </p>
      </div>
      <div className="header-card">
        <h2>Today’s focus</h2>
        <p>Review 12 new applications and assign projects to 4 active interns.</p>
        <div className="header-actions">
          <button className="primary">Review applications</button>
          <button className="ghost">Create vacancy</button>
        </div>
      </div>
    </header>
  );
}
