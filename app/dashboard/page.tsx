const costs = [
  ["Fuel / Energy", "$132", "17%"],
  ["Insurance", "$125", "16%"],
  ["Service", "$95", "12%"],
  ["Depreciation", "$241", "31%"],
  ["Loan / Finance", "$165", "21%"],
  ["Other", "$26", "3%"]
];

export default function DashboardPage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brand">DRIVE<span>COST</span></div>
        <nav>
          <a className="active" href="/dashboard">Dashboard</a>
          <a href="/garage">My Garage</a>
          <a href="/add-vehicle">Add Vehicle</a>
          <a href="/settings">Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">Welcome back</div>
            <h1>Ownership Dashboard</h1>
          </div>
          <a className="primarySmall" href="/add-vehicle">+ Add Vehicle</a>
        </header>

        <section className="dashboardGrid">
          <div className="panel large">
            <p>Monthly Ownership Cost</p>
            <h2>$784</h2>
            <div className="wideChart"><div></div></div>
          </div>
          <div className="panel metric"><p>Annual Cost</p><strong>$9,408</strong></div>
          <div className="panel metric"><p>Cost per mile</p><strong>$0.48</strong></div>
          <div className="panel metric"><p>DriveCost Score</p><strong>82</strong></div>
        </section>

        <section className="panel">
          <div className="sectionHead">
            <h2>Cost Breakdown</h2>
            <span>USD · miles</span>
          </div>
          <div className="breakdownGrid">
            {costs.map(([name, amount, percent]) => (
              <div className="breakdownCard" key={name}>
                <p>{name}</p>
                <strong>{amount}</strong>
                <span>{percent}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
