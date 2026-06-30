# Hero video

Drop ambient loop files here and they light up automatically — no code change needed.

Expected filenames (referenced by `resources/js/Components/Marketing/Hero.jsx`):

- `hero.webm`  — preferred (VP9/AV1, smaller)
- `hero.mp4`   — fallback (H.264, broad support)

Until these exist, the hero shows `public/images/site/hero-sauna.webp` as a static
poster — identical to the previous look.

## Specs (keep it lightweight — a heavy hero kills the "alive" feeling)
- ~10–20s seamless loop, no hard cut
- 1920×1080 (or 1280×720 — it's behind a 60% dark overlay, so detail is forgiving)
- Muted, no audio track needed
- Target < 3–4 MB. Compress hard.

## Quick encode (ffmpeg)
```sh
# mp4 (H.264)
ffmpeg -i source.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4
# webm (VP9)
ffmpeg -i source.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 34 -b:v 0 hero.webm
```

Content ideas that fit the brand: steam drifting in a sauna, someone walking
through a studio, light shifting across a space, slow recovery/movement moments.
