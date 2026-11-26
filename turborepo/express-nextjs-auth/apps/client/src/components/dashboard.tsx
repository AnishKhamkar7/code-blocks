'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { authClient } from '@/lib/auth-client';

export function Dashboard() {
  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !data?.session) window.location.replace('/login');
  }, [data, isPending]);

  if (isPending || !data?.session) {
    return <main className="page-shell"><p className="description">Checking your session…</p></main>;
  }

  return (
    <main className="page-shell">
      <section className="panel auth-panel">
        <p className="eyebrow">Signed in</p>
        <h1>Welcome, {data.user.name}</h1>
        <p className="description">You are signed in with {data.user.email}.</p>
        <div className="button-row">
          <Link className="button button-secondary" href="/">Home</Link>
          <button className="button button-primary" onClick={() => authClient.signOut()}>Sign out</button>
        </div>
      </section>
    </main>
  );
}
