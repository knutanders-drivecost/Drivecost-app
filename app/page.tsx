const costs = [
  ["Fuel / Energy", "$132", "17%"],
  ["Insurance", "$125", "16%"],
  ["Service", "$95", "12%"],
  ["Depreciation", "$241", "31%"],
  ["Loan / Finance", "$165", "21%"],
  ["Other Costs", "$26", "3%"]
];

const features = [
  ["Make smarter decisions", "Compare cars and ownership options before you buy."],
  ["Track every cost", "Fuel, insurance, service, depreciation and financing in one place."],
  ["Choose your currency", "Use USD, EUR, GBP, NOK, SEK, DKK and more."],
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
          <a href="#auth">Sign in</a>
        </div>
        <a className="navButton" href="#auth">Get Started</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">Global vehicle ownership cost platform</div>
          <h1>Know the true cost of owning your car.</h1>
          <p>Track every expense, compare vehicles, and understand the true cost of ownership — all in one place.</p>
          <div className="buttons">
            <a className="primary" href="#auth">Start Free</a>
            <a className="secondary" href="#preview">See Demo</a>
          </div>
        </div>

        <div className="dashboard" id="preview">
          <div className="dashHeader">
            <div>
              <p>Monthly Ownership Cost</p>
              <h2>$784</h2>
            </div>
            <button>USD ▾</button>
          </div>

          <div className="chart"><div className="line"></div></div>

          <div className="metrics">
            <div><p>Annual Cost</p><strong>$9,408</strong></div>
            <div><p>Cost per mile</p><strong>$0.48</strong></div>
            <div><p>5-Year Cost</p><strong>$47,040</strong></div>
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

      <section className="authSection" id="auth">
        <div className="authCopy">
          <div className="eyebrow">Account preview</div>
          <h2>Start with your first vehicle.</h2>
          <p>Create a free DriveCost account and add your first car to calculate ownership cost, financing, fuel, insurance and depreciation.</p>
          <div className="miniFlow">
            <div><strong>1</strong><span>Create account</span></div>
            <div><strong>2</strong><span>Add vehicle</span></div>
            <div><strong>3</strong><span>See dashboard</span></div>
          </div>
        </div>

        <div className="authCard">
          <h3>Welcome to DriveCost</h3>
          <p>The smartest way to understand the true cost of owning a vehicle.</p>

          <button className="oauth">Continue with Google</button>
          <button className="oauth">Continue with Apple</button>

          <div className="divider"><span></span><em>or</em><span></span></div>

          <label>Email</label>
          <input placeholder="you@example.com" />
          <label>Password</label>
          <input placeholder="••••••••" type="password" />

          <button className="create">Create account</button>
          <small>Already have an account? <a href="#">Sign in</a></small>
        </div>
      </section>

      <section className="vehicleOnboarding">
        <div className="vehicleCard">
          <div>
            <h2>Let's add your first vehicle.</h2>
            <p>Choose country and currency, then add a registration number or enter vehicle details manually.</p>
          </div>
          <div className="vehicleForm">
            <select>
              <option>United States · USD</option>
              <option>Norway · NOK</option>
              <option>United Kingdom · GBP</option>
              <option>European Union · EUR</option>
              <option>Sweden · SEK</option>
              <option>Denmark · DKK</option>
            </select>
            <input placeholder="Registration number or VIN" />
            <button>Add Vehicle</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="brand">DRIVE<span>COST</span></div>
        <p>© 2026 DriveCost. Know the true cost of owning your car.</p>
      </footer>
    </main>
  );
}
