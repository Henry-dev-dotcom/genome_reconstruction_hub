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
