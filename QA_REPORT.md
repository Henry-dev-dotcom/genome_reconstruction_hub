# QA Report
## Group 2 Genome Reconstruction Hub

### Summary
QA review completed and fixes applied. The website is ready for group use.

### Static Checks
- Duplicate IDs: None found
- Broken internal anchors or local file paths: None found
- CSS brace balance: Passed
- JavaScript syntax check: Passed

### Functionality Reviewed
- Sticky navigation
- Mobile menu
- Accordion lesson modules
- Quiz level switching
- Quiz scoring and explanations
- Flashcard flipping
- Glossary search
- Dark/light mode
- Reading progress bar
- Back-to-top button
- Print notes
- Downloadable notes and presentation guide

### Fixes Applied
1. Reduced the top navigation to essential links so it no longer overflows on desktop.
2. Improved the responsive breakpoint for the mobile menu.
3. Added aria-expanded support to menu and accordion buttons.
4. Made flashcards keyboard accessible.
5. Rewrote JavaScript with safer null checks.
6. Added safe localStorage handling.
7. Added focus-visible styles for accessibility.
8. Improved print mode, including printing from dark mode.
9. Added a skip link for keyboard navigation.
10. Rechecked all internal links and local downloads.

### Final Status
The site passed QA checks and is ready to use.


## Video Update QA
- Duplicate IDs after video update: None found
- Broken internal/local links after video update: None found
- CSS brace balance after video update: Passed
- JavaScript syntax after video update: Passed
- YouTube embed section added: Passed


## Inline Video Update QA
- Direct visible YouTube button removed: Passed
- Embedded video retained: Passed
- Duplicate IDs after inline video update: None found
- Broken internal/local links after inline video update: None found
- CSS brace balance after inline video update: Passed
- JavaScript syntax after inline video update: Passed


## YouTube Error 153 Embed Fix QA
- Standard YouTube embed used: Passed
- Referrer policy added: Passed
- Explicit GitHub Pages origin added: Passed
- Lazy loading removed from video iframe: Passed
- Duplicate IDs after fix: None found
- Broken internal/local links after fix: None found
- CSS brace balance after fix: Passed
- JavaScript syntax after fix: Passed


## Self-Hosted Video QA
- YouTube iframe removed: Passed
- HTML5 video player added: Passed
- Local MP4 source linked: Passed
- MP4 file included: Passed
- MP4 file size: 45.81 MB
- Duplicate IDs after self-hosted update: None found
- Broken internal/local links after self-hosted update: None found
- CSS brace balance after self-hosted update: Passed
- JavaScript syntax after self-hosted update: Passed
