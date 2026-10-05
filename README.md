# Clyptus Enterprise Platform – Full-Stack Architecture

Welcome to the **Clyptus Enterprise Platform** repository. This codebase is structured into clear **`frontend/`** and **`backend/`** project directories to allow team members working on different domains (**IT Recruitment**, **SAP**, and **AI**) to develop independently with zero merge conflicts.

---

## 📁 Monorepo Folder Structure

```
clyptus-website/
├── frontend/                     # React + Vite + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/          # Interactive UI Components
│   │   │   ├── Navbar.jsx       # Dynamic Header & Service Switcher
│   │   │   ├── HeroCanvas.jsx   # 3D Particle Canvas
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── ...
│   │   ├── data/
│   │   │   └── clyptusData.js   # Client Case Studies & Datasets
│   │   └── App.jsx
│   └── vite.config.js
│
├── backend/                      # Node.js + Express REST API Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── recruitment.controller.js  # 💼 IT Recruitment Domain (Maintained by User)
│   │   │   ├── sap.controller.js          # ⚙️ SAP S/4HANA Domain (Maintained by Friend 1)
│   │   │   ├── ai.controller.js           # 🧠 Agentic AI Domain (Maintained by Friend 2)
│   │   │   └── contact.controller.js      # Enterprise Consultation Requests
│   │   ├── routes/
│   │   │   ├── recruitment.routes.js      # /api/recruitment
│   │   │   ├── sap.routes.js              # /api/sap
│   │   │   ├── ai.routes.js               # /api/ai
│   │   │   └── contact.routes.js          # /api/contact
│   │   └── server.js                      # Express API Entry Point (Port 5000)
│   └── package.json
│
├── package.json                  # Root Monorepo Orchestration
└── README.md
```

---

## 👥 Teammate Domain Distribution

| Teammate | Assigned Domain | Backend Controller & Routes Location |
|---|---|---|
| **User (You)** | **IT Recruitment & ATS Platform** | `backend/src/controllers/recruitment.controller.js` <br> `backend/src/routes/recruitment.routes.js` |
| **Friend 1** | **SAP Enterprise ERP & BRIM** | `backend/src/controllers/sap.controller.js` <br> `backend/src/routes/sap.routes.js` |
| **Friend 2** | **AI Document OCR & RAG** | `backend/src/controllers/ai.controller.js` <br> `backend/src/routes/ai.routes.js` |

---

## 🚀 How to Run Locally

### 1. Run Frontend Dev Server (Port 5173)
```bash
npm run dev
# or
cd frontend && npm run dev
```

### 2. Run Backend API Server (Port 5000)
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

---

## 📡 Backend API Endpoints

- **Health Check:** `GET http://localhost:5000/api/health`
- **IT Recruitment Overview (User):** `GET http://localhost:5000/api/recruitment/overview`
- **IT Recruitment Projects (User):** `GET http://localhost:5000/api/recruitment/projects`
- **Job Requisition POST (User):** `POST http://localhost:5000/api/recruitment/requisition`
- **SAP Overview (Friend 1):** `GET http://localhost:5000/api/sap/overview`
- **AI Overview (Friend 2):** `GET http://localhost:5000/api/ai/overview`
