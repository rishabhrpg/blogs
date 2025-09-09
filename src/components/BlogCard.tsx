import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, readTime, slug }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {excerpt}
      </p>
      <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{date}</span>
        <span>• {readTime}</span>
      </div>
    </Link>
  );
}
