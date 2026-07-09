export default function AddVehiclePage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <p>App workspace</p>
        <nav>
          <a href="/app">Dashboard</a>
          <a className="active" href="/add-vehicle">Add Vehicle</a>
          <a href="/calculator">Calculator</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">Step 1</div>
            <h1>Add your first vehicle.</h1>
          </div>
          <a className="secondarySmall" href="/calculator">Skip to calculator</a>
        </header>

        <section className="wizardGrid">
          <div className="formPanel">
            <h2>Vehicle details</h2>
            <label>Country & currency</label>
            <select>
              <option>United States · USD · miles</option>
              <option>Norway · NOK · km</option>
              <option>European Union · EUR · km</option>
              <option>United Kingdom · GBP · miles</option>
              <option>Sweden · SEK · km</option>
              <option>Denmark · DKK · km</option>
            </select>

            <label>Registration number or VIN</label>
            <input placeholder="ABC123 / VIN" />

            <label>Vehicle name</label>
            <input placeholder="Tesla Model Y Long Range" />

            <label>Purchase price</label>
            <input placeholder="$42,000" />

            <label>Annual distance</label>
            <input placeholder="12,000 miles" />

            <a className="primary full" href="/calculator">Continue to costs</a>
          </div>

          <div className="panel advisorPanel">
            <div className="pill">DriveCost Advisor</div>
            <h2>Better input gives better insight.</h2>
            <p>Start with purchase price and annual distance. Later we connect registration/VIN lookup and automatic market data.</p>
            <div className="advisorList">
              <span>Vehicle identity</span>
              <span>Ownership settings</span>
              <span>Cost calculation</span>
              <span>Dashboard report</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
