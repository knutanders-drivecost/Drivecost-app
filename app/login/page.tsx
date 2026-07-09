export default function LoginPage() {
  return (
    <main className="authPage">
      <a className="brand backBrand" href="/">DRIVE<span>COST</span></a>
      <section className="authLayout">
        <div className="authCopy">
          <div className="pill">Account system</div>
          <h1>Welcome to DriveCost.</h1>
          <p>Create an account to save vehicles, track costs and build your ownership dashboard.</p>
          <div className="steps">
            <div><strong>1</strong><span>Create account</span></div>
            <div><strong>2</strong><span>Add your first vehicle</span></div>
            <div><strong>3</strong><span>Track true ownership cost</span></div>
          </div>
        </div>

        <div className="authCard">
          <h2>Create account</h2>
          <p>Supabase authentication ready. Connect keys in the next setup step.</p>
          <button className="oauth">Continue with Google</button>
          <button className="oauth">Continue with Apple</button>
          <div className="divider"><span></span><em>or</em><span></span></div>
          <label>Email</label>
          <input placeholder="you@example.com" />
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <a className="primary full" href="/add-vehicle">Create account</a>
          <small>Already have an account? <a href="/dashboard">Sign in</a></small>
        </div>
      </section>
    </main>
  );
}
