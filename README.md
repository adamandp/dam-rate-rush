# 📦 RateRush

**RateRush** is a high-performance logistics aggregator designed to simplify shipping across Indonesia. Built with **Nuxt 4** and **Vue 3**, it enables users to instantly compare shipping rates from 15+ couriers with transparent pricing and real-time data.

🔗 **Live Demo**
[https://dam-rate-rush.vercel.app/](https://dam-rate-rush.vercel.app/)

💻 **Source Code**
[https://github.com/adamandp/dam-rate-rush](https://github.com/adamandp/dam-rate-rush)

---

## ✨ Features

- ⚡ **Instant Rate Comparison**
  Compare shipping costs across multiple couriers (JNE, J&T, SiCepat, etc.) in milliseconds

- 📦 **Real-Time Tracking**
  Track shipment status with live updates and visual indicators

- 🧠 **Smart Logistics Aggregator**
  Unified platform for comparing Regular, Express, and Cargo services

- 💸 **Transparent Pricing**
  No hidden fees — direct API integration ensures accurate pricing

- 🎨 **Modern UI**
  Glassmorphic dark interface powered by Tailwind CSS 4 and Nuxt UI

- 📱 **Responsive & Accessible**
  Optimized for all screen sizes with smooth animations

---

## 🛠 Tech Stack

### Core

- **Nuxt 4** (Vue 3, Vite)

### Data & State

- **TanStack Vue Query v5**
- **Axios**

### UI & Styling

- **Nuxt UI**
- **shadcn-nuxt**
- **Reka UI** (headless components)
- **Tailwind CSS 4**
- **Class Variance Authority (CVA)**

### Utilities

- **VueUse**
- **Lodash**

### Icons

- **Lucide Vue**
- **Iconify (Simple Icons)**

### Type Safety

- **TypeScript**
- **vue-tsc**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm v10+

---

### Installation

```bash
# Clone repository
git clone https://github.com/adamandp/dam-rate-rush.git

# Navigate to project
cd dam-rate-rush

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🐳 Docker Support

Run the app in a containerized environment:

```bash
# Build image
docker build -t dam-rate-rush .

# Run container
docker run -p 3000:3000 dam-rate-rush
```

---

## 📂 Project Structure

```
app/
├── assets/        # Global styles, fonts, and static assets
├── components/    # Reusable Vue components (atomic structure)
├── lib/           # Utilities, API configs, and shared logic
├── pages/         # File-based routing (Nuxt)
└── plugins/       # Nuxt plugins (Query client, global setup)
```

---

# 📄 CONTRIBUTING.md

## Contributor & Development Standards

Welcome to the **RateRush** repository.
To maintain code quality, scalability, and performance, please follow the guidelines below.

---

## 🛠 Coding Standards

### 1. Vue & Nuxt Best Practices

- Use **Composition API** with `<script setup>`
- Leverage Nuxt auto-imports, but ensure types are properly generated
- Use **Vue Query** for server state (API fetching & caching)
- Use **VueUse** for browser and reactive utilities

---

### 2. Styling (Tailwind CSS 4)

- Follow Tailwind v4 conventions
- Avoid hardcoded values — use design tokens
- Use **CVA (Class Variance Authority)** for component variants

---

### 3. Type Safety

- Strictly type all props and emits
- Centralize shared types in `/types`
- Validate API response structures consistently

---

## 🌿 Git Workflow

### Conventional Commits

We follow the **Conventional Commits** standard:

```
feat: add J&T Express API integration
fix: correct shipping weight calculation logic
refactor: improve hero section animation
```

---

## 🚀 Submission Process

1. Fork the repository
2. Create a feature branch
3. Ensure code quality:

   ```bash
   pnpm lint
   pnpm typecheck
   ```

4. Submit a Pull Request with:
   - Clear description
   - Screenshots (if UI-related)
   - Context of changes
