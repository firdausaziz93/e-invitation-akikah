# Penerangan Komponen & Kod

## 📋 Ringkasan Struktur Kod

Dokumen ini menerangkan setiap bahagian utama kod dalam aplikasi E-Invitation Majlis Akikah.

---

## 🧩 Komponen React (App.js)

### 1. Import & Setup
```javascript
import React, { useEffect } from 'react';
import './App.css';
```
- Import React dan hook `useEffect` untuk side effects
- Import CSS untuk styling

### 2. Fade-in Animation Effect
```javascript
useEffect(() => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
}, []);
```
**Fungsi:**
- Dijalankan selepas component di-mount
- Cari semua element dengan class `fade-in`
- Tambah class `visible` secara berperingkat (200ms delay antara setiap element)
- Ini mencipta animasi masuk yang smooth dan berturutan

### 3. WhatsApp Share Function
```javascript
const shareToWhatsApp = () => {
  const message = encodeURIComponent(
    'Assalamualaikum! Anda dijemput ke Majlis Akikah anak-anak kami.\n\n' +
    'Sila klik pautan ini untuk maklumat lanjut:\n' +
    window.location.href
  );
  const whatsappUrl = `https://wa.me/?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
```
**Fungsi:**
- Cipta mesej pre-filled untuk WhatsApp
- `encodeURIComponent()` encode mesej untuk URL
- `window.location.href` dapatkan URL semasa
- Buka WhatsApp dengan mesej yang sudah sedia
- `_blank` buka dalam tab/window baru

### 4. JSX Structure

#### Header Section (Pembukaan)
```javascript
<header className="header fade-in">
  <div className="bismillah">
    <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
    <p className="translation">...</p>
  </div>
  ...
</header>
```
- Menggunakan `fade-in` class untuk animasi
- Bismillah dalam Arab dan terjemahan
- Ucapan alu-aluan formal

#### Children Cards (Nama Anak-anak)
```javascript
<div className="children-cards">
  <div className="child-card">
    <div className="child-name">Yusuf</div>
    <div className="child-parents">Putera kepada Firdaus & Suha</div>
  </div>
  ...
</div>
```
- Grid layout untuk kad anak-anak
- Setiap kad boleh di-hover untuk effect
- Mudah ditambah atau dikurangkan

#### Event Details (Maklumat Majlis)
```javascript
<div className="details-grid">
  <div className="detail-item">
    <div className="detail-icon">📅</div>
    <div className="detail-label">Tarikh</div>
    <div className="detail-value">...</div>
  </div>
  ...
</div>
```
- Responsive grid (1 column mobile, 2-3 columns tablet/desktop)
- Icon untuk visual clarity
- Structured information

---

## 🎨 CSS Styling (App.css)

### 1. CSS Variables (Custom Properties)
```css
:root {
  --primary-green: #2d6a4f;
  --light-green: #52b788;
  --cream: #fff8e7;
  --beige: #f5e6d3;
  --gold: #d4af37;
  ...
}
```
**Kelebihan:**
- Centralized color management
- Mudah tukar tema
- Consistency across aplikasi
- Maintainability tinggi

### 2. Background Pattern
```css
.background-pattern {
  position: fixed;
  background-image: 
    repeating-linear-gradient(45deg, ...),
    repeating-linear-gradient(-45deg, ...);
  opacity: 0.03;
}
```
**Fungsi:**
- Cipta corak geometri Islamik
- Fixed position - tidak scroll dengan content
- Opacity rendah (0.03) untuk subtle effect
- Double gradient untuk pattern cross-hatch

### 3. Fade-in Animation
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
**Cara Kerja:**
- Initial state: transparent dan turun 20px
- Transition: smooth animation selama 0.6s
- Final state: fully visible dan position normal
- JavaScript akan add class `visible` untuk trigger animation

### 4. Responsive Grid System
```css
/* Mobile (default) */
.children-cards {
  grid-template-columns: 1fr;
}

/* Tablet (600px+) */
@media (min-width: 600px) {
  .details-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (900px+) */
@media (min-width: 900px) {
  .children-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```
**Mobile-First Approach:**
- Default: 1 column (mobile)
- 600px+: 2 columns (tablet)
- 900px+: 3 columns (desktop)
- Progressive enhancement

### 5. Hover Effects
```css
.child-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```
**Interactive Feedback:**
- Card naik 5px ke atas
- Shadow bertambah untuk depth
- Smooth transition
- Better user experience

### 6. WhatsApp Button Styling
```css
.whatsapp-button {
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50px;
  ...
}
```
**Design:**
- WhatsApp brand colors
- Gradient untuk modern look
- Pill shape (border-radius: 50px)
- Icon + text layout dengan flexbox

---

## 🌐 Meta Tags (index.html)

### Open Graph Tags
```html
<meta property="og:title" content="Jemputan Majlis Akikah - Yusuf, Malek & Aiden" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
```

**Penjelasan Setiap Tag:**

1. **og:title**
   - Tajuk yang appear dalam link preview
   - Ringkas dan jelas

2. **og:description**
   - Penerangan yang appear di bawah tajuk
   - 2-3 ayat yang menarik

3. **og:image**
   - Imej preview (1200x630px optimum)
   - URL absolut diperlukan
   - Format: JPG atau PNG

4. **og:url**
   - URL sebenar laman web anda
   - PENTING: Update selepas deploy!

5. **og:type**
   - Jenis content (website, article, etc.)
   - "website" untuk invitation

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```
- **Amiri**: Font Arab yang cantik untuk bismillah dan nama
- **Poppins**: Font moden untuk body text
- `display=swap`: Prevent invisible text while loading

---

## 🚀 Performance Optimizations

### 1. CSS Loading
- Inline critical CSS (optional)
- External stylesheet untuk caching

### 2. Font Loading
- Preconnect ke Google Fonts
- `display=swap` untuk faster rendering

### 3. Animation Performance
- Gunakan `transform` dan `opacity` (GPU-accelerated)
- Avoid animating properties like `width`, `height`, `margin`

### 4. Image Optimization
- Compress images sebelum upload
- Use WebP format jika possible
- Lazy loading untuk images (jika banyak)

---

## 🔧 Customization Guide

### Tukar Nama & Maklumat

**Lokasi dalam kod:** `src/App.js`

```javascript
// Line ~85-100
<div className="child-card">
  <div className="child-name">NAMA_ANAK</div>
  <div className="child-parents">Putera kepada NAMA_IBU_BAPA</div>
</div>
```

### Tukar Tarikh & Masa

**Lokasi dalam kod:** `src/App.js`

```javascript
// Line ~115-125
<div className="detail-value">Ahad, 15 Februari 2026</div>
<div className="detail-value">11:00 Pagi - 3:00 Petang</div>
```

### Tukar Warna Tema

**Lokasi dalam kod:** `src/App.css`

```css
/* Line ~10-20 */
:root {
  --primary-green: #2d6a4f;    /* Warna utama */
  --light-green: #52b788;       /* Accent color */
  --gold: #d4af37;              /* Highlight */
}
```

### Tukar WhatsApp Message

**Lokasi dalam kod:** `src/App.js`

```javascript
// Line ~20-25
const message = encodeURIComponent(
  'YOUR_CUSTOM_MESSAGE_HERE\n\n' +
  window.location.href
);
```

---

## 📱 Testing Checklist

### Before Deploy:
- ✅ Test pada mobile device (iPhone & Android)
- ✅ Test pada tablet
- ✅ Test pada desktop (Chrome, Safari, Firefox)
- ✅ Semak ejaan dan grammar
- ✅ Semak tarikh, masa, lokasi betul
- ✅ Test butang WhatsApp share

### After Deploy:
- ✅ Update `og:url` dalam `index.html`
- ✅ Test link preview di WhatsApp
- ✅ Test link preview di Facebook Debugger
- ✅ Test loading speed
- ✅ Test pada different networks (WiFi, 4G, slow 3G)

---

## 🎓 Best Practices Digunakan

1. **Semantic HTML**
   - Proper use of `<header>`, `<section>`, `<footer>`
   - Accessibility-friendly

2. **CSS Methodology**
   - BEM-inspired naming (block__element--modifier)
   - Mobile-first responsive design
   - CSS Variables untuk maintainability

3. **React Best Practices**
   - Functional components
   - Hooks untuk side effects
   - Clean component structure
   - Proper event handling

4. **Performance**
   - Minimal dependencies
   - Optimized animations
   - Efficient CSS selectors

5. **User Experience**
   - Clear call-to-action (WhatsApp button)
   - Smooth animations
   - Responsive design
   - Fast loading

---

## 🐛 Common Issues & Solutions

### Issue 1: WhatsApp preview tidak muncul
**Solution:**
1. Pastikan URL dalam `og:url` adalah URL production yang betul
2. Gunakan Facebook Debugger untuk scrape semula
3. Pastikan image URL adalah absolute (bukan relative)

### Issue 2: Animation tidak smooth
**Solution:**
1. Check browser support untuk `transform` dan `transition`
2. Reduce motion untuk users dengan preference (accessibility)

### Issue 3: Font tidak load
**Solution:**
1. Check internet connection
2. Verify Google Fonts URL
3. Add font fallbacks dalam CSS

### Issue 4: Responsive tidak berfungsi
**Solution:**
1. Ensure viewport meta tag ada dalam `index.html`
2. Test pada actual devices, bukan hanya browser devtools
3. Check media query syntax

---

## 📞 Support

Jika ada masalah atau soalan, rujuk:
1. README.md untuk panduan umum
2. Dokumen ini untuk technical details
3. React documentation: [reactjs.org](https://reactjs.org)
4. Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

**Semoga bermanfaat! Barakallahu lakum!** 🎉
