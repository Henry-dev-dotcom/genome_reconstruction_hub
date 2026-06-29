# Self-Hosted Video Update

The website now uses the uploaded MP4 video directly instead of a YouTube embed.

## Video file added
`Genome_Reconstruction.mp4`

## File size
Approximately 45.81 MB

## Viewing behaviour
Students can watch the video directly inside the website using the browser's built-in video player.

## Why this update was made
The YouTube embed showed Error 153 / video player configuration error. Using a local MP4 avoids that embed issue.

## Files changed
- index.html
- style.css
- Genome_Reconstruction.mp4
- README.md
- QA_REPORT.md

## How to update GitHub
Replace your repository files with this updated version, then commit and push.

```bash
git add .
git commit -m "Use self-hosted study video"
git push
```

## Important GitHub note
GitHub has file-size limits. If GitHub rejects the MP4 because it is too large, compress the video first or host it externally on a file/CDN service that supports direct MP4 playback.
