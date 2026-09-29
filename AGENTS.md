# CTX Technology Website

## Overview

This repository contains the public CTX Technology marketing site and its static productized checkout entry point. It is dependency-free and can be hosted on GitHub Pages or any static file host.

## Structure

- `index.html` is the homepage and qualification flow.
- `core.html`, `shield.html`, `signal.html`, and `forge.html` are the product pages. `essential.html` is a legacy redirect alias for Core.
- `checkout.html` is the public payment selection page.
- `confirmation.html` is the branded post-payment destination for Stripe Payment Links.
- `stripe-links.js` contains public Stripe Payment Link URLs only. It must never contain secret keys.
- `checkout.js` resolves the selected product and activates the matching Stripe link when configured.
- `styles.css`, `service-pages.css`, and `checkout.css` contain the visual system.
- `app.js` contains homepage progressive-enhancement behavior.
- `favicon.svg` is the CTX shield/lightning brand hook.
- `PLANNING.md` documents product scope, checkout assumptions, and launch tasks.

## Development And Release Workflow

- `main` is the live production branch. Do not commit directly to `main` or push changes directly to it.
- Start every development task from an up-to-date local `main` branch and create a new branch for the work. Use a descriptive prefix such as `feature/`, `fix/`, or `docs/`.
- Keep the branch focused, validate the change locally, commit it, and push the branch to the remote repository.
- Open a pull request into `main` for review. Production changes are completed by reviewing and merging the pull request.
- Documentation-only changes follow the same branch and pull-request workflow as code changes.
- After a pull request is merged, refresh local `main` before starting the next branch.

## Product And Checkout Rules

- Keep the public product language consistent: Core, Shield, Signal, and Forge.
- Keep public prices framed as starting points. Do not expose internal vendor costs or margins.
- Stripe Payment Links are the static-hosting integration. Do not add a Stripe secret key to this repository or browser JavaScript.
- Product-page “Start with” buttons should lead to `checkout.html?product=...`; discovery-call links remain available for questions and custom scope.
- A product can only show an active pay button when its URL is present in `stripe-links.js`. Do not invent or guess Stripe URLs.
- Checkout must state what happens after payment. The current operating target is a human confirmation within one business day, followed by a discovery/provisioning call.
- If pricing, payment terms, taxes, minimums, or response targets change, update `PLANNING.md` and the relevant product page together.

## Editing Conventions

- Preserve the existing restrained Apple-style visual system and responsive behavior.
- Prefer semantic HTML and keyboard-accessible controls. The checkout flow must remain understandable without JavaScript, even when payment links are not configured.
- Use system fonts and keep the site dependency-free unless a dependency is clearly needed.
- Use ASCII in source files unless customer-facing copy has a clear reason to use another character set.

## Privacy And Contact Information

- Use `hello@ctx-technology.com` for public contact links. Do not use the unhyphenated email domain.
- Keep `privacy.html` linked from the site footer.
- Keep privacy disclosures matched to the current site. The static site has no contact form, analytics, or advertising cookies; email is handled by the visitor's email provider, and payment is handled on Stripe's hosted checkout page.
- If the site adds forms, analytics, cookies, or another third-party service, update `privacy.html` to describe its actual collection and use of information.
