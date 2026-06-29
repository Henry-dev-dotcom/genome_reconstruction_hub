# YouTube Embed Fix

The YouTube iframe has been updated to reduce Error 153.

## Changes made
- Changed the embed source from `youtube-nocookie.com` to `youtube.com`.
- Added an explicit `origin` parameter for GitHub Pages:
  `https://henry-dev-dotcom.github.io`
- Added:
  `referrerpolicy="strict-origin-when-cross-origin"`
- Removed iframe lazy loading from the YouTube player.

## Why this matters
YouTube Error 153 can happen when the embedded player does not receive a valid referrer/origin during initialization.

## If the error still appears
If YouTube still refuses the embed, it means YouTube is blocking inline playback for that video/account/browser context. The most reliable solution is to self-host the video.

### Self-hosted MP4 option
1. Get the original MP4 video file you created.
2. Rename it:
   `technique-video.mp4`
3. Put it in the same folder as `index.html`.
4. Replace the iframe block with:

```html
<video controls preload="metadata" poster="video-poster.png">
  <source src="technique-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

5. Add this CSS:

```css
.video-frame video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

This will make students watch the video directly from your website without depending on YouTube embeds.
