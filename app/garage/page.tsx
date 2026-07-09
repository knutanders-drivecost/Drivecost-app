const vehicles = [
  ["Tesla Model Y", "2023 · Electric · AWD", "$784", "82"],
  ["Volvo XC60", "2021 · Hybrid", "$921", "71"],
  ["BMW i4", "2024 · Electric", "$812", "79"]
];

export default function GaragePage() {
  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brand">DRIVE<span>COST</span></div>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a className="active" href="/garage">My Garage</a>
          <a href="/add-vehicle">Add Vehicle</a>
          <a href="/settings">Settings</a>
        </nav>
      </aside>

      <section className="mainContent">
        <header className="appHeader">
          <div>
            <div className="pill">My Garage</div>
            <h1>Your Vehicles</h1>
          </div>
          <a className="primarySmall" href="/add-vehicle">+ Add Vehicle</a>
        </header>

        <div className="vehicleList">
          {vehicles.map(([name, meta, cost, score]) => (
            <div className="vehicleCard" key={name}>
              <div>
                <h2>{name}</h2>
                <p>{meta}</p>
              </div>
              <div>
                <span>Monthly</span>
                <strong>{cost}</strong>
              </div>
              <div>
                <span>Score</span>
                <strong>{score}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
