import React, { useState } from "react";
import "./App.css";

function App() {
const [activeTab, setActiveTab] = useState("dashboard");
const [clients, setClients] = useState([
{ id: 1, name: "ABC Company", email: "abc@mail.com", status: "Active" },
{ id: 2, name: "XYZ Ltd", email: "xyz@mail.com", status: "Pending" },
]);
const [invoices, setInvoices] = useState([
{ id: 1, client: "ABC Company", amount: "₦150,000", status: "Paid" },
{ id: 2, client: "XYZ Ltd", amount: "₦75,000", status: "Unpaid" },
]);
const [newClient, setNewClient] = useState({ name: "", email: "" });

const addClient = () => {
if (newClient.name && newClient.email) {
setClients([...clients, {
id: clients.length + 1,
...newClient,
status: "Active"
}]);
setNewClient({ name: "", email: "" });
}
};

return (
<div className="app">
<h1>Good morning, EFE 👋</h1>
<p>Welcome to your EFE TIMES Work Suite</p>

<div className="tabs">
<button className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>Dashboard</button>
<button className={activeTab === "clients" ? "active" : ""} onClick={() => setActiveTab("clients")}>Clients</button>
<button className={activeTab === "invoices" ? "active" : ""} onClick={() => setActiveTab("invoices")}>Invoices</button>
</div>

<div className="content">
{activeTab === "dashboard" && (
<div>
<h2>📊 Dashboard Overview</h2>
<div className="stats">
<div className="card"><p>Total Clients</p><h3>{clients.length}</h3></div>
<div className="card"><p>Total Invoices</p><h3>{invoices.length}</h3></div>
<div className="card"><p>Revenue</p><h3>₦225,000</h3></div>
<div className="card"><p>Pending</p><h3>{invoices.filter(i => i.status === "Unpaid").length}</h3></div>
</div>
</div>
)}

{activeTab === "clients" && (
<div>
<h2>👥 Manage Clients</h2>
<div className="form">
<input placeholder="Client Name" value={newClient.name} onChange={(e) => setNewClient({...newClient, name: e.target.value})}/>
<input placeholder="Client Email" value={newClient.email} onChange={(e) => setNewClient({...newClient, email: e.target.value})}/>
<button onClick={addClient}>Add Client</button>
</div>
<table>
<thead><tr><th>Name</th><th>Email</th><th>Status</th></tr></thead>
<tbody>
{clients.map(c => <tr key={c.id}><td>{c.name}</td><td>{c.email}</td><td>{c.status}</td></tr>)}
</tbody>
</table>
</div>
)}

{activeTab === "invoices" && (
<div>
<h2>🧾 Invoices</h2>
<table>
<thead><tr><th>Client</th><th>Amount</th><th>Status</th></tr></thead>
<tbody>
{invoices.map(i => <tr key={i.id}><td>{i.client}</td><td>{i.amount}</td><td>{i.status}</td></tr>)}
</tbody>
</table>
</div>
)}
</div>
</div>
);
}

export default App;
