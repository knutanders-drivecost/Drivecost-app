const inputs = [
  ["Financing / loan", "$165"],
  ["Insurance", "$125"],
  ["Fuel / Energy", "$132"],
  ["Service", "$95"],
  ["Tires", "$28"],
  ["Parking", "$30"],
  ["Road tolls / taxes", "$42"],
  ["Depreciation", "$241"]
];

export default function CalculatorPage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <p>App workspace</p>
        <nav>
          <a href="/app">Dashboard</a>
          <a href="/add-vehicle">Add Vehicle</a>
          <a className="active" href="/calculator">Calculator</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">Step 2</div>
            <h1>Ownership Calculator</h1>
          </div>
          <a className="primarySmall" href="/app">View Dashboard</a>
        </header>

        <section className="calculatorGrid">
          <div className="formPanel">
            <h2>Monthly costs</h2>
            {inputs.map(([label, value]) => (
              <div className="inputRow" key={label}>
                <label>{label}</label>
                <input defaultValue={value} />
              </div>
            ))}
            <a className="primary full" href="/app">Calculate ownership cost</a>
          </div>

          <div className="resultPanel">
            <div className="pill">Live result preview</div>
            <h2>$858</h2>
            <p>Estimated monthly ownership cost</p>
            <div className="resultStats">
              <div><span>Annual</span><strong>$10,296</strong></div>
              <div><span>Cost per mile</span><strong>$0.52</strong></div>
              <div><span>5-Year</span><strong>$51,480</strong></div>
            </div>
            <div className="insight">
              <strong>Advisor insight</strong>
              <p>Depreciation is currently the largest cost driver. In the next version, DriveCost will compare this against similar vehicles.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
