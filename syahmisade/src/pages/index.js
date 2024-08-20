import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </header>
      <h1 className="text-4xl font-bold text-orange-500">Welcome to My Website</h1>
      <p>This is a combination of my personal blog and portfolio.</p>
    </div>
  );
}
