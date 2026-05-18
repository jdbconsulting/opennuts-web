# opennuts-web

The marketing site for [OpenNuts](https://opennuts.com) — nothing more, nothing less.

It is a small Next.js app that is statically exported and published to GitHub Pages.

OpenNuts is a product of [JD Brinton Consulting, Inc.](https://jdbrinton.consulting).

## Deployment

Every push to `main` triggers `.github/workflows/deploy-pages.yml`, which runs `next build` (with `output: 'export'`) and ships the resulting `out/` directory to GitHub Pages. The apex domain `opennuts.com` is pinned via `public/CNAME`. There is no manual deploy step.

## Local development

If you want to run the site locally — to preview a change, debug a layout, or work on copy — clone the repo and:

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To reproduce exactly what gets deployed, build the static export and serve it:

```bash
npm run build
npm run serve
```

## License

Source is released under the [GNU Affero General Public License v3.0](./LICENSE.md).
