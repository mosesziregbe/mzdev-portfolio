import Link from 'next/link';

const projects = [
  {
    name: 'Explorito AI Website',
    description: 'AI-powered website with modern design',
    slug: 'explorito',
    url: 'https://explorito-ai-website.vercel.app/',
  },
  {
    name: 'Flixx Movie App',
    description: 'Vanilla JS app displaying movies and TV shows',
    slug: 'flixx',
    url: 'https://flixxmovie-dave.vercel.app/',
  },
  {
    name: 'Loopstudios',
    description: 'Creative agency showcase with modern design',
    slug: 'loopstudios',
    url: 'https://loopstudios-roan-one.vercel.app/',
  },
  {
    name: 'Tutor Website',
    description: 'Educational service platform design',
    slug: 'tutor',
    url: 'https://tutor-website-six-blue.vercel.app/',
  },
  {
    name: 'Leno App',
    description: 'Productivity assistant landing page',
    slug: 'leno',
    url: 'https://leno-app-bice.vercel.app/',
  },
  {
    name: 'Fylo Website',
    description: 'Secure file storage with dark mode support',
    slug: 'fylo',
    url: 'https://fylo-website-mocha.vercel.app/',
  },
  {
    name: 'Bookmark Manager',
    description: 'Clean bookmark organization landing page',
    slug: 'bookmark',
    url: 'https://bookmark-manager-nine.vercel.app/',
  },
  {
    name: 'Shopping List',
    description: 'Simple vanilla JS shopping list manager',
    slug: 'shopping-list',
    url: 'https://shopping-list-example.vercel.app/', // Add your actual URL
  },
  {
    name: 'Clipboard Website',
    description: 'Modern clipboard manager with TailwindCSS',
    slug: 'clipboard',
    url: 'https://clipboard-example.vercel.app/', // Add your actual URL
  },
  {
    name: 'Tracalorie',
    description: 'Calorie tracking app with Webpack',
    slug: 'tracalorie',
    url: 'https://tracalorie-example.vercel.app/', // Add your actual URL
  },
  {
    name: 'Shortly',
    description: 'URL shortening service landing page',
    slug: 'shortly',
    url: 'https://shortly-example.vercel.app/', // Add your actual URL
  },
  {
    name: 'Omnifood',
    description: 'Food delivery website with modern design',
    slug: 'omnifood',
    url: 'https://omnifood-example.vercel.app/', // Add your actual URL
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hi, I&apos;m Dave
          </h1>
          <p className="text-xl text-gray-600">
            Web Developer & JavaScript Enthusiast
          </p>
        </header>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={`/${project.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center mt-12 text-gray-600">
          <p>Built with by Dave MZ 🥪</p>
        </footer>
      </div>
    </div>
  );
}
