export default function Home() {
  return (
    <main className="page-shell">
      <div className="starter-card">
        <p className="eyebrow">Standalone starter</p>
        <h1>Next.js, ready to build.</h1>
        <p className="description">
          A minimal App Router setup with TypeScript. Start shaping it into your
          next project.
        </p>
        <div className="actions">
          <a className="primary-action" href="https://nextjs.org/docs">
            Next.js docs <span aria-hidden="true">↗</span>
          </a>
          <code>src/app/page.tsx</code>
        </div>
      </div>
      <span className="version-label">App Router · TypeScript</span>
    </main>
  );
}
