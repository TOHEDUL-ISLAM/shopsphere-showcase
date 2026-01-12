# Product Requirements Document (PRD)

## AURUM.com — Multi-Vendor E-Commerce Homepage

---

## 1. Executive Summary

AURUM.com is a **frontend-only prototype** for a multi-vendor e-commerce platform targeting South Asian users. This PRD covers the complete frontend implementation using modern React technologies with mock data simulation—no backend required. The prototype demonstrates the full user experience including local payment UI flows and culturally relevant product curation.

**Scope:** Frontend application only. All data is generated client-side using faker.js with persistent mock data stores.

---

## 2. Product Vision & Goals

**Vision:** Deliver a polished, production-ready frontend prototype that demonstrates the complete shopping experience for South Asian consumers.

**Primary Goals (Frontend Prototype):**
- Build a fully functional UI with all interactive components
- Implement realistic mock data simulation using faker.js
- Support dark/light theme switching with seamless transitions
- Demonstrate COD, bKash, Nagad, and card payment UI flows (mock)
- Achieve Lighthouse performance score > 90

---

## 3. Target Audience

South Asian users, mainly in English-speaking Bangladesh.

---

## 4. Design System Philosophy

### 4.1 Core Design Principles

This design system follows **conversion-optimized Asian e-commerce standards** inspired by platforms like Daraz, Lazada, Shopee, and AliExpress—proven to drive fast purchasing decisions.

| Principle | Implementation | Psychology |
|-----------|----------------|------------|
| **Visual Density** | Information-rich layouts with multiple CTAs | Asian consumers prefer seeing more options at once |
| **Urgency Triggers** | Countdown timers, stock indicators, sale badges | Fear of Missing Out (FOMO) drives impulse purchases |
| **Social Proof** | Ratings, reviews, "X sold" counters | Trust through crowd validation |
| **Price Anchoring** | Always show original vs sale price | Perceived value amplification |
| **Trust Signals** | Verified badges, secure payment icons, warranty info | Reduces purchase anxiety |
| **Color Psychology** | Red/orange for deals, green for trust, gold for premium | Emotional triggers aligned with culture |

### 4.2 Color Philosophy — "Warm Trust with Urgency"

**Design Intent:** Create a warm, trustworthy foundation with strategic pops of urgency colors that trigger purchasing behavior without feeling cheap or spammy.

#### Primary Palette (Trust & Warmth)

| Token | Light Mode HSL | Dark Mode HSL | Hex (Light) | Purpose |
|-------|----------------|---------------|-------------|---------|
| `--background` | 40 20% 98% | 40 10% 8% | #FAF9F7 | Warm off-white foundation |
| `--foreground` | 40 15% 12% | 40 10% 95% | #1F1D1A | Rich warm black for text |
| `--card` | 0 0% 100% | 40 8% 12% | #FFFFFF | Pure white cards for contrast |
| `--card-foreground` | 40 15% 12% | 40 10% 92% | #1F1D1A | Card text |
| `--muted` | 40 15% 95% | 40 8% 15% | #F5F3F0 | Subtle backgrounds |
| `--muted-foreground` | 40 10% 45% | 40 10% 60% | #736F69 | Secondary text |
| `--border` | 40 15% 88% | 40 8% 22% | #E5E1DB | Warm borders |

#### Action Colors (Conversion Triggers)

| Token | Value | Hex | Psychology & Usage |
|-------|-------|-----|-------------------|
| `--primary` | 38 92% 50% | #F59E0B | **Amber/Gold** — Premium feel, trust, "Buy Now" buttons |
| `--primary-foreground` | 40 15% 8% | #1A1816 | Dark text on primary |
| `--accent` | 0 84% 60% | #EF4444 | **Urgency Red** — Flash deals, discounts, timers |
| `--accent-foreground` | 0 0% 100% | #FFFFFF | White text on red |
| `--success` | 142 71% 45% | #22C55E | **Trust Green** — In stock, verified, free shipping |
| `--success-foreground` | 0 0% 100% | #FFFFFF | White text on green |
| `--warning` | 38 92% 50% | #F59E0B | **Alert Amber** — Low stock warnings |
| `--destructive` | 0 84% 50% | #DC2626 | Error states, out of stock |

#### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-gold` | 45 93% 47% | #EAB308 | Premium badges, "AURUM Choice" |
| `--brand-orange` | 25 95% 53% | #F97316 | Price display, sale tags |
| `--brand-green` | 142 76% 36% | #16A34A | Trust indicators, verified sellers |

---

## 5. Typography System

### 5.1 Font Stack

| Role | Font Family | Fallback | Reason |
|------|-------------|----------|--------|
| **Display/Headings** | Playfair Display | Georgia, serif | Luxury, premium feel for AURUM brand |
| **Body/UI** | Inter | system-ui, sans-serif | Excellent readability, professional |
| **Numbers/Prices** | Inter Tight | Inter, sans-serif | Compact, clear price display |

### 5.2 Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-hero` | 48px / 3rem | 1.1 | 700 | Hero headlines |
| `text-display` | 36px / 2.25rem | 1.2 | 700 | Section titles |
| `text-heading` | 24px / 1.5rem | 1.3 | 600 | Card titles, modals |
| `text-subheading` | 18px / 1.125rem | 1.4 | 600 | Subsection headers |
| `text-body` | 16px / 1rem | 1.5 | 400 | Body text, descriptions |
| `text-small` | 14px / 0.875rem | 1.4 | 400 | Product titles, UI labels |
| `text-caption` | 12px / 0.75rem | 1.3 | 500 | Badges, timestamps, meta |
| `text-price` | 20px / 1.25rem | 1.2 | 700 | Current price (bold, orange) |
| `text-price-original` | 14px / 0.875rem | 1.2 | 400 | Strikethrough original price |

### 5.3 Typography Rules

| Context | Style | Color Token |
|---------|-------|-------------|
| Page titles | Playfair Display, 36-48px, Bold | `text-foreground` |
| Section headers | Inter, 24px, Semibold + ALL CAPS for tags | `text-foreground` |
| Product titles | Inter, 14px, Medium, max 2 lines | `text-foreground` |
| Current prices | Inter Tight, 20px, Bold | `text-brand-orange` |
| Original prices | Inter, 14px, Regular, line-through | `text-muted-foreground` |
| Discount badges | Inter, 12px, Bold, ALL CAPS | `text-accent-foreground` on `bg-accent` |
| CTAs/Buttons | Inter, 14-16px, Semibold | Based on button variant |
| Meta/Captions | Inter, 12px, Medium | `text-muted-foreground` |

---

## 6. Conversion Psychology & Mind Games

### 6.1 Urgency & Scarcity Triggers

| Technique | Implementation | Psychology |
|-----------|----------------|------------|
| **Countdown Timers** | Red animated timer on flash deals: "Ends in 02:34:56" | Creates panic, fear of missing out |
| **Stock Scarcity** | "Only 3 left!" in orange/red below price | Scarcity principle — limited = valuable |
| **Sold Counter** | "1,234 sold" near rating | Social proof — others bought, so should you |
| **Live Activity** | "12 people viewing this" | Competition anxiety |
| **Sale Ending Soon** | "Sale ends today!" banner | Deadline pressure |

### 6.2 Price Psychology

| Technique | Implementation | Psychology |
|-----------|----------------|------------|
| **Price Anchoring** | Always show ~~৳999~~ → ৳499 format | Original price makes discount feel huge |
| **Charm Pricing** | End prices in 9 or 99 (৳299, ৳1,999) | Perceived as significantly cheaper |
| **Percentage Display** | "-50% OFF" badge in red | Percentage feels bigger than absolute |
| **Savings Callout** | "You save ৳500!" in green | Positive reinforcement |
| **Bundle Savings** | "Buy 2, Get 10% OFF" | Increases cart value |

### 6.3 Trust Building

| Technique | Implementation | Psychology |
|-----------|----------------|------------|
| **Verified Badges** | ✓ checkmark with "Verified Seller" | Authority signal |
| **AURUM Choice** | Gold badge for curated products | Platform endorsement |
| **Rating Stars** | Yellow stars ★★★★☆ (4.2) with count | Social proof, quality indicator |
| **Review Snippets** | "Great quality!" — Verified Buyer | Testimonial evidence |
| **Secure Checkout** | Lock icon + "SSL Secured" | Reduces payment anxiety |
| **Money-Back Guarantee** | "7-Day Easy Return" badge | Risk reversal |
| **Free Shipping** | Green "FREE SHIPPING" badge | Removes friction |

### 6.4 Visual Hierarchy for Conversion

| Priority | Element | Visual Treatment |
|----------|---------|------------------|
| 1️⃣ Highest | Product Image | Large, high-quality, hover zoom |
| 2️⃣ High | Current Price | Bold, 20px, bright orange |
| 3️⃣ High | Discount Badge | Red background, white text, top-left |
| 4️⃣ Medium | Original Price | Strikethrough, muted gray |
| 5️⃣ Medium | Add to Cart CTA | Primary amber button, prominent |
| 6️⃣ Medium | Rating & Reviews | Yellow stars, review count |
| 7️⃣ Lower | Product Title | Clean, 2-line max |
| 8️⃣ Lower | Shipping Info | Small green text |

---

## 7. Component Design Specifications

### 7.1 Product Card Design

```
┌─────────────────────────────────────┐
│ ┌───────────────────────────────┐   │
│ │ -50%                     [♡]  │   │  ← Red badge top-left, Heart top-right
│ │                               │   │
│ │         [PRODUCT              │   │
│ │          IMAGE]               │   │  ← 1:1 ratio, lazy-loaded, hover zoom
│ │                               │   │
│ │     ════════════════          │   │  ← Progress bar: "67% claimed"
│ └───────────────────────────────┘   │
│                                     │
│ ⭐ AURUM Choice                     │  ← Gold badge if applicable
│                                     │
│ Product Title Goes Here             │
│ Maximum Two Lines Only...           │  ← 14px, medium weight, 2-line clamp
│                                     │
│ ★★★★☆ 4.2 (1,234)                  │  ← Yellow stars + count
│                                     │
│ ৳499  ~~৳999~~  -50%               │  ← Orange price, gray strikethrough
│                                     │
│ 🚚 Free Shipping                    │  ← Green if free
│                                     │
│ ┌─────────────────────────────────┐ │
│ │        🛒 Add to Cart           │ │  ← Primary amber button
│ └─────────────────────────────────┘ │
│ Only 3 left! • 567 sold            │  ← Urgency + social proof
└─────────────────────────────────────┘
```

#### Card Specifications

| Element | Specification |
|---------|---------------|
| Card Size | 240px width (desktop), fluid on mobile |
| Image Ratio | 1:1 square |
| Border Radius | 12px (rounded-xl) |
| Shadow (default) | 0 1px 3px rgba(0,0,0,0.08) |
| Shadow (hover) | 0 8px 25px rgba(0,0,0,0.12) |
| Hover Transform | translateY(-4px), scale(1.02) |
| Padding | 12px |
| Gap between elements | 8px |

#### Badges

| Badge Type | Background | Text | Position |
|------------|------------|------|----------|
| Discount % | `bg-accent` (red) | White, 12px bold | Top-left overlay |
| NEW | `bg-success` (green) | White | Top-left (if no discount) |
| AURUM Choice | `bg-brand-gold` | Dark | Below image |
| Free Shipping | Transparent | Green text | Below price |
| Low Stock | Transparent | Orange/red text | Bottom |

### 7.2 Button System

| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| **Primary** | `bg-primary` (amber) | Dark | None | Add to Cart, Buy Now |
| **Secondary** | `bg-secondary` | Dark | None | View Details, filters |
| **Outline** | Transparent | Primary | `border-primary` | Secondary actions |
| **Ghost** | Transparent | Muted | None | Icon buttons, links |
| **Destructive** | `bg-destructive` | White | None | Remove, delete |
| **Success** | `bg-success` | White | None | Checkout, confirm |

#### Button States

| State | Transform |
|-------|-----------|
| Default | — |
| Hover | brightness(1.05), shadow-md |
| Active | scale(0.98) |
| Disabled | opacity(0.5), cursor-not-allowed |
| Loading | Spinner icon, disabled |

### 7.3 Flash Deal Timer

```
┌────────────────────────────────────────────────────┐
│  🔥 FLASH DEALS          ⏰ Ends in: 02:34:56     │
│     ════════════════════════════════════════       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ 02   │:│ 34   │:│ 56   │                        │
│  │HOURS │ │ MIN  │ │ SEC  │                        │
│  └──────┘ └──────┘ └──────┘                        │
└────────────────────────────────────────────────────┘
```

| Element | Style |
|---------|-------|
| Timer Background | `bg-accent/10` (light red) |
| Timer Numbers | `text-accent`, 24px, bold, monospace |
| Timer Labels | `text-muted-foreground`, 10px, uppercase |
| Pulsing Animation | Scale 1.0 → 1.05 every second on seconds |

### 7.4 Rating Display

| Stars | Color | Size |
|-------|-------|------|
| Filled | `text-yellow-400` (#FACC15) | 14px |
| Empty | `text-muted` | 14px |
| Half | Gradient mask | 14px |

Format: `★★★★☆ 4.2 (1,234 reviews)`

### 7.5 Price Block

```jsx
<div className="price-block">
  <span className="text-price text-brand-orange font-bold">৳499</span>
  <span className="text-price-original text-muted-foreground line-through ml-2">৳999</span>
  <span className="discount-badge bg-accent text-white text-xs px-2 py-0.5 rounded ml-2">-50%</span>
</div>
<div className="savings text-success text-sm">
  You save ৳500!
</div>
```

---

## 8. Animation & Micro-interactions

### 8.1 Core Animations

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Page fade-in | 300ms | ease-out | Route change |
| Card entrance | 400ms staggered | ease-out | Scroll into view |
| Card hover lift | 200ms | ease-out | Mouse enter |
| Modal open | 300ms | spring | Click trigger |
| Button press | 100ms | ease-in-out | Click |
| Toast slide-in | 300ms | spring | Notification |
| Skeleton shimmer | 1.5s loop | linear | Loading |

### 8.2 Scroll Animations

| Element | Animation | Delay |
|---------|-----------|-------|
| Section headers | Fade up + slide | 0ms |
| Product cards | Fade up + scale | 50ms × index |
| Category icons | Pop in | 30ms × index |
| Deal cards | Slide from right | 100ms × index |

### 8.3 Hover Effects

| Element | Effect |
|---------|--------|
| Product card | translateY(-4px) + shadow increase |
| Product image | Scale(1.05) + slight zoom |
| Buttons | Brightness(1.05) + subtle shadow |
| Links | Color transition + underline slide |
| Wishlist heart | Scale(1.2) + color fill |

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Products/Row | Card Width |
|------------|-------|--------------|------------|
| Mobile | 320-639px | 2 | 48% |
| Tablet | 640-1023px | 3 | 31% |
| Desktop | 1024-1279px | 4 | 24% |
| Large Desktop | 1280px+ | 5 | 240px |

### 9.1 Mobile-First Considerations

| Aspect | Mobile | Desktop |
|--------|--------|---------|
| Navigation | Bottom sheet menu | Mega menu dropdown |
| Filters | Full-screen modal | Sticky sidebar |
| Product card | Compact, essential info | Full info + hover states |
| Carousel | Swipe gestures | Arrows + auto-play |
| Search | Full-screen overlay | Inline with dropdown |

---

## 10. Section-by-Section Design

### 10.1 Header/Navbar

| Element | Desktop | Mobile |
|---------|---------|--------|
| Logo | Left, 120px width | Center, 100px |
| Search | Center, 400px width | Icon → full-screen |
| Icons | Right: Theme, Wishlist, User, Cart | Right: condensed |
| Nav Links | Horizontal menu | Hamburger → drawer |

### 10.2 Hero Section

| Attribute | Specification |
|-----------|---------------|
| Height | 500px desktop, 300px mobile |
| Type | Full-width promotional carousel |
| Auto-rotate | 5 seconds |
| Content | Deal banners, category highlights |
| CTA | "Shop Now" button, primary amber |

### 10.3 Flash Deals Section

| Element | Specification |
|---------|---------------|
| Header | "🔥 Flash Deals" + countdown timer |
| Layout | Horizontal scroll, 6 cards visible |
| Timer | Red countdown, pulsing seconds |
| Cards | Compact, discount-focused |
| Progress bar | "67% claimed" on each card |

### 10.4 Categories Section

| Element | Specification |
|---------|---------------|
| Layout | 8 icons per row (grid) |
| Icon size | 64px |
| Hover | Scale(1.1) + shadow |
| Label | Below icon, 12px |

### 10.5 Product Grid

| Element | Specification |
|---------|---------------|
| Layout | 5-column grid (desktop) |
| Infinite scroll | Load 20 more on scroll |
| Skeleton | Shimmer animation while loading |
| Empty state | Illustrated message |

### 10.6 Footer

| Section | Content |
|---------|---------|
| Newsletter | Email input + subscribe CTA |
| Trust badges | COD, Returns, Secure, Nationwide |
| Links | 5 columns of navigation |
| Social | Facebook, Instagram, YouTube, WhatsApp |
| Payment icons | bKash, Nagad, Visa, Mastercard, COD |
| Copyright | "© 2026 AURUM.com" |

---

## 11. Shadow & Elevation System

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle elements |
| `shadow-card` | 0 1px 3px rgba(0,0,0,0.08) | Default cards |
| `shadow-card-hover` | 0 8px 25px rgba(0,0,0,0.12) | Hovered cards |
| `shadow-dropdown` | 0 10px 40px rgba(0,0,0,0.15) | Dropdowns, modals |
| `shadow-modal` | 0 25px 50px rgba(0,0,0,0.25) | Modal overlays |

---

## 12. Border Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small badges |
| `rounded` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Cards |
| `rounded-xl` | 12px | Large cards, modals |
| `rounded-2xl` | 16px | Hero sections |
| `rounded-full` | 9999px | Avatars, pills |

---

## 13. Icon Usage

Using **Lucide React** icons consistently:

| Context | Icon | Size | Color |
|---------|------|------|-------|
| Cart | ShoppingCart | 24px | foreground |
| Wishlist | Heart | 20px | muted → accent when active |
| Search | Search | 20px | muted-foreground |
| User | User | 20px | foreground |
| Theme Light | Sun | 18px | foreground |
| Theme Dark | Moon | 18px | foreground |
| Rating | Star | 14px | yellow-400 |
| Shipping | Truck | 14px | success |
| Verified | BadgeCheck | 14px | success |
| Timer | Clock | 16px | accent |
| Fire/Hot | Flame | 16px | accent |

---

## 14. Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | Minimum 4.5:1 for text |
| Focus states | Visible ring (2px primary) |
| Keyboard nav | Full tab support |
| Screen readers | ARIA labels on all interactives |
| Motion | Respect prefers-reduced-motion |
| Touch targets | Minimum 44px × 44px |

---

## 15. Dark Mode Adjustments

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | Warm off-white | Deep charcoal |
| Cards | Pure white | Dark gray |
| Prices | Orange | Slightly brighter orange |
| Discounts | Red | Slightly muted red |
| Success | Green | Slightly brighter green |
| Borders | Visible gray | Subtle dark gray |
| Shadows | Soft gray | Near-invisible |

---

## Appendix A: Quick Reference Tokens

### Color Tokens (Copy-Paste Ready)

```css
:root {
  /* Backgrounds */
  --background: 40 20% 98%;
  --foreground: 40 15% 12%;
  --card: 0 0% 100%;
  --card-foreground: 40 15% 12%;
  --muted: 40 15% 95%;
  --muted-foreground: 40 10% 45%;
  --border: 40 15% 88%;
  
  /* Actions */
  --primary: 38 92% 50%;
  --primary-foreground: 40 15% 8%;
  --accent: 0 84% 60%;
  --accent-foreground: 0 0% 100%;
  --success: 142 71% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --destructive: 0 84% 50%;
  
  /* Brand */
  --brand-gold: 45 93% 47%;
  --brand-orange: 25 95% 53%;
  --brand-green: 142 76% 36%;
  
  /* Utility */
  --ring: 38 92% 50%;
  --radius: 0.75rem;
}

.dark {
  --background: 40 10% 8%;
  --foreground: 40 10% 95%;
  --card: 40 8% 12%;
  --card-foreground: 40 10% 92%;
  --muted: 40 8% 15%;
  --muted-foreground: 40 10% 60%;
  --border: 40 8% 22%;
  --primary: 38 92% 55%;
  --accent: 0 84% 55%;
  --success: 142 71% 50%;
}
```

---

*End of Design PRD — Version 2.0*
*Focus: Asian E-Commerce Conversion Optimization*
