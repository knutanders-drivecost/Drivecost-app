export default function LoginPage() {
  return (
    <main className="authPage">
      <a className="brand" href="/">DRIVE<span>COST</span></a>
      <section className="authBox">
        <div>
          <div className="pill">Sign in</div>
          <h1>Welcome to DriveCost.</h1>
          <p>Create an account to save vehicles, track costs and access your dashboard.</p>
        </div>
        <div className="authCard">
          <h2>Create account</h2>
          <button>Continue with Google</button>
          <button>Continue with Apple</button>
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <a className="primary full" href="/app">Create account</a>
        </div>
      </section>
    </main>
  );
}
