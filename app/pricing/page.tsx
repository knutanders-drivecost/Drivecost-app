export default function PricingPage() {
  return (
    <main className="site">
      <nav className="siteNav">
        <a className="brand" href="/">DRIVE<span>COST</span></a>
        <a className="primarySmall" href="/login">Get Started</a>
      </nav>
      <section className="pricingHero">
        <div className="pill">Pricing</div>
        <h1>Simple pricing for smarter ownership.</h1>
        <p>Start free. Upgrade when you want more vehicles, reports and insights.</p>
      </section>
      <section className="pricingGrid">
        <article className="priceCard"><h3>Free</h3><strong>$0</strong><p>1 vehicle and basic dashboard.</p><a href="/login">Start Free</a></article>
        <article className="priceCard featured"><h3>Pro</h3><strong>$5/mo</strong><p>Unlimited vehicles, reports and comparison.</p><a href="/login">Start Pro</a></article>
        <article className="priceCard"><h3>Fleet</h3><strong>Custom</strong><p>For families, companies and multi-car users.</p><a href="/login">Contact</a></article>
      </section>
    </main>
  );
}
