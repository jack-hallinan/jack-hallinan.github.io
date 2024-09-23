# React Vite Project

This is a React project built using Vite and hosted on GitHub Pages. Follow the instructions below to set up, preview, and deploy your site.

## Table of Contents

- [Getting Started](#getting-started)
- [Pulling and Pushing to GitHub](#pulling-and-pushing-to-github)
- [Previewing the Site](#previewing-the-site)
- [Publishing the Site](#publishing-the-site)
- [Editing the Site](#editing-the-site)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jack-hallinan/jack-hallinan.github.io.git
   ```

2. Navigate into the project directory:

   ```bash
   cd jack-hallinan.github.io
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Pulling and Pushing to GitHub

### Pull Changes

To pull the latest changes from the remote repository:

```bash
git pull origin main-page
```

### Push Changes

After making changes to the project, you can push them to GitHub with the following commands:

1. Stage your changes:

   ```bash
   git add .
   ```

2. Commit your changes with a message:

   ```bash
   git commit -m "Your commit message"
   ```

3. Push the changes to the remote repository:

   ```bash
   git push origin main-page
   ```

## Previewing the Site

To preview the site in development mode, run the following command:

```bash
npm run dev
```

This will start a local development server, and you can view your project in your browser at `http://localhost:3000` (or the URL provided in the terminal).

## Publishing the Site

To deploy your site to GitHub Pages, follow these steps:

1. First, build your project:

   ```bash
   npm run build
   ```

2. Then, run the predeploy script to prepare for deployment:

   ```bash
   npm run predeploy
   ```

3. Finally, deploy the site:

   ```bash
   npm run deploy
   ```

This will publish your site to GitHub Pages. After deployment, you can access it at `https://jack-hallinan.github.io`.

## Editing the Site

Almost all data can be edited from the `src/data/index.tsx` file. To do so, add a new entry in the data arrays. Here are all the data arrays:

- BIO_SNIPPETS
  - label
  - value
- SOCIAL_MEDIA_LIST
  - name
  - link
  - icon
- MY_WORK_LINKS
  - name
  - url
  - icon
- EXPERIENCES
  - company
  - position
  - duration
  - url*
  - description*

*Denotes an optional argument.

Finally, the `About Me` section must be edited from the `src/aboutSection/index.tsx` file.