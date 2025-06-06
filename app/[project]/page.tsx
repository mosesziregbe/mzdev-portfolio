'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const projects: Record<
  string,
  { name: string; url: string; description: string }
> = {
  explorito: {
    name: 'Explorito AI Website',
    url: 'https://explorito-ai-website.vercel.app/',
    description: 'AI-powered website with modern design',
  },
  flixx: {
    name: 'Flixx Movie App',
    url: 'https://flixxmovie-dave.vercel.app/',
    description: 'Vanilla JS app displaying movies and TV shows',
  },
  loopstudios: {
    name: 'Loopstudios',
    url: 'https://loopstudios-roan-one.vercel.app/',
    description: 'Creative agency showcase with modern design',
  },
  tutor: {
    name: 'Tutor Website',
    url: 'https://tutor-website-six-blue.vercel.app/',
    description: 'Educational service platform design',
  },
  leno: {
    name: 'Leno App',
    url: 'https://leno-app-bice.vercel.app/',
    description: 'Productivity assistant landing page',
  },
  fylo: {
    name: 'Fylo Website',
    url: 'https://fylo-website-mocha.vercel.app/',
    description: 'Secure file storage with dark mode support',
  },
  bookmark: {
    name: 'Bookmark Manager',
    url: 'https://bookmark-manager-nine.vercel.app/',
    description: 'Clean bookmark organization landing page',
  },
  'shopping-list': {
    name: 'Shopping List',
    url: 'https://shopping-list-example.vercel.app/', // Update with your actual URL
    description: 'Simple vanilla JS shopping list manager',
  },
  clipboard: {
    name: 'Clipboard Website',
    url: 'https://clipboard-example.vercel.app/', // Update with your actual URL
    description: 'Modern clipboard manager with TailwindCSS',
  },
  tracalorie: {
    name: 'Tracalorie',
    url: 'https://tracalorie-example.vercel.app/', // Update with your actual URL
    description: 'Calorie tracking app with Webpack',
  },
  shortly: {
    name: 'Shortly',
    url: 'https://shortly-example.vercel.app/', // Update with your actual URL
    description: 'URL shortening service landing page',
  },
  omnifood: {
    name: 'Omnifood',
    url: 'https://omnifood-example.vercel.app/', // Update with your actual URL
    description: 'Food delivery website with modern design',
  },
};

export default function ProjectPage() {
  const params = useParams();
  const projectSlug = params.project as string;
  const project = projects[projectSlug];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for iframe
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">{project.name}</h1>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              ← Portfolio
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open in New Tab ↗
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="relative h-[calc(100vh-80px)]">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading {project.name}...</p>
            </div>
          </div>
        )}

        <iframe
          src={project.url}
          className="w-full h-full border-0"
          title={project.name}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            // Handle iframe loading errors
          }}
        />
      </div>
    </div>
  );
}
