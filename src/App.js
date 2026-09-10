import React, { useState, useEffect } from "react";

export default function App() {
const [page, setPage] = useState("Home");
const [tasks, setTasks] = useState([
{id: 1, text: "Design EFE TIMES workspace UI", done: false, project: "Design", priority: "Urgent"},
{id: 2, text: "Implement Task List & Kanban Board", done: false, project: "Engineering", priority: "High"},
{id: 3, text: "Connect Express backend with Supabase", done: false, project: "Engineering", priority: "Normal"},
{id: 4, text: "Visit the gym", done: false, project: "Productivity", priority: "Normal"},
{id: 5, text: "Play football", done: true, project: "Productivity", priority: "Normal"},
{id: 6, text: "Get some groceries", done: false, project: "Productivity", priority: "High"},
{id: 7, text: "Review daily team goals", done: false, project: "Productivity", priority: "Normal"},
{id: 8, text: "Call client for feedback", done: false, project: "Engineering", priority: "Normal"},
]);
const [date, setDate] = useState("");

useEffect(() => {
setDate(new Date().toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}))
}, [])

const toggleTask = (id) => {
setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t))
}

const todayTasks = tasks.filter(t => !t.done);

return (
<div style={{display: "flex", minHeight: "100vh", fontFamily: "Arial", background: "#F8F9FA"}}>
{/* CLICKABLE NAVIGATION BAR */}
<div style={{width: 220, background: "white", padding: 20, borderRight: "1px solid #ddd"}}>
<h2 style={{color: "#6B46C1", marginBottom: 30}}>EFE TIMES</h2>
<div onClick={() => setPage("Home")} style={{padding: 10, cursor: "pointer", background: page==="Home"?"#EDE9FE":"", color: page==="Home"?"#6B46C1":"#000", borderRadius: 8, fontWeight: page==="Home"?600:400}}>Home</div>
<div onClick={() => setPage("Tasks")} style={{padding: 10, cursor: "pointer", background: page==="Tasks"?"#EDE9FE":"", color: page==="Tasks"?"#6B46C1":"#000", borderRadius: 8, fontWeight: page==="Tasks"?600:400}}>Tasks</div>
<div onClick={() => setPage("Projects")} style={{padding: 10, cursor: "pointer", background: page==="Projects"?"#EDE9FE":"", color: page==="Projects"?"#6B46C1":"#000", borderRadius: 8, fontWeight: page==="Projects"?600:400}}>Projects</div>
</div>

{/* MAIN */}
<div style={{flex: 1, padding: 30}}>

{/* HOME PAGE */}
{page === "Home" && (
<>
<div style={{background: "linear-gradient(135deg, #7C3AED, #5B21B6)", color: "white", padding: 25, borderRadius: 12, marginBottom: 20}}>
<p>{date}</p>
<h1>Good morning, welcome to your work!</h1>
<p><b>Daily Reminder:</b> You have {todayTasks.length} tasks left today</p>
</div>
<h2>Today's Priority Focus</h2>
{todayTasks.slice(0,3).map(t => (
<div key={t.id} onClick={() => toggleTask(t.id)} style={{background: "white", padding: 15, marginBottom: 10, borderRadius: 8, cursor: "pointer"}}>
<input type="checkbox" checked={t.done} readOnly /> {t.text}
</div>
))}
</>
)}

{/* TASKS PAGE WITH TABLE */}
{page === "Tasks" && (
<>
<h1>All Tasks</h1>
<table style={{width: "100%", background: "white", borderRadius: 12, borderCollapse: "collapse"}}>
<thead>
<tr style={{borderBottom: "2px solid #E5E7EB", textAlign: "left"}}>
<th style={{padding: 12}}>Task</th><th style={{padding: 12}}>Project</th><th style={{padding: 12}}>Priority</th><th style={{padding: 12}}>Status</th>
</tr>
</thead>
<tbody>
{tasks.map(t => (
<tr key={t.id} onClick={() => toggleTask(t.id)} style={{cursor: "pointer", borderBottom: "1px solid #F3F4F6", opacity: t.done?0.5:1}}>
<td style={{padding: 12}}><input type="checkbox" checked={t.done} readOnly /> {t.text}</td>
<td style={{padding: 12}}>{t.project}</td>
<td style={{padding: 12}}>{t.priority}</td>
<td style={{padding: 12}}>{t.done ? "Done" : "To Do"}</td>
</tr>
))}
</tbody>
</table>
</>
)}

{/* PROJECTS PAGE */}
{page === "Projects" && (
<>
<h1>Projects Overview</h1>
<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20}}>
<div style={{background: "white", padding: 20, borderRadius: 12}}>
<h3>Productivity</h3><p>{tasks.filter(t=>t.project==="Productivity").length} tasks</p>
</div>
<div style={{background: "white", padding: 20, borderRadius: 12}}>
<h3>Engineering</h3><p>{tasks.filter(t=>t.project==="Engineering").length} tasks</p>
</div>
<div style={{background: "white", padding: 20, borderRadius: 12}}>
<h3>Design</h3><p>{tasks.filter(t=>t.project==="Design").length} tasks</p>
</div>
</div>
</>
)}
</div>
</div>
);
}





