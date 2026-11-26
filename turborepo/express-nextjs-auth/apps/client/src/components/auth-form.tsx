'use client';

import Link from 'next/link';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const isSignup = mode === 'signup';

  async function signInWithGoogle() {
    setError(null);
    setIsPending(true);
    try {
      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: `${window.location.origin}/dashboard`,
      });
      if (result.error) setError(result.error.message ?? 'Google authentication failed.');
    } catch {
      setError('Google authentication failed. Please try again.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="panel auth-panel">
        <Link className="back-link" href="/">← Home</Link>
        <p className="eyebrow">{isSignup ? 'Create account' : 'Welcome back'}</p>
        <h1>{isSignup ? 'Sign up with Google' : 'Login with Google'}</h1>
        <p className="description">Use your Google account to continue. No password setup is needed.</p>
        <button className="button button-primary auth-button" disabled={isPending} onClick={signInWithGoogle}>
          {isPending ? 'Redirecting…' : 'Continue with Google'}
        </button>
        {error && <p className="error-message" role="alert">{error}</p>}
        <p className="switch-mode">
          {isSignup ? 'Already have an account?' : 'New here?'}{' '}
          <Link href={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log in' : 'Create an account'}</Link>
        </p>
      </section>
    </main>
  );
}
