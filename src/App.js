import React, { useState, useEffect } from "react";

export default function App() {
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

const stats = {
totalClients: clients.length,
totalInvoices: invoices.length,
revenue: "₦225,000",
pending: invoices.filter(i => i.status === "Unpaid").length
};

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
<div style={{
minHeight: "100vh",
background: "linear-gradient(135deg, #6B46C1 0%, #9333EA 100%)",
color: "white",
fontFamily: "Arial, sans-serif",
padding: "20px"
}}>
<h1 style={{fontSize: "32px", fontWeight: "bold", marginBottom: "5px"}}>
Good morning, EFE 👋
</h1>
<p style={{opacity: 0.8, marginBottom: "20px"}}>
Welcome to your EFE TIMES Work Suite
</p>

{/* NAV BUTTONS */}
<div style={{display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap"}}>
{["dashboard", "clients", "invoices"].map(tab => (
<button
key={tab}
onClick={() => setActiveTab(tab)}
style={{
padding: "12px 24px",
borderRadius: "10px",
border: "none",
background: activeTab === tab ? "white" : "rgba(255,255,255,0.2)",
color: activeTab === tab ? "#6B46C1" : "white",
fontWeight: "bold",
cursor: "


