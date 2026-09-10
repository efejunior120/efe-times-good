import React, { useState } from "react";

export default function App() {
const [activeMenu, setActiveMenu] = useState("Home (My Work)");

const menuItems = [
{label: "Home (My Work)", count: 3},
{label: "All Tasks", count: 4},
{label: "To Do", count: 2},
{label: "In Progress", count: 1},
{label: "Completed", count: 1},
{label: "Urgent Priority", count: 1},
];

const spaces = ["Productivity", "Engineering", "Design"];

const priorityTasks = [
{title: "Design EFE TIMES workspace UI", priority: "Urgent", project: "Design"},
{title: "Implement Task List & Kanban Board", priority: "High", project: "Engineering"},
{title: "Connect Express backend with Supabase", priority: "Normal", project: "Engineering"},
];

const allTasks = [
{title: "Design EFE TIMES workspace UI", status: "To Do", project: "Design"},
{title: "Implement Task List & Kanban Board", status: "In Progress", project: "Engineering"},
{title: "Connect Express backend with Supabase", status: "In Progress", project: "Engineering"},
{title: "Review daily team goals", status: "To Do", project: "Productivity"},
];

return (
<div style={{display: "flex", minHeight: "100vh", background: "#F8F9FA", fontFamily: "Inter, system-ui, sans-serif"}}>

{/* LEFT SIDEBAR */}
<div style={{width: 260, background: "white", borderRight: "1px solid #E5E7EB", padding: "16px"}}>
<div style={{display: "flex", alignItems: "center", gap: 10, marginBottom: 24, padding: "8px"}}>
<div style={{width: 32, height: 32, background: "#6B46C1", borderRadius: 8, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18}}>E</div>
<h2 style={{fontSize: 18, fontWeight: 700, margin: 0}}>EFE TIMES</h2>
</div>

<div style={{marginBottom: 20}}>
<p style={{fontSize: 11, color: "#6B7280", textTransform: "uppercase", fontWeight: 600, paddingLeft: 8, letterSpacing: 0.5}}>WORKSPACE</p>
{menuItems.map(item => (
<div key={item.label} onClick={() => setActiveMenu(item.label)}
style={{display: "flex", justifyContent: "space-between", padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontSize: 14,
background: activeMenu === item.label ? "#EDE9FE" : "transparent",
color: activeMenu === item.label ? "#6B46C1" : "#374151", fontWeight: activeMenu === item.label ? 600 : 400}}>
<span>{item.label}</span>
<span>{item.count}</span>
</div>
))}
</div>

<div>
<p style={{fontSize: 11, color: "#6B7280", textTransform: "uppercase", fontWeight: 600, paddingLeft: 8, letterSpacing:
