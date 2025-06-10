# Dynamic Insurance Form App

This project is a dynamic, schema-driven insurance quote form engine built with **Next.js**, **React JSONSchema Form (RJSF)**, and **Chakra UI**. It supports customized forms for different insurance companies, with support for A/B testing, multistep flows, and reusable schema logic.

---

## 🚀 What It Solves

Maintaining full copies of forms per company or test variant creates redundancy and complexity. This project solves that by:

- Using a **base schema** shared across companies
- Applying **lightweight overrides** for variants
- Allowing flexible **UI configurations per brand**
- Supporting **multistep forms** per company

---

## ✨ Features

- 🔧 Dynamic forms rendered from JSON Schema
- 🧪 A/B test variants using schema overrides
- 🧩 Modular schema structure (base + overrides)
- 🎨 Company-specific UI configurations
- 🧭 Multi-step form support with Chakra UI Stepper

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React JSONSchema Form](https://github.com/rjsf-team/react-jsonschema-form)
- [Chakra UI](https://chakra-ui.com/)
- TypeScript

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yazanalmousa/dynamic-form-generator.git
cd dynamic-form-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

### 4. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing a Form Variant

- Go to `/pages/securelife?variant=A` for Variant A
- Go to `/pages/horizon?variant=B` for Variant B

Each company gets its own layout and flow, but all data maps to the same backend structure.

---

## 📂 Project Structure

```bash
/src
  /schemas           → base schemas and overrides
  /schemas/uiSchemas → UI layout per company/variant
  /forms             → merging logic and step configs
  /components        → form renderer, multi-step wrapper, etc.
  /config            → company branding and options
  /app/pages         → route structure for form viewing
```

---

## 📦 Future Improvements

- Backend integration (submission handling)
- Analytics for form drop-off
- Admin UI to configure schemas visually

---

## 📄 License

Assignement Material for Logatta/Crosure.
