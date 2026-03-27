/**
 * prerender.mjs — post-build SEO prerendering for React sites
 * Runs after: vite build && node prerender.mjs
 *
 * For each public route, reads dist/index.html and injects
 * route-specific meta tags + canonical URL, then writes a
 * static HTML file so crawlers get proper meta without JS.
 *
 * Add new routes to the ROUTES array below when new pages are built.
 */
import fs from "fs";
import path from "path";

const DOMAIN = "https://yagyaistudio.vercel.app";

const ROUTES = [
  { route: "/", output: "dist/index.html" },
];

// Read the Vite-built index.html (has correct bundle hashes)
const base = fs.readFileSync("dist/index.html", "utf-8");

for (const { route, output } of ROUTES) {
  const url = DOMAIN + route;

  // Replace title and inject canonical — customise per route as needed
  let html = base
    .replace(/<title>.*?<\/title>/, `<title>TODO: Page title for ${route || "/"}</title>`)
    .replace(
      "</head>",
      `  <link rel="canonical" href="${url}" />\n</head>`
    );

  // Ensure output directory exists
  const dir = path.dirname(output);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(output, html, "utf-8");
  console.log(`[prerender] Wrote ${output}`);
}

console.log(`\n[prerender] Done — ${ROUTES.length} route(s) prerendered.`);
