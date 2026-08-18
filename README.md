# The Melissa Foundation

Website for **The Melissa Foundation**, a 501(c)(3) non-profit organization (EIN 39-4516117) empowering people with knowledge, resources and support to make healthier choices and live healthier lives at every stage of their journey — before, during and after cancer.

Dedicated in loving memory of Jamilla (Elizabeth) Deville.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Blog — What is Cancer? | `blog.html` |
| Resources — books, doctors, naturopaths | `resources.html` |
| Events — Yoga and Sound Healing with Melissa | `events.html` |
| Recipes — Juices | `recipes.html` |
| Dedication | `dedication.html` |

## Running locally

This is a static site — no build step required. Serve the repository root with any static server, e.g.:

```bash
python3 -m http.server 8000
```

then open <http://localhost:8000>.

## Structure

- `css/`, `js/`, `vendor/`, `icons/` — theme assets (ClinicMaster template by DexignZone, skin-5)
- `images/` — site logo, favicon and photos

Intended domains: `themelissafoundation.org` (primary), with `themelissafoundation.com` forwarding to it.
