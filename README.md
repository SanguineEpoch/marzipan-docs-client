# 🧠 Marzipan Docs Client

This is the **official website and documentation frontend** for the [Marzipan programming language](https://github.com/SanguineEpoch/marzipan).

It’s built to support the language’s evolution, help contributors onboard, and communicate the architecture and goals of the Marzipan ecosystem — clearly and with intent.

---

## 📦 Stack

- ⚙️ **Vue 3** – Composition API, `<script setup>`
- 🎨 **Vuetify 3** – Material-based UI framework
- 🧠 **TypeScript** – Strict typing everywhere
- 🧭 **Pinia** – Lightweight state management
- 🛣️ **Vue Router (auto)** – Typed file-based routing
- 📄 **Markdown via ofetch** – Docs are pulled from [`marzipan-docs`](https://github.com/SanguineEpoch/marzipan-docs)
- 📊 **PostHog** – Analytics and feature flags (optional, production only)
- 🎨 **SCSS** – Custom design tokens and variables

---

## 🚀 Local Development

You don’t need to run this project unless you’re contributing to the Marzipan website itself — but if you want to:

```bash
pnpm install
pnpm dev
```

---

## 📄 Documentation Source

Documentation content is stored in the [`marzipan-docs`](https://github.com/SanguineEpoch/marzipan-docs) repo and loaded dynamically via `ofetch`.

Markdown files in that repo map directly to the site's `/docs/...` routes.

---

## 📊 Analytics (PostHog)

This site uses [PostHog](https://posthog.com) to track basic anonymous usage in production — like which sections are visited or how often docs are viewed.

- No personal data is collected
- Analytics are disabled in development
- PostHog config is controlled via `.env`:

```env
VITE_POSTHOG_KEY=your-key-here
VITE_POSTHOG_HOST=https://app.posthog.com
```

---

## 🤝 Contributing

This site is still evolving, just like the language it supports.

We're looking for contributors who care about:

- Developer experience and clear communication
- Language design and runtime tooling
- Docs and onboarding
- Runtime architecture or progressive compilation

Start by checking out [the roadmap](https://marzipanlang.com/roadmap) or [contribution guide](https://marzipanlang.com/contribute).

---

## 📜 License

This website is licensed under MIT. However Marzipan is licensed differently.
