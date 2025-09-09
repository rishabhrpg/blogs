# Rishabh's Blog

A modern blog built with Next.js, MDX, and Tailwind CSS for sharing DIY projects, smart home automation, and maker adventures.

## Features

- ✨ Modern, responsive design with dark mode support
- 📝 MDX support for rich content creation
- 🎨 Beautiful typography with Tailwind CSS
- 🚀 Fast performance with Next.js App Router
- 📱 Mobile-friendly responsive layout
- 🔍 SEO optimized

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the blog

## Project Structure

```
src/
├── app/
│   ├── blog/[slug]/          # Dynamic blog post routes
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── BlogLayout.tsx        # Blog layout component
│   ├── BlogCard.tsx          # Blog post card component
│   └── mdx-components.tsx    # MDX component customizations
└── content/
    └── posts/                # Blog posts (for future expansion)
```

## Current Posts

- **DIY Smart Alarm System**: A comprehensive guide to building a smart alarm system using WLED, DFPlayer Mini, and n8n automation. Features an interactive tabbed interface with sections for Introduction, Hardware Setup, Software & Architecture, and Use Cases with sub-navigation.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **MDX** - Markdown with JSX components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Geist Font** - Modern typography

## Adding New Posts

To add a new blog post:

1. Create a new component in `src/app/blog/[slug]/`
2. Add the post metadata to the `posts` object in `page.tsx`
3. Update the homepage post list

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

```bash
pnpm build
pnpm start
```

## License

MIT License - feel free to use this as a template for your own blog!
