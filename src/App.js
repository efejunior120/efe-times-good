import React, { useState } from "react";

export default function App() {
const [activeTab, setActiveTab] = useState("dashboard");

return (
<div style={{
minHeight: "100vh",
background: "linear-gradient(135deg, #6B46C1 0%, #9333EA 100%)",
color: "white",
fontFamily: "Arial, sans-serif",
padding: "20px"
}}>
<h1 style={{fontSize: "32px", fontWeight: "bold"}}>Good morning, EFE 👋</h1>
<p style={{opacity: 0.8}}>Welcome to your EFE TIMES Work Suite</p>

<div style={{
display: "flex",
gap: "10px",
marginTop: "20px",
marginBottom: "20px"
}}>
<button
onClick={() => setActiveTab("dashboard")}
style={{
padding: "10px 20px",
borderRadius: "8px",
border: "none",
background: activeTab === "dashboard" ? "white" : "rgba(255,255,255,0.2)",
color: activeTab === "dashboard" ? "#6B46C1" : "white",
fontWeight: "bold",
cursor: "pointer"
}}>
Dashboard
</button>
<button
onClick={() => setActiveTab("clients")}
style={{
padding: "10px 20px",
borderRadius: "8px",
border: "none",
background: activeTab === "clients" ? "white" : "rgba(255,255,255,0.2)",
color: activeTab === "clients" ? "#6B46C1" : "white",
fontWeight: "bold",
cursor: "pointer"
}}>
Clients
</button>
<button
onClick={() => setActiveTab("invoices")}
style={{
padding: "10px 20px",
borderRadius: "8px",
border: "none",
background: activeTab === "invoices" ? "white" : "rgba(255,255,255,0.2)",
color: activeTab === "invoices" ? "#6B46C1" : "white",
fontWeight: "bold",
cursor: "pointer"
}}>
Invoices
</button>
</div>

<div style={{
background: "white",
color: "#333",
borderRadius: "16px",
padding: "20px"
}}>
{activeTab === "dashboard" && <h2>📊 Dashboard: Your stats will go here</h2>}
{activeTab === "clients" && <h2>👥 Clients: Manage your clients here</h2>}
{activeTab === "invoices" && <h2>🧾 Invoices: Create invoices here</h2>}
</div>
</div>
);
}

