import type { NextConfig } from "next";

/**
 * Statically exported portfolio for me.webaweba.com.
 *
 * - `output: 'export'` builds the entire site as plain HTML/CSS/JS so it can
 *   be hosted on any static CDN (Cloudflare Pages, GitHub Pages, S3, etc.)
 *   without a Node runtime.
 * - `images.unoptimized` disables the next/image build-time pipeline because
 *   we ship pre-encoded WebP files from /public/assets and use plain <img>
 *   with hand-tuned srcset on the hot paths.
 * - `trailingSlash` makes static hosts that serve `folder/index.html` work
 *   correctly for nested routes such as `/en/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
