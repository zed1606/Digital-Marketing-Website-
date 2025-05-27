# Deploying Your Next.js Static Site to GitHub Pages

This guide provides step-by-step instructions to deploy your statically exported Next.js application to GitHub Pages.

## Prerequisites

1.  **GitHub Repository**: Your project should be hosted on a GitHub repository.
2.  **Node.js & npm**: Ensure you have Node.js and npm (or yarn/pnpm) installed to build the project.
3.  **Next.js Configuration**: Your `next.config.ts` (or `.js`/`.mjs`) must be configured for static export:
    ```javascript
    // next.config.ts
    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      output: 'export',
      trailingSlash: true, // Recommended for static exports and GitHub Pages
      images: {
        unoptimized: true, // Recommended for static hosts like GitHub Pages
      },
      // If deploying to a sub-repository (e.g., https://<username>.github.io/<repository-name>/),
      // you MUST uncomment and set basePath and assetPrefix:
      // basePath: '/<repository-name>',
      // assetPrefix: '/<repository-name>/',
    };

    export default nextConfig;
    ```
    **Important**: If your site will be deployed to a subpath (e.g., `https://your-username.github.io/your-repo-name/`), you **must** set `basePath` and `assetPrefix` in `next.config.ts` to `/'your-repo-name'`. Otherwise, assets like CSS and JavaScript files will not load correctly.

## Deployment Steps

### 1. Build Your Static Site

Run the build command in your project's root directory:

```bash
npm run build
# or
# yarn build
# or
# pnpm build
```

This command will generate a static version of your site in the `out` directory.

### 2. Add a `.nojekyll` File (Recommended)

GitHub Pages sometimes tries to process sites with Jekyll. To prevent this and ensure your static site is served as-is, create an empty file named `.nojekyll` in the `out` directory:

```bash
touch out/.nojekyll
```
You only need to do this once; commit this file along with your site content.

### 3. Commit and Push the `out` Directory

There are several ways to deploy the `out` folder to GitHub Pages:

**Method A: Deploying the `out` folder to a `gh-pages` branch (Recommended for project sites)**

This is a common method that keeps your main development branch clean.

1.  **Initialize Git in `out` (if not already part of the main repo structure for deployment):**
    *   If you prefer to keep the `out` directory separate or use a different commit history for your built site:
        ```bash
        cd out
        git init
        git add .
        git commit -m "Deploy static site to GitHub Pages"
        git remote add origin https://github.com/<username>/<repository-name>.git # Replace with your repo URL
        git push -u --force origin main:gh-pages # Pushes the content of `out` to the `gh-pages` branch
        cd ..
        ```
    *   **Alternatively (and often simpler), use a tool like `gh-pages` package:**
        Install it: `npm install -D gh-pages`
        Add a script to `package.json`:
        ```json
        "scripts": {
          // ... other scripts
          "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
        }
        ```
        Then run: `npm run deploy`

**Method B: Deploying from a `/docs` folder on your `main` (or `master`) branch**

1.  **Configure `next.config.ts` for `/docs` output (Optional):**
    If you want Next.js to output directly to a `docs` folder instead of `out`, you can configure this in `next.config.ts`:
    ```javascript
    // next.config.ts
    const nextConfig: NextConfig = {
      // ... other settings
      distDir: 'docs', // This changes the build output directory from .next to docs
                      // Note: `output: 'export'` will then place static files in `docs/out` or just `docs`
                      // Check Next.js documentation for the exact interaction with `output: 'export'`
                      // For simplicity, sticking to the default 'out' directory is easier.
    };
    ```
    *Alternatively, and more simply, just rename the `out` folder to `docs` after building.*

2.  **Build your site**:
    ```bash
    npm run build
    ```
3.  **Rename `out` to `docs`** (if you didn't change `distDir`):
    ```bash
    mv out docs 
    ```
4.  **Add `.nojekyll` to `docs`**:
    ```bash
    touch docs/.nojekyll
    ```
5.  **Commit and push `docs` to your `main` branch**:
    ```bash
    git add docs/.
    git commit -m "Deploy static site to /docs folder"
    git push
    ```

### 4. Configure GitHub Pages Source

1.  Go to your repository on GitHub.
2.  Click on the "Settings" tab.
3.  In the left sidebar, click on "Pages".
4.  Under "Build and deployment":
    *   **Source**: Select "Deploy from a branch".
    *   **Branch**:
        *   If you used Method A (or `gh-pages` package), select `gh-pages` as the branch and `/ (root)` as the folder.
        *   If you used Method B, select `main` (or your default branch) as the branch and `/docs` as the folder.
5.  Click "Save".

### 5. Access Your Site

After GitHub Pages builds and deploys your site (this might take a few minutes), it should be available at:

*   If deploying to `username.github.io` (repository named `username.github.io`): `https://username.github.io/`
*   If deploying to a project site (repository named `repository-name`): `https://username.github.io/repository-name/` (Remember to set `basePath` and `assetPrefix` in this case!)
*   If using a custom domain, it will be your custom domain.

## Important Notes

*   **`basePath` for Sub-repositories**: If your site is not at the root of a domain (e.g., `https://<username>.github.io/<repository-name>/`), you **must** configure `basePath: '/<repository-name>'` and `assetPrefix: '/<repository-name>/'` in your `next.config.ts`. Rebuild and redeploy after making this change.
*   **Custom Domains**: If you are using a custom domain with GitHub Pages, you'll need to configure it in the GitHub Pages settings and add a `CNAME` file to your `out` (or `docs`) directory.
*   **Client-Side Routing**: Next.js's client-side router works with static export. However, direct access to sub-routes (e.g., `your-site.com/about`) might return a 404 on some static hosts if not configured to serve the `about/index.html` file for that path. GitHub Pages handles this reasonably well for paths ending in a slash or for `index.html` files. `trailingSlash: true` in `next.config.ts` helps with this.

This completes the setup for deploying your Next.js static site to GitHub Pages.
