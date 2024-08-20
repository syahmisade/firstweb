import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-orange-500 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold"><Link href="/">Syahmi Sade</Link></div>
          <ul className="flex space-x-6">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero bg-orange-100 py-20 text-center">
            <h1 className="text-5xl font-bold text-orange-600 mb-4">Welcome to My Website</h1>
            <p className="text-lg text-gray-700 mb-8">A combination of my personal blog and portfolio</p>
            <Link href="/portfolio" className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">Explore My Portfolio</Link>
            <Link href="/blog" className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">Explore My Blog</Link>
        </section>
      </main>
      
      <footer className="bg-orange-500 text-white py-6">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}
