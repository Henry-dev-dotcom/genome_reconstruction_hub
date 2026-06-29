# Group 2 Genome Reconstruction Hub - QA Checked Final

This is the QA-checked final single-page learning website for:
Genome Reconstruction of a Novel Emerging Pathogen.

## Files
- index.html
- style.css
- script.js
- favicon.svg
- study-notes.md
- presentation-guide.md
- DEPLOYMENT.md
- QA_REPORT.md
- README.md

## New update
- Added embedded YouTube teaching video section using the provided video link.
- Added a responsive 16:9 video frame.
- Added a direct YouTube fallback link.
- Added study instructions beside the video.

## QA fixes applied
- Reduced navbar to essential links to prevent desktop overflow.
- Added responsive navigation breakpoint improvements.
- Added keyboard-accessible flashcards.
- Added aria-expanded support for menu and accordion buttons.
- Added null-safe JavaScript to prevent runtime crashes.
- Added localStorage safety handling.
- Added focus-visible styles.
- Improved print mode, especially when dark mode is active.
- Added skip-link accessibility support.
- Checked anchor links and local download file paths.
- Checked JavaScript syntax with Node.
- Checked CSS brace balance.

## How to run
Open `index.html` in your browser.

## Recommended use
Use this as the final version for your group learning website.

## Inline Video Update
- Removed the direct YouTube button.
- Students are now encouraged to watch the embedded video directly on the website.

## YouTube Error 153 embed fix
- Updated the video iframe with `referrerpolicy="strict-origin-when-cross-origin"`.
- Added explicit GitHub Pages origin parameter.
- Removed iframe lazy loading.
- Added VIDEO_EMBED_FIX.md with a self-hosted MP4 fallback option.
