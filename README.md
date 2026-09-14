# Shadow Webring

> A community webring connecting independent websites dedicated to Shadow the Hedgehog.

**Shadow Webring** is part of the [Shadorux](https://shadorux.dev/) open web ecosystem. It exists to help Shadow fan sites discover one another without depending on social-media algorithms.

## Join the ring

Shadow shrines, fan sites, archives, blogs, tools, graphics sites, and other independent Shadow-focused web projects are welcome.

### Submit by pull request — fastest

1. Fork this repository.
2. Add your site to `sites.json` using a unique lowercase ID.
3. Add the Shadow Webring widget to the URL you submitted.
4. Open a pull request.

### Submit by email

Don't want to use GitHub? Email **support@shadorux.dev** with your site name, URL, a short description, and the ID you'd like to use. Email submissions are usually seen within a few days; **pull requests are faster**.

Example registry entry:

```json
{
  "id": "example-shrine",
  "name": "Example Shadow Shrine",
  "url": "https://example.com/",
  "description": "A personal Shadow the Hedgehog shrine."
}
```

Then add the widget to your site:

```html
<script
  src="https://shadorux.github.io/shadow-webring/shadow-webring.js"
  data-site="example-shrine">
</script>
```

The widget provides **Previous**, **Random**, and **Next** navigation through the ring.

## Membership

Sites should be substantially about Shadow the Hedgehog or host a substantial Shadow-focused section/project. Small personal sites are explicitly welcome. Sites must have a working public URL and must display the webring widget (or equivalent links using the webring routes).

The ring is for independent fan-web discovery. Inclusion is curated to keep navigation useful and safe.

## Files

- `sites.json` — member registry
- `shadow-webring.js` — embeddable widget
- `index.html` — member directory and landing page
- `navigate.html` — Previous / Random / Next redirect handler
- `CONTRIBUTING.md` — submission details

## Related Shadorux projects

- [Awesome Shadow the Hedgehog](https://github.com/Shadorux/awesome-shadow-the-hedgehog) — curated directory of the broader Shadow web
- [SHADOW.CSS](https://github.com/Shadorux/shadow-the-hedgehog-css) — Shadow-inspired CSS toolkit
- [Shadorux](https://shadorux.dev/) — the wider Shadow web network

## Disclaimer

Shadow the Hedgehog and related properties belong to SEGA. Shadow Webring is an unofficial fan project and is not affiliated with or endorsed by SEGA.

## License

The webring code is released under the MIT License.