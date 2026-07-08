const costItems = [
  ["Fuel / Energy", "$132", "17%"],
  ["Insurance", "$125", "16%"],
  ["Service & Maintenance", "$95", "12%"],
  ["Depreciation", "$241", "31%"],
  ["Loan / Finance", "$165", "21%"],
  ["Other Costs", "$26", "3%"]
];

const features = [
  ["Track every cost", "Fuel, insurance, service, tires, depreciation and financing in one dashboard."],
  ["Compare before you buy", "Understand which vehicle is smarter before you sign the deal."],
  ["Global from day one", "USD, EUR, GBP, NOK, SEK and DKK support with miles or kilometers."],
  ["DriveCost Score", "A simple ownership score that turns complex car costs into clear decisions."]
];

const compareRows = [
  ["Monthly cost", "$784", "$921", "Model Y"],
  ["Annual cost", "$9,408", "$11,052", "Model Y"],
  ["Cost per mile", "$0.48", "$0.59", "Model Y"],
  ["5-year cost", "$47,040", "$55,260", "Model Y"]
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">DRIVE<span>COST</span></div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#compare">Compare</a>
          <a href="#start">Start</a>
        </div>
        <a className="navButton" href="#start">Get Started</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">Premium vehicle ownership cost platform</div>
          <h1>Know the true cost of owning your car.</h1>
          <p>
            Track every expense, compare vehicles, and understand the true cost of ownership — before and after you buy.
          </p>
          <div className="buttons">
            <a className="primary" href="#start">Start Free</a>
            <a className="secondary" href="#dashboard">View Dashboard</a>
          </div>
          <div className="trust">
            <span>Built for private owners</span>
            <span>Car buyers</span>
            <span>Families</span>
          </div>
        </div>

        <section className="productShell" id="dashboard">
          <div className="dashboardTop">
            <div>
              <p>Monthly Ownership Cost</p>
              <h2>$784</h2>
              <span>Estimated total ownership cost</span>
            </div>
            <button>USD ▾</button>
          </div>

          <div className="chartCard">
            <div className="chartLine"></div>
            <div className="dot"></div>
          </div>

          <div className="metricGrid">
            <div><p>Annual Cost</p><strong>$9,408</strong></div>
            <div><p>Cost per mile</p><strong>$0.48</strong></div>
            <div><p>5-Year Cost</p><strong>$47,040</strong></div>
          </div>

          <div className="split">
            <div className="breakdown">
              <h3>Cost Breakdown</h3>
              {costItems.map(([name, amount, percent]) => (
                <div className="costRow" key={name}>
                  <span>{name}</span>
                  <strong>{amount}</strong>
                  <em>{percent}</em>
                </div>
              ))}
            </div>
            <div className="scoreCard">
              <p>DriveCost Score</p>
              <strong>82</strong>
              <span>Smart ownership profile</span>
            </div>
          </div>
        </section>
      </section>

      <section className="featureGrid" id="features">
        {features.map(([title, text]) => (
          <div className="feature" key={title}>
            <div className="icon">✦</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="startSection" id="start">
        <div className="startCopy">
          <div className="eyebrow">Add your first vehicle</div>
          <h2>Start with country, currency and vehicle details.</h2>
          <p>
            DriveCost is designed for global use. Choose your market, set your currency and add your vehicle by registration number, VIN or manually.
          </p>
        </div>

        <div className="vehicleCard">
          <label>Country & currency</label>
          <select>
            <option>United States · USD · miles</option>
            <option>Norway · NOK · km</option>
            <option>United Kingdom · GBP · miles</option>
            <option>European Union · EUR · km</option>
            <option>Sweden · SEK · km</option>
            <option>Denmark · DKK · km</option>
          </select>

          <label>Vehicle</label>
          <input placeholder="Registration number or VIN" />

          <label>Annual distance</label>
          <input placeholder="12,000 miles / 20,000 km" />

          <button>Add Vehicle</button>
        </div>
      </section>

      <section className="compare" id="compare">
        <div className="compareHead">
          <div>
            <div className="eyebrow">Compare cars</div>
            <h2>Find the smarter ownership decision.</h2>
          </div>
          <a href="#start">Start comparison →</a>
        </div>

        <div className="compareTable">
          <div className="tableHead">
            <span>Metric</span><span>Tesla Model Y</span><span>Volvo XC60</span><span>Winner</span>
          </div>
          {compareRows.map(row => (
            <div className="tableRow" key={row[0]}>
              {row.map((cell, index) => <span className={index === 3 ? "winner" : ""} key={cell}>{cell}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="authPreview">
        <div className="authCopy">
          <h2>Account system preview</h2>
          <p>Next sprint: email login, Google login, Apple login and saved vehicles.</p>
        </div>
        <div className="authCard">
          <h3>Welcome to DriveCost</h3>
          <button>Continue with Google</button>
          <button>Continue with Apple</button>
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <button className="mainButton">Create account</button>
        </div>
      </section>

      <footer>
        <div>
          <div className="brand">DRIVE<span>COST</span></div>
          <p>Know the true cost of owning your car.</p>
        </div>
        <div className="footerLinks">
          <a>About</a>
          <a>Pricing</a>
          <a>Privacy</a>
          <a>Contact</a>
        </div>
      </footer>
    </main>
  );
}
