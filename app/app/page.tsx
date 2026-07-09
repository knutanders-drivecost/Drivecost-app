const costs = [
  ["Fuel / Energy", "$132", "17%"],
  ["Insurance", "$125", "16%"],
  ["Service", "$95", "12%"],
  ["Depreciation", "$241", "31%"],
  ["Loan / Finance", "$165", "21%"],
  ["Other", "$26", "3%"]
];

export default function AppPage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <p>App workspace</p>
        <nav>
          <a className="active">Dashboard</a>
          <a>My Vehicles</a>
          <a>Compare Cars</a>
          <a>Calculator</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>
      <section className="mainContent">
        <header className="appHeader">
          <div><div className="pill">Dashboard</div><h1>Ownership Overview</h1></div>
          <a className="primarySmall" href="/login">+ Add Vehicle</a>
        </header>
        <section className="dashboardGrid">
          <div className="panel large">
            <p>Monthly Ownership Cost</p><h2>$784</h2><span>vs. last month $803</span>
            <div className="wideChart"><div></div></div>
          </div>
          <div className="panel metric"><p>Annual Cost</p><strong>$9,408</strong></div>
          <div className="panel metric"><p>Cost per mile</p><strong>$0.48</strong></div>
          <div className="panel metric"><p>DriveCost Score</p><strong>82</strong></div>
        </section>
        <section className="panel sectionPanel">
          <div className="sectionHead"><h2>Cost Breakdown</h2><span>USD · miles</span></div>
          <div className="breakdownGrid">
            {costs.map(([name, amount, percent]) => (
              <div className="breakdownCard" key={name}><p>{name}</p><strong>{amount}</strong><span>{percent}</span></div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
