# 📝 Full Stack Blog Editor 

A full-stack blog editor application with **auto-save draft**, **publish**, and **edit** features. Built to demonstrate frontend, backend, and database integration skills.

---

## ⚙️ Tech Stack

### 🖥 Frontend
- **Framework:** React.js
- **Styling:** CSS Modules
- **Debounce + Auto-Save:** Custom React Hook

### 🛠 Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** JWT 
- **API Type:** RESTful

---

## 🧠 Features

- 📝 Create/Edit blog posts (title, content, tags)
- 💾 Save as Draft
- 🚀 Publish blog posts
- 🔄 Auto-Save Draft
  - After 5 seconds of inactivity (debounced)
  - Also saved every 30 seconds as backup
- 🧾 View all blogs
  - Drafts and Published listed separately
- 🔐 JWT-protected APIs (Bonus)
- 🔔 Toast notification on auto-save (Bonus)

---

## 🧱 Folder Structure

