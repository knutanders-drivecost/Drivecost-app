const features = [
  ["True ownership cost", "Fuel, insurance, service, financing, depreciation and other costs in one place."],
  ["Compare before you buy", "Compare vehicles side by side before making a financial decision."],
  ["Global by default", "USD, EUR, GBP, NOK, SEK and DKK — with miles or kilometers."],
  ["AI Cost Advisor", "Future AI insights to help reduce costs and improve ownership decisions."]
];

export default function Home() {
  return (
    <main className="site">
      <nav className="siteNav">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="/login">Sign In</a>
        </div>
        <a className="primarySmall" href="/login">Get Started</a>
      </nav>

      <section className="heroLanding">
        <div>
          <div className="pill">Vehicle ownership intelligence</div>
          <h1>Know the true cost of owning your car.</h1>
          <p>DriveCost helps drivers track expenses, compare vehicles and understand total cost of ownership before and after they buy.</p>
          <div className="buttonRow">
            <a className="primary" href="/login">Start Free</a>
            <a className="secondary" href="/app">View App Demo</a>
          </div>
          <div className="currencyStrip">USD · EUR · GBP · NOK · SEK · DKK</div>
        </div>

        <div className="preview">
          <div className="previewHeader">
            <div><span>Monthly Ownership Cost</span><strong>$784</strong></div>
            <em>USD ▾</em>
          </div>
          <div className="previewChart"><div></div></div>
          <div className="previewMetrics">
            <div><span>Annual</span><strong>$9,408</strong></div>
            <div><span>Per mile</span><strong>$0.48</strong></div>
            <div><span>Score</span><strong>82</strong></div>
          </div>
        </div>
      </section>

      <section className="featureGrid" id="features">
        {features.map(([title, text]) => (
          <article className="feature" key={title}>
            <div className="icon">✦</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="compareBlock">
        <div>
          <div className="pill">Buy smarter</div>
          <h2>Compare cars before you commit.</h2>
          <p>DriveCost turns car ownership into a clear financial decision — not a guess.</p>
        </div>
        <div className="miniTable">
          <div><span>Metric</span><span>Model Y</span><span>XC60</span></div>
          <div><span>Monthly</span><strong>$784</strong><strong>$921</strong></div>
          <div><span>5-Year</span><strong>$47,040</strong><strong>$55,260</strong></div>
          <div><span>Winner</span><strong className="blue">Model Y</strong><strong></strong></div>
        </div>
      </section>

      <section className="pricingGrid" id="pricing">
        <article className="priceCard"><h3>Free</h3><strong>$0</strong><p>1 vehicle and basic dashboard.</p><a href="/login">Start Free</a></article>
        <article className="priceCard featured"><h3>Pro</h3><strong>$5/mo</strong><p>Unlimited vehicles, reports and comparison.</p><a href="/login">Start Pro</a></article>
        <article className="priceCard"><h3>Fleet</h3><strong>Custom</strong><p>For families, companies and multi-car users.</p><a href="/login">Contact</a></article>
      </section>

      <section className="finalCta">
        <h2>Ready to understand your car costs?</h2>
        <p>Start with one vehicle. Upgrade when you need deeper insight.</p>
        <a className="primary" href="/login">Get Started</a>
      </section>

      <footer className="footer">
        <div className="brand">DRIVE<span>COST</span></div>
        <div><a href="/app">App demo</a><a href="/pricing">Pricing</a><a href="/login">Sign In</a></div>
      </footer>
    </main>
  );
}
