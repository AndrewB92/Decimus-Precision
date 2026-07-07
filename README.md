# Decimus Precision

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![Static Site](https://img.shields.io/badge/Static%20Website-0B7285?style=for-the-badge)

Static one-page website for **Decimus Precision**, a marine service company focused on vessel repair, refit, refurbishment, and worldwide riding team support.

The project is a lightweight static export prepared for GitHub Pages. It does not require a build step, backend, CMS, database, package manager, or server-side runtime.

## Tech Stack

- **HTML5** for semantic page structure
- **CSS3** for responsive layout, visual styling, and animations
- **Vanilla JavaScript** for lightweight interactions

## Project Structure

```txt
.
├── index.html
├── manifest.json
├── css/
│   ├── styles.css
│   └── fonts.css
├── js/
│   └── main.js
└── assets/
    └── img/
```

## Files

- `index.html` — main static landing page
- `css/styles.css` — extracted and adjusted site styles
- `css/fonts.css` — local font stylesheet
- `js/main.js` — helper script for mobile menu, sticky header state, and badge close action
- `assets/img/` — exported images and inline image assets
- `manifest.json` — optional web app manifest

## Features

- Static landing page
- Responsive layout
- Self-hosted assets
- SEO-ready document structure
- Lightweight CSS and JavaScript

## Deployment

This project can be deployed directly from the repository root.

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch.
4. Select the root folder `/`.
5. Save the settings.

GitHub Pages will publish the static files from the selected branch and folder.

## Local Development

The site can be opened directly in a browser, but a local server is better for testing relative paths and browser behavior.

Example:

```bash
python3 -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

## License

This repository contains a static website prepared for Decimus Precision. Brand assets, copy, and images belong to their respective owners.
