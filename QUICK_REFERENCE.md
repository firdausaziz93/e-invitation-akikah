# ⚡ Quick Reference Guide - Cheat Sheet

Panduan pantas untuk edit aplikasi E-Invitation Majlis Akikah.

---

## 📍 File Locations

| Nak Edit Apa? | File Location | Line Number |
|---------------|---------------|-------------|
| Nama anak-anak | `src/App.js` | 85-105 |
| Tarikh & Masa | `src/App.js` | 115-125 |
| Lokasi majlis | `src/App.js` | 130-138 |
| Atur cara | `src/App.js` | 145-150 |
| Warna tema | `src/App.css` | 10-20 |
| WhatsApp message | `src/App.js` | 20-26 |
| Meta tags (preview) | `public/index.html` | 8-15 |
| Font | `public/index.html` | 15-17 |
| Animation speed | `src/App.css` | 80-90 |

---

## 🎨 Color Schemes (Copy-Paste Ready)

### Hijau & Emas (Default)
```css
--primary-green: #2d6a4f;
--light-green: #52b788;
--gold: #d4af37;
```

### Biru & Perak
```css
--primary-green: #1e3a8a;
--light-green: #3b82f6;
--gold: #94a3b8;
```

### Ungu & Rose Gold
```css
--primary-green: #6b21a8;
--light-green: #a855f7;
--gold: #e9967a;
```

### Merah Maroon
```css
--primary-green: #7f1d1d;
--light-green: #dc2626;
--gold: #d4af37;
```

---

## 📝 Common Edits

### Tukar Nama Anak (src/App.js)
```jsx
<div className="child-name">NAMA_ANAK</div>
<div className="child-parents">Putera/Puteri kepada BAPA & IBU</div>
```

### Tukar Tarikh (src/App.js)
```jsx
<div className="detail-value">Ahad, 15 Februari 2026</div>
```

### Tukar Masa (src/App.js)
```jsx
<div className="detail-value">11:00 Pagi - 3:00 Petang</div>
```

### Tukar Lokasi (src/App.js)
```jsx
<div className="detail-value">
  NAMA_DEWAN<br />
  ALAMAT_BARIS_1<br />
  POSKOD BANDAR, NEGERI
</div>
```

### Update URL selepas deploy (public/index.html)
```html
<meta property="og:url" content="https://YOUR-URL.vercel.app" />
```

---

## 🚀 Commands Cheat Sheet

### Development
```bash
npm install          # Install dependencies
npm start            # Run development server (localhost:3000)
npm run build        # Build for production
npm test             # Run tests
```

### Vercel Deployment
```bash
vercel login         # Login to Vercel
vercel              # Deploy (preview)
vercel --prod       # Deploy (production)
```

### Netlify Deployment
```bash
netlify login        # Login to Netlify
netlify deploy --prod --dir=build
```

### Git Commands
```bash
git add .            # Stage changes
git commit -m "Update invitation details"
git push             # Push to GitHub
```

---

## 📱 WhatsApp Message Templates

### Formal
```javascript
'السلام عليكم ورحمة الله وبركاته\n\n' +
'Dengan segala hormatnya, kami menjemput Tuan/Puan ' +
'ke Majlis Akikah anak kami.\n\n' +
'Maklumat: ' + window.location.href
```

### Casual
```javascript
'Salam! Jemput datang Majlis Akikah anak kami 😊\n' +
'Info lengkap: ' + window.location.href
```

### With Date
```javascript
'Assalamualaikum! Anda dijemput ke Majlis Akikah ' +
'pada 15 Feb 2026.\n\n' +
'Details: ' + window.location.href
```

---

## 🖼️ Image Preview URLs (Free to Use)

### Islamic Theme
```
https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1200&h=630&fit=crop
```

### Geometric Pattern
```
https://images.unsplash.com/photo-1584286595398-a59f21d5c1f0?w=1200&h=630&fit=crop
```

### Baby/Family
```
https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=630&fit=crop
```

---

## 🎭 Font Combinations

### Default
```html
family=Amiri:wght@400;700&family=Poppins:wght@300;400;600
```

### Alternative 1
```html
family=Scheherazade+New:wght@400;700&family=Nunito:wght@300;400;600
```

### Alternative 2
```html
family=Cairo:wght@400;700&family=Raleway:wght@300;400;600
```

---

## 🔧 Troubleshooting Quick Fixes

### Preview tidak muncul?
```bash
# 1. Check og:url dalam index.html (must be actual URL)
# 2. Use Facebook Debugger: https://developers.facebook.com/tools/debug/
# 3. Wait 24 hours (WhatsApp cache)
```

### Build error?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Code tidak update?
```bash
# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
```

### WhatsApp button tidak berfungsi?
```javascript
// Check console for errors
// Ensure window.location.href is accessible
```

---

## 📊 Pre-Launch Checklist

- [ ] Semua nama betul & ejaan correct
- [ ] Tarikh & masa correct
- [ ] Lokasi correct & complete
- [ ] WhatsApp message make sense
- [ ] Meta tags updated dengan URL production
- [ ] Image preview loads correctly
- [ ] Test di mobile (iPhone & Android)
- [ ] Test di tablet
- [ ] Test di desktop
- [ ] WhatsApp share button works
- [ ] Link preview muncul di WhatsApp
- [ ] Loading speed acceptable
- [ ] No console errors

---

## 🔗 Important Links

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Google Fonts**: https://fonts.google.com
- **Unsplash (Free Images)**: https://unsplash.com
- **ImgBB (Image Hosting)**: https://imgbb.com
- **Canva (Design)**: https://canva.com

---

## 💾 Backup Reminder

Sebelum major changes:
```bash
git add .
git commit -m "Backup before changes"
git push
```

---

## 📞 Support Files

- `README.md` - Overview & getting started
- `PENERANGAN_KOD.md` - Technical explanation
- `DEPLOYMENT.md` - Deployment guides
- `CUSTOMIZATION_GUIDE.md` - Detailed customization
- **THIS FILE** - Quick reference

---

**Print atau save file ini untuk reference cepat!** 📌
