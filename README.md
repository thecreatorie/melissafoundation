# The Melissa Foundation

Website for **The Melissa Foundation**, a 501(c)(3) non-profit charitable organization (EIN 39-4516117) empowering people with knowledge, resources and support to make healthier choices and live healthier lives at every stage of their journey — before, during and after cancer.

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
| Donate | `donate.html` |
| Contact / Partner with us | `contact.html` |

## Running locally

This is a static site — no build step required. Serve the repository root with any static server, e.g.:

```bash
python3 -m http.server 8000
```

then open <http://localhost:8000>.

## Structure

- `css/`, `js/`, `vendor/`, `icons/` — theme assets (ClinicMaster template by DexignZone, skin-5)
- `images/` — logos (`logo.png` full, `logo-horizontal.png` for the header), favicon, photos and donation QR codes
- `js/contact-form.js` — contact form handler

## Contact form

GitHub Pages serves static files only and cannot process form posts, so the
contact form posts to [Formspree](https://formspree.io). The endpoint is set
in `FORM_ENDPOINT` at the top of `js/contact-form.js`.

If the endpoint is ever cleared or the request fails, the form falls back to
offering the visitor a pre-filled `mailto:` link, so no message is lost.

## Donations

Donations go to the foundation's PayPal via its managed payment link (the
same destination as the PayPal QR code on the donate page), plus Zelle by QR.
The PayPal link lives in `donate.html` and `index.html`.

Intended domains: `themelissafoundation.org` (primary), with `themelissafoundation.com` forwarding to it.
