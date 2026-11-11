# Dhairya Shrivastava — Developer Portfolio

A responsive static portfolio built with HTML, CSS and vanilla JavaScript.

## Run locally
Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

```text
Dhairya-Portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/profile.jpg
│   ├── projects/
│   └── certificates/
├── public/
│   └── resume.pdf
└── README.md
```

## Before deployment
- Add the actual live-demo and repository URLs for Image Compressor, Pomodoro Timer and Amazon Navbar in `js/script.js`, in the `LINKS` object.
- AEGIS intentionally has no public source-code link because its repository is private.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import that repository at https://vercel.com/new.
3. Select **Other** as the framework preset.
4. Leave build command and output directory empty.
5. Deploy.

The site is static and requires no build step.
