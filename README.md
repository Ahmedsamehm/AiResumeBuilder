# AI Resume Builder

<img width="1515" height="777" alt="Screenshot 2025-08-13 172213" src="https://github.com/user-attachments/assets/401b1efd-258a-4e9f-8ff3-b3ca37356c2a" />



Build ATS-friendly resumes, get AI-powered feedback, and manage all your job applications in one place.

👉 **Demo:** [Website](https://ai-resume-builder-tau-sandy.vercel.app/)

---

## 🧪 Why This Project?

I wanted to create a tool that combines **resume creation** with **AI assistance**.  
The main goals:

- Share data easily between components using **Context API**
- Keep code **clean** and **maintainable** with **custom hooks**
- Store and manage resumes in **Supabase**
- Improve my **Next.js 15** and **React.js 19** skills

---

## 🛠️ Tech Stack

- **Next.js 15** – frontend and server components
- **React 19** – client components and interactivity
- **TailwindCSS + ShadCN UI** – modern UI styling
- **Supabase** – database, storage, authentication
- **React Query + Axios** – data fetching and caching
- **Context API** – global state management
- **AI (gemini)** – grammar checks, keyword suggestions

---

## 🧩 Challenges & Highlights

### 🖥️ Clean Architecture in Next.js

- Separated **server components** from **client components** for better performance.
- Organized code into clear folders: `_components`, `_hooks`, `_services`, `_types`.

### 🤖 AI as My Code Mentor

- After each feature, AI reviewed my code.
- Provided feedback on best practices.
- Suggested better ways to handle features.
- All notes and improvements were saved in **Obsidian** for future reference.

---

## 🚀 Key Features

- **Resume Editor**
  - Add personal info, skills, experience, education
  - AI grammar corrections
  - AI keyword suggestions

- **Template**
  - Download as PDF
---

## 📂 Folder Structure

```
📁 dashBoard/
│   ├── 📁 _components/
│   │   ├── 📄 AddResume.tsx
│   │   ├── 📄 ResumeClient.tsx
│   │   ├── 📄 ResumeList.tsx
│   │   └── 📄 Search.tsx
│   ├── 📁 _hooks/
│   │   ├── 📄 useCreateResume.ts
│   │   ├── 📄 useDeleteResume.ts
│   │   └── 📄 useGetData.ts
│   ├── 📁 _services/
│   │   ├── 📄 createResume.ts
│   │   ├── 📄 deleteResume.ts
│   │   └── 📄 fetchResumes.ts
│   ├── 📁 _types/
│   │   └── 📄 types.ts
│   ├── 📄 layout.tsx
│   ├── 📄 loading.tsx
│   └── 📄 page.tsx
```
---
## 🔮 Future Plans

- Add PDF upload with **ATS scoring**
- AI-based resume improvements based on job description
- More templates for users to choose from

---
Thanks for reading!  
This project helped me improve my **Next.js architecture**, work with **Supabase**, and integrate **AI** into a real-world app.


