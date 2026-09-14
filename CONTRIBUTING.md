# Contributing to Shadow Webring

Thanks for helping connect the Shadow fan web.

## Joining

### Pull request — fastest

Add one object to `sites.json`:

```json
{
  "id": "your-site-id",
  "name": "Your Site Name",
  "url": "https://example.com/",
  "description": "One short sentence describing your Shadow project."
}
```

Then open a pull request with your addition.

### Email

If you don't want to submit through GitHub, email **support@shadorux.dev** with:

- your site name
- site URL
- a short description
- the lowercase ID you'd like to use

Email submissions are usually seen within a few days. **Pull requests are faster.**

### Requirements

- Use a unique lowercase `id` containing letters, numbers, and hyphens only.
- Submit a public HTTPS URL.
- The site must be substantially Shadow the Hedgehog-focused, or contain a substantial Shadow-focused project/section.
- Personal sites and small shrines are welcome.
- The submitted site must display the Shadow Webring widget or equivalent Previous / Random / Next links before it is added to the ring.
- Do not submit deceptive, malicious, or primarily spam/advertising pages.

## Widget

Replace `your-site-id` with the ID from your registry entry:

```html
<script
  src="https://shadorux.github.io/shadow-webring/shadow-webring.js"
  data-site="your-site-id">
</script>
```

The default widget is deliberately self-contained and uses inline styles so it works on simple static sites. You may instead create your own styled links to the navigation routes as long as Previous, Random, Next, and the ring itself remain reasonably discoverable.

## Updating or leaving

Open a pull request changing your registry entry, or email **support@shadorux.dev**. Site owners may request removal at any time.

## Curation

Membership is curated rather than automatic. This keeps the ring useful for actual visitors and prevents broken or hostile destinations from entering navigation.
