export default function NotFound() {
  return (
    <main className="not-found-page">
      <a className="nav-logo" href="/">
        Clear<span>Desk</span>
      </a>
      <div className="big-num" aria-hidden="true">404</div>
      <h1>This page got distracted and wandered off</h1>
      <p>
        It happens. The page you're looking for doesn't exist here anymore, or maybe it never did.
        Either way, here's where you can go instead.
      </p>
      <nav className="not-found-links" aria-label="Helpful links">
        <a className="link-btn primary" href="/">Back to home</a>
        <a className="link-btn ghost" href="/body-double-timer">Body double timer</a>
        <a className="link-btn ghost" href="/meds-tracker">Meds tracker</a>
        <a className="link-btn ghost" href="/task-unkicker">Task unkicker</a>
      </nav>
    </main>
  );
}
