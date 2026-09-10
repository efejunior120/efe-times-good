import React, { useState } from "react";

export default function App() {
const [tab, setTab] = useState("dashboard");
const [clients, setClients] = useState([
{id:1, name:"ABC Company", email:"abc@mail.com", status:"Active"},
{id:2, name:"XYZ Ltd", email:"xyz@mail.com", status:"Pending"}
]);
const [invoices] = useState([
{id:1, client:"ABC Company", amount:"₦150,000", status:"Paid"},
{id:2, client:"XYZ Ltd", amount:"₦75,000", status:"Unpaid"}
]);
const [name, setName] = useState("");
const [email, setEmail] = useState("");

return (
<div style={{background:"linear-gradient(135deg,#6B46C1,#9333EA)",minHeight:"100vh",padding:20,color:"white",fontFamily:"Arial"}}>
<h1>Good morning, EFE 👋</h1>
<p>Welcome to EFE TIMES Work Suite</p>

<div style={{display:"flex",gap:10,margin:"20px 0"}}>
<button onClick={()=>setTab("dashboard")} style={{padding:"12px 24px",borderRadius:10,border:"none",background:tab==="dashboard"?"white":"rgba(255,255,255,0.2)",color:tab==="dashboard"?"#6B46C1":"white",fontWeight:"bold"}}>Dashboard</button>
<button onClick={()=>setTab("clients")} style={{padding:"12px 24px",borderRadius:10,border:"none",background:tab==="clients"?"white":"rgba(255,255,255,0.2)",color:tab==="clients"?"#6B46C1":"white",fontWeight:"bold"}}>Clients</button>
<button onClick={()=>setTab("invoices")} style={{padding:"12px 24px",borderRadius:10,border:"none",background:tab==="invoices"?"white":"rgba(255,255,255,0.2)",color:tab==="invoices"?"#6B46C1":"white",fontWeight:"bold"}}>Invoices</button>
</div>

<div style={{background:"white",color:"#333",borderRadius:16,padding:24}}>
{tab==="dashboard" && <div>
<h2>📊 Dashboard Overview</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
<div style={{background:"#F3E8FF",padding:20,borderRadius:12}}><p>Total Clients</p><h3>{clients.length}</h3></div>
<div style={{background:"#F3E8FF",padding:20,borderRadius:12}}><p>Total Invoices</p><h3>{invoices.length}</h3></div>
<div style={{background:"#F3E8FF",padding:20,borderRadius:12}}><p>Revenue</p><h3>₦225,000</h3></div>
<div style={{background:"#F3E8FF",padding:20,borderRadius:12}}><p>Pending</p><h3>1</h3></div>
</div>
</div>}

{tab==="clients" && <div>
<h2>👥 Manage Clients</h2>
<div style={{display:"flex",gap:10,marginBottom:20}}>
<input placeholder="Client Name" value={name} onChange={e=>setName(e.target.value)} style={{padding:10,borderRadius:8,border:"1px solid #ddd"}}/>
<input placeholder="Client Email" value={email} onChange={e=>setEmail(e.target.value)} style={{padding:10,borderRadius:8,border:"1px solid #ddd"}}/>
<button onClick={()=>{if(name&&email){setClients([...clients,{id:clients.length+1,name,email,status:"Active"}]);setName("");setEmail("")}}} style={{padding:"10px 20px",background:"#6B46C1",color:"white",border:"none",borderRadius:8}}>Add</button>
</div>
<table style={{width:"100%"}}><thead><tr><th>Name</th><th>Email</th><th>Status</th></tr></thead><tbody>{clients.map(c=><tr key={c.id}><td>{c.name}</td><td>{c.email}</td><td>{c.status}</td></tr>)}</tbody></table>
</div>}

{tab==="invoices" && <div>
<h2>🧾 Invoices</h2>
<table style={{width:"100%"}}><thead><tr><th>Client</th><th>Amount</th><th>Status</th></tr></thead><tbody>{invoices.map(i=><tr key={i.id}><td>{i.client}</td><td>{i.amount}</td><td>{i.status}</td></tr>)}</tbody></table>
</div>}
</div>
</div>
)
}

