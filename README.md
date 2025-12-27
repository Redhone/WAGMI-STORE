# 🛍️ WAGMI-STORE

A simple, modern **ecommerce frontend** built with **React + Vite**, styled using **Tailwind CSS**, animated with **GSAP**, and using **Web3Forms** as a **temporary email-based order handler**.

This project is designed as a **frontend-first MVP**, ready to be connected to a real backend later.

---

## ✨ Features

- ⚛️ React + Vite (fast development & builds)
- 🎨 Tailwind CSS (responsive, mobile-first UI)
- 🎬 GSAP animations (hero, navbar, interactions)
- 🛒 Product listing & product detail pages
- 🎨 Product variants (size, color)
- 🔢 Quantity selection
- 📦 Checkout flow
- 📧 Order submission via **Web3Forms** (temporary)
- 🚚 Payment on delivery (COD)
- 📱 Fully responsive (mobile & desktop)
- 🚀 Deployment-ready (GitHub + Vercel)

---

## 🧱 Tech Stack

| Layer | Technology |
|-----|-----------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Animations | GSAP |
| Icons | Lucide React |
| Routing | React Router (pages only) |
| Order Handling | Web3Forms (temporary) |
| Deployment | Vercel |

---

## 📂 Project Structure

```txt
src/
│
├── assets/            # Images, logo, product images
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── VariantSelector.jsx
│   ├── Socials.jsx
│
├── pages/             # App pages
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── Checkout.jsx
│   ├── About.jsx
│   ├── Success.jsx
│
├── data/
│   └── products.js    # Static product data (temporary)
│
├── App.jsx
├── main.jsx
└── index.css

