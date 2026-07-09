export default function AddVehiclePage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brand">DRIVE<span>COST</span></div>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/garage">My Garage</a>
          <a className="active" href="/add-vehicle">Add Vehicle</a>
          <a href="/settings">Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">Add Vehicle</div>
            <h1>Add your first vehicle.</h1>
          </div>
        </header>

        <section className="formPanel">
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

          <a className="primary full" href="/dashboard">Save vehicle</a>
        </section>
      </section>
    </main>
  );
}
