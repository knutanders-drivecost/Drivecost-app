const features = [
  ["True ownership cost", "Fuel, insurance, service, financing, depreciation and other costs in one place."],
  ["Ownership calculator", "Calculate monthly cost, annual cost and cost per mile before you buy."],
  ["Compare vehicles", "See which car is financially smarter before making a decision."],
  ["Global by default", "USD, EUR, GBP, NOK, SEK and DKK — with miles or kilometers."]
];

export default function Home() {
  return (
    <main className="site">
      <nav className="siteNav">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="/pricing">Pricing</a>
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
