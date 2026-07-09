const highlights = [
  ["Dashboard", "See monthly cost, annual cost, cost per mile and 5-year ownership cost."],
  ["My Garage", "Save all vehicles in one place and compare their true ownership cost."],
  ["Cost Advisor", "Get smart insight into fuel, insurance, depreciation and financing."]
];

export default function Home() {
  return (
    <main className="landing">
      <nav className="topNav">
        <div className="brand">DRIVE<span>COST</span></div>
        <div className="navLinks">
          <a href="/dashboard">Dashboard</a>
          <a href="/garage">Garage</a>
          <a href="/login">Login</a>
        </div>
        <a className="primarySmall" href="/login">Get Started</a>
      </nav>

      <section className="landingHero">
        <div>
          <div className="pill">DriveCost Core v0.3</div>
          <h1>Know the true cost of owning your car.</h1>
          <p>Track expenses, save vehicles, compare ownership cost and build smarter car decisions with one premium dashboard.</p>
          <div className="buttonRow">
            <a className="primary" href="/login">Create account</a>
            <a className="secondary" href="/dashboard">View demo dashboard</a>
          </div>
        </div>

        <div className="heroPreview">
          <div className="previewTop">
            <span>Monthly Ownership Cost</span>
            <strong>$784</strong>
          </div>
          <div className="chartLine"></div>
          <div className="previewGrid">
            <div><span>Annual</span><strong>$9,408</strong></div>
            <div><span>Per mile</span><strong>$0.48</strong></div>
            <div><span>Score</span><strong>82</strong></div>
          </div>
        </div>
      </section>

      <section className="cards">
        {highlights.map(([title, text]) => (
          <div className="card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
