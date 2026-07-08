const costs = [
  ["Fuel / Energy", "kr 1 320", "17%"],
  ["Insurance", "kr 1 250", "16%"],
  ["Service", "kr 950", "12%"],
  ["Depreciation", "kr 2 410", "31%"],
  ["Loan / Finance", "kr 1 650", "21%"],
  ["Other Costs", "kr 262", "3%"]
];

const features = [
  ["Make smarter decisions", "Compare cars and ownership options before you buy."],
  ["Track every cost", "Fuel, insurance, service, depreciation and financing in one place."],
  ["Save money", "Understand where your money goes and where you can reduce costs."],
  ["Plan ahead", "See the full picture of ownership costs over time."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">DRIVE<span>COST</span></div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#preview">Dashboard</a>
          <a href="#beta">Beta</a>
        </div>
        <a className="navButton" href="#beta">Get Started</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">Vehicle ownership cost platform</div>
          <h1>Know what your car really costs.</h1>
          <p>
            DriveCost helps you track every vehicle expense, understand your true monthly cost,
            and make smarter decisions before you buy your next car.
          </p>
          <div className="buttons">
            <a className="primary" href="#beta">Start Free</a>
            <a className="secondary" href="#preview">See Demo</a>
          </div>
        </div>

        <div className="dashboard" id="preview">
          <div className="dashHeader">
            <div>
              <p>Total Monthly Cost</p>
              <h2>kr 7 842</h2>
            </div>
            <button>+ Add Car</button>
          </div>

          <div className="chart">
            <div className="line"></div>
          </div>

          <div className="metrics">
            <div><p>Total Annual Cost</p><strong>kr 94 104</strong></div>
            <div><p>Cost per km</p><strong>kr 4,18</strong></div>
            <div><p>5-Year Cost</p><strong>kr 470 520</strong></div>
          </div>

          <div className="breakdown">
            <h3>Cost Breakdown</h3>
            {costs.map(([name, amount, percent]) => (
              <div className="row" key={name}>
                <span>{name}</span>
                <strong>{amount}</strong>
                <em>{percent}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featureGrid" id="features">
        {features.map(([title, text]) => (
          <div className="feature" key={title}>
            <div className="icon">▣</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="beta" id="beta">
        <div>
          <h2>Join the DriveCost beta.</h2>
          <p>Be among the first to test the car finance dashboard built for real ownership decisions.</p>
        </div>
        <form>
          <input placeholder="Email address" />
          <button type="button">Join Beta</button>
        </form>
      </section>

      <footer>
        <div className="brand">DRIVE<span>COST</span></div>
        <p>© 2026 DriveCost. Know what your car really costs.</p>
      </footer>
    </main>
  );
}
