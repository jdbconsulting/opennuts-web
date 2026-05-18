/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export. ``next build`` writes the full site to
  // ``out/`` which the GitHub Pages workflow uploads as the Pages
  // artifact. The site is served from the apex domain
  // ``opennuts.com`` (CNAME committed in ``public/CNAME``), so no
  // ``basePath`` / ``assetPrefix`` indirection is required.
  output: 'export',

  // GitHub Pages serves ``/foo/index.html`` for ``/foo/`` but not
  // for ``/foo``. Emit trailing-slashed URLs so deep links resolve
  // without a 404.
  trailingSlash: true,

  // ``next/image``'s runtime optimizer has no host to run on under
  // a static export; pass images through unchanged.
  images: { unoptimized: true },
}

module.exports = nextConfig
