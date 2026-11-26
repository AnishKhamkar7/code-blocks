import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="panel hero-panel">
        <p className="eyebrow">Express · Next.js · Better Auth</p>
        <h1>A full stack starter, ready for your next idea.</h1>
        <p className="description">
          Next.js App Router on the frontend, an Express API behind it, and Google sign-in powered by Better Auth.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/login">Continue with Google</Link>
          <Link className="button button-secondary" href="/signup">Create an account</Link>
        </div>
      </section>
      <p className="stack-note">Turborepo workspace · Prisma + PostgreSQL</p>
    </main>
  );
}
