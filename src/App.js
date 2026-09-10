import React, { useState } from "react";

export default function App() {
const [activeMenu, setActiveMenu] = useState("Home (My Work)");

const tasks = [
{id: 1, title: "Design EFE TIMES workspace UI", priority: "Urgent", status: "To Do", project: "Design"},
{id: 2, title: "Implement Task List & Kanban Board views", priority: "High", status: "In Progress", project: "Engineering"},
{id: 3, title: "Connect Express backend with Supabase", priority: "Normal", status: "In Progress", project: "Engineering"},
{id: 4, title: "Review daily team goals & milestones", priority: "Low", status: "To Do", project: "Productivity"},
];

const priorityTasks = tasks.slice(0,3);

return (
<div style={{display: "flex", minHeight: "100vh", background: "#F8F9FA", fontFamily: "Inter, system-ui"}}>

{/* LEFT SIDEBAR */}
<div style={{width: 260, background: "white", borderRight: "1px solid #E5E7EB", padding: "16px"}}>
<div style={{display: "flex", alignItems: "center", gap: 10, marginBottom: 24, padding: "8px"}}>
<div style={{width: 32, height: 32, background: "#6B46C1", borderRadius: 8, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700}}>E</div>
<h2 style={{fontSize: 18, fontWeight: 700, margin: 0}}>EFE TIMES</h2>
</div>

<div style={{marginBottom: 20}}>
<p style={{fontSize: 12, color: "#6B7280", textTransform: "uppercase", fontWeight: 600, paddingLeft: 8}}>WORKSPACE</p>
{["Home (My Work)", "All Tasks", "To Do", "In Progress", "Completed", "Urgent Priority"].map(item => (
<div key={item} onClick={() => setActiveMenu(item)}
style={{padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontSize: 14,
background: activeMenu === item ? "#EDE9FE" : "transparent",
color: activeMenu === item ? "#6B46C1" : "#374151", fontWeight: activeMenu === item ? 600 : 400}}>
{item}
</div>
))}
</div>

<div>
<p style={{fontSize: 12, color: "#6B7280", textTransform: "uppercase", fontWeight: 600, paddingLeft: 8}}>SPACES & PROJECTS</p>
{["Productivity", "Engineering", "Design"].map(item => (
<div key={item} style={{padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontSize: 14, color: "#374151"}}>
{item}
</div>
))}
</div>
</div>

{/* MAIN CONTENT */}
<div style={{flex: 1, padding: "
