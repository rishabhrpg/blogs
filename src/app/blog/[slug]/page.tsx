import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';
import SmartAlarmPost from './smart-alarm-system';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const posts = {
  'smart-alarm-system': {
    title: "I built a Sentinel AI system using n8n and ChatGPT with ESP8266",
    date: "December 2024",
    readTime: "6 min read",
    component: SmartAlarmPost
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  const PostComponent = post.component;

  return (
    <BlogLayout 
      title={post.title}
      date={post.date}
      readTime={post.readTime}
    >
      <PostComponent />
    </BlogLayout>
  );
}
