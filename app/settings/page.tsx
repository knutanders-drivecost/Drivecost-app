export default function SettingsPage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brand">DRIVE<span>COST</span></div>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/garage">My Garage</a>
          <a href="/add-vehicle">Add Vehicle</a>
          <a className="active" href="/settings">Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">Settings</div>
            <h1>Profile & Preferences</h1>
          </div>
        </header>

        <section className="formPanel">
          <label>Name</label>
          <input placeholder="Your name" />
          <label>Country</label>
          <select>
            <option>United States</option>
            <option>Norway</option>
            <option>United Kingdom</option>
            <option>European Union</option>
          </select>
          <label>Currency</label>
          <select>
            <option>USD</option>
            <option>NOK</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
          <label>Distance unit</label>
          <select>
            <option>Miles</option>
            <option>Kilometers</option>
          </select>
          <button className="primary full">Save settings</button>
        </section>
      </section>
    </main>
  );
}
