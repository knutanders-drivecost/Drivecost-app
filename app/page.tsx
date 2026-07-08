const costCards = [
  ["Fuel / Energy", "$132", "17%", "⛽"],
  ["Insurance", "$125", "16%", "🛡"],
  ["Service", "$95", "12%", "🔧"],
  ["Depreciation", "$241", "31%", "📉"],
  ["Loan / Finance", "$165", "21%", "💳"],
  ["Other Costs", "$26", "3%", "•••"]
];

const vehicles = [
  ["Tesla Model Y", "2023 · Electric", "$784", "82"],
  ["Volvo XC60", "2021 · Hybrid", "$921", "71"],
  ["BMW i4", "2024 · Electric", "$812", "79"]
];

const upcoming = [
  ["Service estimate", "In 42 days", "$310"],
  ["Insurance renewal", "Next month", "$125"],
  ["Tires forecast", "This winter", "$680"]
];

export default function Home() {
  return (
    <main className="app">
      <aside className="sidebar">
        <div className="brand">DRIVE<span>COST</span></div>
        <p>Know the true cost of owning your car.</p>

        <nav>
          <a className="active">Dashboard</a>
          <a>My Vehicles</a>
          <a>Compare Cars</a>
          <a>Calculator</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>

        <div className="premium">
          <strong>Go Premium</strong>
          <p>Unlock reports, unlimited cars and AI cost advisor.</p>
          <button>Upgrade</button>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Dashboard</span>
            <h1>Ownership Overview</h1>
          </div>
          <div className="actions">
            <button className="ghost">USD ▾</button>
            <button className="primary">+ Add Vehicle</button>
          </div>
        </header>

        <section className="heroGrid">
          <div className="mainPanel">
            <div className="panelHead">
              <div>
                <p>Monthly Ownership Cost</p>
                <h2>$784</h2>
                <span>vs. last month $803</span>
              </div>
              <div className="badge">↓ 8%</div>
            </div>
            <div className="chart">
              <div className="chartLine"></div>
              <div className="chartDot"></div>
            </div>
          </div>

          <div className="summaryPanel">
            <div><p>Annual Cost</p><strong>$9,408</strong></div>
            <div><p>Cost per mile</p><strong>$0.48</strong></div>
            <div><p>5-Year Cost</p><strong>$47,040</strong></div>
          </div>

          <div className="scorePanel">
            <p>DriveCost Score</p>
            <strong>82</strong>
            <span>Smart ownership profile</span>
            <div className="scoreRing"></div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <h2>Cost Breakdown</h2>
            <a>View full report →</a>
          </div>
          <div className="costGrid">
            {costCards.map(([title, value, percent, icon]) => (
              <div className="costCard" key={title}>
                <div className="costIcon">{icon}</div>
                <p>{title}</p>
                <strong>{value}</strong>
                <span>{percent}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="twoCol">
          <div className="panel">
            <div className="sectionHead">
              <h2>My Vehicles</h2>
              <a>Manage →</a>
            </div>
            {vehicles.map(([name, meta, cost, score]) => (
              <div className="vehicleRow" key={name}>
                <div>
                  <strong>{name}</strong>
                  <p>{meta}</p>
                </div>
                <div>
                  <strong>{cost}</strong>
                  <span>Score {score}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="panel">
            <div className="sectionHead">
              <h2>Upcoming Costs</h2>
              <a>Calendar →</a>
            </div>
            {upcoming.map(([title, date, amount]) => (
              <div className="vehicleRow" key={title}>
                <div>
                  <strong>{title}</strong>
                  <p>{date}</p>
                </div>
                <div><strong>{amount}</strong></div>
              </div>
            ))}
          </div>
        </section>

        <section className="addVehicle">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Add your first real vehicle</h2>
            <p>Choose country, currency and distance unit. Then add a registration number, VIN or enter vehicle details manually.</p>
          </div>
          <div className="formCard">
            <select>
              <option>United States · USD · miles</option>
              <option>Norway · NOK · km</option>
              <option>European Union · EUR · km</option>
              <option>United Kingdom · GBP · miles</option>
            </select>
            <input placeholder="Registration number or VIN" />
            <input placeholder="Annual distance" />
            <button>Add Vehicle</button>
          </div>
        </section>
      </section>
    </main>
  );
}
