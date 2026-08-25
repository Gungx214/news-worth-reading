# News Worth Reading

A simple static news website. No database — every article is a plain text
(Markdown) file in `src/articles/`. The admin panel at `/admin` lets you add,
edit, and delete articles without touching code.

## What's inside

```
src/
  _includes/layouts/   the page templates (edit these for a redesign)
  articles/            one file per news article
  images/uploads/      photos used in articles
  admin/                the /admin content editor
  styles.css            all colors, fonts, spacing
  index.njk              homepage
```

## 1. Try it on your computer (optional)

Requires [Node.js](https://nodejs.org) installed first.

```
npm install
npm start
```

Then open the local address it prints in your browser.

## 2. Put it on GitHub

1. Create a new repository on [github.com](https://github.com) (keep it private
   or public, your choice).
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "First version of the site"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

## 3. Deploy on Netlify (free)

1. Go to [netlify.com](https://netlify.com) and sign up using your GitHub account.
2. Click **Add new site → Import an existing project**, pick this repository.
3. Netlify will detect the build settings automatically from `netlify.toml`
   (build command `npx @11ty/eleventy`, publish folder `_site`). Click **Deploy**.
4. Within a minute your site is live at a free address like
   `newsworthreading.netlify.app`.

## 4. Turn on the admin panel (/admin)

The admin panel needs **Netlify Identity** and **Git Gateway** turned on —
these let your boss log in and publish without a GitHub account.

1. In your Netlify site dashboard: **Site configuration → Identity → Enable Identity**.
2. Under Identity settings, set **Registration** to "Invite only" (so random
   people can't sign up).
3. Still under Identity, scroll to **Services → Git Gateway → Enable Git Gateway**.
4. Go to **Identity → Invite users**, and invite your boss's email address.
   They'll get an email to set a password.
5. Visit `yoursite.netlify.app/admin` — that's the panel. Log in with the
   invited email.

From then on: dragging in a photo, pasting a headline, pasting the article
text, and clicking **Publish** writes a new file into `src/articles/` and the
site rebuilds automatically within a minute or two.

## 5. Add your custom domain later

In Netlify: **Domain management → Add a domain**. Buy the domain from
Namecheap or Cloudflare (~$10–15/year), then follow Netlify's DNS instructions
— it issues free HTTPS automatically once connected.

## Redesigning later

Everything about the *look* of the site lives in two places only:

- `src/styles.css` — every color, font, and spacing value
- `src/_includes/layouts/` — the page structure (base.njk, article.njk)
  and `src/index.njk` for the homepage

None of the 4+ articles need to be touched or migrated for a redesign —
content and design are fully separate. Send me the new direction whenever
your boss wants a change, and I'll update these files without touching a
single article.
