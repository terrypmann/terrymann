# terry-mann.com

Personal website for Terry Mann — Composer, Melbourne Australia.

---

## File Structure

```
/
├── index.html        ← Bare HTML shell (never needs editing)
├── style.css         ← All styles (rarely needs editing)
├── render.js         ← Builds the page from data.js (never needs editing)
├── data.js           ← ALL CONTENT LIVES HERE ← edit this one
├── CNAME             ← Custom domain for GitHub Pages
├── README.md         ← This file
└── images/
    ├── terry-2025.jpg
    ├── studio.jpg
    ├── charity-logos.png
    ├── 13goat.jpg
    ├── the-project.jpg
    ├── abc-nye.jpg
    ├── nay-nay.jpg
    ├── hailing-cesar.jpg
    ├── ghost-turd.jpg
    ├── orchestral/
    │   ├── the-prance.jpg
    │   ├── the-hunt.jpg
    │   ├── the-frolic.jpg
    │   └── the-wander.jpg
    └── testimonials/
        ├── max.jpg
        ├── adam.jpg
        ├── jess.png
        ├── giles.png
        ├── sara.jpg
        ├── karin.jpg
        ├── cuz.png
        ├── steph.jpg
        ├── nigel.jpg
        ├── naomi.jpg
        ├── robin.jpg
        ├── hilary.jpg
        ├── ryan.jpg
        ├── chris.png
        └── izzy.png
```

---

## How to Add a New Work Item

Open `data.js`. Find the right array (e.g. `ads: [...]`).
Copy the last item in the array and paste it as a new entry. Update the fields:

```js
{
  title: "Client Name",
  desc: "Description of the work.",
  credit: "Agency: Agency Name",
  youtubeId: "dQw4w9WgXcQ"   // the part after ?v= in the YouTube URL
}
```

Save. Done. The number, layout and everything else is automatic.

### Item types
| Type | Use | Required fields |
|------|-----|-----------------|
| Video (default) | Has a YouTube embed | `youtubeId` |
| Link image | Clickable image → external URL | `type: "link-image"`, `image`, `href` |
| Still image | Photo only, no link | `type: "image"`, `image` |
| Text only | No visual | Omit `type` and visual fields |

---

## How to Reorder Items

In `data.js`, cut and paste entire `{ ... },` objects within an array.
The on-screen numbering updates automatically.

---

## How to Fill In YouTube IDs

Search `data.js` for `YOUTUBE_ID_` — each one is a placeholder named after the client.
Replace with the real ID from the YouTube URL (the part after `?v=`).

---

## How to Add a Release Embed

In the `releases` array, find the item and replace `embed: null` with the full
iframe string from Bandcamp, Spotify or SoundCloud (wrap in backticks):

```js
embed: `<iframe src="https://bandcamp.com/..." ...></iframe>`
```

---

## How to Add a Testimonial

In the `testimonials` array, add a new object:
```js
{
  quote: "Their testimonial text here.",
  name: "Full Name",
  title: "Job Title, Company",
  photo: "images/testimonials/firstname.jpg"
}
```
Upload the photo to `/images/testimonials/` in the repo.

---

## GitHub Pages + Custom Domain Setup

1. Create a new GitHub repo (e.g. `terry-mann-website`)
2. Upload all files (index.html, style.css, render.js, data.js, CNAME, images/)
3. Go to repo **Settings → Pages**
   - Source: `Deploy from a branch` → `main` → `/ (root)`
   - Custom domain: enter `terry-mann.com`
4. At your domain registrar, update DNS:
   - Delete any existing A records pointing to Squarespace
   - Add four **A records** pointing to:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME record**: `www` → `[your-github-username].github.io`
5. Back in GitHub Pages settings, tick **Enforce HTTPS** (available after ~1 hour)

The `CNAME` file in the repo root is already set to `terry-mann.com` — don't delete it.
