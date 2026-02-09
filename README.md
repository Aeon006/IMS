# Internship Management System (MERN + MVC)

This project provides a MERN-based Internship Management System that follows an MVC pattern on the server.

## Features

- Create vacancies for internship roles.
- Applicants create profiles before applying.
- Accept or reject applications and automatically onboard interns.
- Manage interns, tasks, and projects.

## Project Structure

```
IMS/
  client/   # React (Vite)
  server/   # Express + Mongoose (MVC)
```

## Getting Started

### Server

```
cd server
cp .env.example .env
npm install
npm run dev
```

### Client

```
cd client
npm install
npm run dev
```

## API Overview

- `POST /api/applicants/profiles` - create applicant profile
- `GET /api/applicants/profiles` - list applicant profiles
- `POST /api/vacancies` - create vacancy
- `GET /api/vacancies` - list vacancies
- `PATCH /api/vacancies/:vacancyId/status` - close/open vacancy
- `POST /api/applications` - apply to a vacancy
- `GET /api/applications` - list applications
- `PATCH /api/applications/:applicationId/status` - accept/reject applications
- `GET /api/interns` - list interns
- `PATCH /api/interns/:internId` - update intern
- `POST /api/tasks` - assign task to intern
- `GET /api/tasks` - list tasks (optional query `?internId=`)
- `PATCH /api/tasks/:taskId/status` - update task status
- `POST /api/projects` - create project
- `GET /api/projects` - list projects
- `PATCH /api/projects/:projectId` - update project
