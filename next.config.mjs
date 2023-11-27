import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/~topfermi" : "",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],  // add MDX
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeSlug, rehypeHighlight],
  },
})
 
export default withMDX(nextConfig)
