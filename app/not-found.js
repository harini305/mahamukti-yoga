import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>This page has moved on</h1>
        <p className="lead" style={{ margin: '1.5rem 0 2rem' }}>
          The page you were looking for doesn’t exist in this version of the site.
        </p>
        <div className="btn-row">
          <Link prefetch={false} className="btn" href="/">
            Back to home
          </Link>
          <Link prefetch={false} className="btn btn--ghost" href="/200-hour-yoga-teacher-training">
            Teacher training
          </Link>
        </div>
      </div>
    </section>
  );
}
