import React, { useState, useEffect } from "react";

export default function App() {
const [page, setPage] = useState("Home"); // Home, Tasks, Projects
const [tasks, setTasks] = useState([
{id: 1, text: "Design EFE TIMES workspace UI", done: false},
{id: 2, text: "Implement Task List & Kanban Board", done: false},
{id: 3, text: "Connect Express backend with Supabase", done: false},
{id: 4, text: "Visit the gym", done: false},
{id: 5, text: "Play football", done: true},
{id: 6, text: "Get some groceries", done: false},
{id: 7, text: "Review daily team goals", done: false},
{id: 8, text: "Call client for feedback", done: false},
]);
const [date, setDate] = useState("");

useEffect(() => {
setDate(new Date().toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}))
}, [])

const toggleTask = (id) => {
setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t))
}

const todayTasks = tasks.filter(t => !t.done);
const completedTasks = tasks.filter(t => t.done);

const MenuItem = ({label}) => (
<div onClick={() => setPage(label)}
style={{
padding: "10px 12px", cursor: "pointer", borderRadius: 8, marginBottom: 5,
background: page === label ? "#EDE9FE" : "transparent",
color: page === label ? "#6B46C1" : "#374151", fontWeight: page === label ? 600 : 400
}}>
{label}
</div>
)

return (
<div style={{display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif", background: "#F8F9FA"}}>
{/* SIDEBAR */}
<div style={{width: 220, background: "white", padding: 20, borderRight: "1px solid #ddd"}}>
<h2 style={{color: "#6B46C1", marginBottom: 30}}>EFE TIMES</h2>
<MenuItem label="Home" />
<MenuItem label="Tasks" />
<MenuItem label="Projects" />
</div>

{/* MAIN CONTENT */}
<div style={{flex: 1, padding: 30}}>

{/* 1. HOME PAGE */}
{page === "Home" && (
<>
<div style={{background: "#6B46C1", color: "white", padding: 25, borderRadius: 12, marginBottom: 20}}>
<p>{date}</p>
<h1>Good morning, welcome to your work!</h1>
<p><b>Daily Reminder:</b> You have {todayTasks.length} tasks left today</p>
</div>
<h2>Today's Priority Focus</h2>
{todayTasks.slice(0,3).map(t => (
<div key={t.id} onClick={() => toggleTask(t.id)}
style={{background: "white", padding: 15, marginBottom: 10, borderRadius: 8, cursor: "pointer"}}>
<input type="checkbox" checked={t.done} readOnly /> {t.text}
</div>
))}
</
