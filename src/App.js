import React, { useState, useEffect } from "react";

export default function App() {
const [tasks, setTasks] = useState([
{id: 1, text: "Design EFE TIMES workspace UI", done: false},
{id: 2, text: "Implement Task List & Kanban Board", done: false},
{id: 3, text: "Connect Express backend with Supabase", done: true},
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
<div style={{display: "flex", minHeight: "100vh", fontFamily: "Arial"}}>
{/* SIDEBAR */}
<div style={{width: 220, background: "white", padding: 20, borderRight: "1px solid #ddd"}}>
<h2 style={{color: "#6B46C1"}}>EFE TIMES</h2>
<p>Home</p><p>Tasks</p><p>Projects</p>
</div>

{/* MAIN */}
<div style={{flex: 1, padding: 30, background: "#F8F9FA"}}>
{/* BANNER */}
<div style={{background: "#6B46C1", color: "white", padding: 25, borderRadius: 12, marginBottom: 20}}>
<p>{date}</p>
<h1>Good morning, welcome to your work!</h1>
<p><b>Daily Reminder:</b> You have {todayTasks.length} tasks left today</p>
</div>

<h2>Today's Priority Focus</h2>
{/* TASKS - CLICK TO MARK/UNMARK */}
{tasks.map(t => (
<div key={t.id} onClick={() => toggleTask(t.id)}
style={{
background: "white", padding: 15, marginBottom: 10, borderRadius: 8,
cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
textDecoration: t.done ? "line-through" : "none",
opacity: t.done ? 0.5 : 1
}}>
<input type="checkbox" checked={t.done} readOnly />
<span>{t.text}</span>
</div>
))}
</div>
</div>
);
}

