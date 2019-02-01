# PWA Boilerplate

## file structure

## PostCSS
CSS is ran through post CSS so we can use modern standards without using scss's custom syntax.  Each component loads its own css dependencies allowing css to be bundled into the comonent's bundle.

## Code Splitting
All packages from `node_modules` are broken into individual bundles.  This reduces needing to reload entire vendor bundle when a single package updates.  Code is broken into a new bundle anytime webpack sees `import()`.  This includes any style associated with each bundle.

## Service Worker
All files are precached by service worker allowing the app to work without a data connection.  The service worker automatically precaches new files when they have been updated.

## manifest.json
`manifest.json` is copied from `./public` and provides information for when a user installs app to their homescreen