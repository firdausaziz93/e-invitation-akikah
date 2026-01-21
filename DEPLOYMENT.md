# 🚀 Panduan Deployment Ringkas

## Kaedah 1: Deploy ke Vercel (RECOMMENDED)

Vercel adalah pilihan terbaik untuk WhatsApp preview kerana support automatic untuk Open Graph tags.

### Via Vercel Website (Paling Mudah)

1. **Pergi ke [vercel.com](https://vercel.com)**

2. **Sign up / Login** (gunakan GitHub account)

3. **Klik "Add New Project"**

4. **Import Git Repository**
   - Connect GitHub account anda
   - Pilih repository `E-invitation-akikah`
   - Klik "Import"

5. **Configure Project** (Vercel akan auto-detect)
   - Framework Preset: **Create React App**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Klik **"Deploy"**

6. **Tunggu 2-3 minit** sehingga deployment selesai

7. **Dapatkan URL anda** (contoh: `https://your-project.vercel.app`)

8. **UPDATE META TAG** (PENTING!)
   - Buka `public/index.html`
   - Cari line:
     ```html
     <meta property="og:url" content="https://your-domain.vercel.app" />
     ```
   - Replace dengan URL Vercel anda yang sebenar
   - Commit dan push ke GitHub
   - Vercel akan auto-deploy semula

✅ **SIAP!** URL anda boleh dikongsi di WhatsApp dengan preview.

---

### Via Vercel CLI (Alternative)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy (dari folder projek)
vercel

# 4. Production deploy
vercel --prod
```

---

## Kaedah 2: Deploy ke Netlify

### Via Netlify Website

1. **Pergi ke [netlify.com](https://netlify.com)**

2. **Sign up / Login**

3. **Klik "Add new site" → "Import an existing project"**

4. **Connect Git Provider**
   - Pilih GitHub
   - Authorize Netlify
   - Pilih repository `E-invitation-akikah`

5. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Klik **"Deploy site"**

6. **Tunggu deployment selesai**

7. **Dapatkan URL** (contoh: `https://your-site.netlify.app`)

8. **UPDATE META TAG** seperti di Vercel (step 8)

---

### Via Netlify CLI

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Build projek
npm run build

# 4. Deploy
netlify deploy --prod --dir=build
```

---

## Kaedah 3: Deploy ke GitHub Pages

### Setup GitHub Pages

1. **Install gh-pages package**
```bash
npm install --save-dev gh-pages
```

2. **Tambah homepage di `package.json`**
```json
{
  "homepage": "https://your-username.github.io/E-invitation-akikah",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Pergi ke Settings → Pages
   - Source: gh-pages branch
   - Save

⚠️ **NOTA**: GitHub Pages mungkin lambat untuk update meta tags. Vercel/Netlify lebih baik untuk WhatsApp preview.

---

## 📋 Post-Deployment Checklist

Selepas deploy, pastikan:

### ✅ Update Meta Tags
```html
<!-- public/index.html -->
<meta property="og:url" content="https://YOUR-ACTUAL-URL.vercel.app" />
<meta property="og:image" content="https://YOUR-IMAGE-URL.jpg" />
```

### ✅ Test WhatsApp Preview

1. **Facebook Debugger** (test preview):
   - [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
   - Paste URL anda
   - Klik "Fetch new scrape information"
   - Pastikan image dan text muncul dengan betul

2. **WhatsApp Direct Test**:
   - Hantar URL ke WhatsApp (test group atau personal)
   - Link preview patut muncul automatic
   - Pastikan title, description, dan image betul

### ✅ Test Functionality

- [ ] Laman load dengan cepat
- [ ] Animasi berfungsi smooth
- [ ] Butang WhatsApp share berfungsi
- [ ] Responsive di mobile, tablet, desktop
- [ ] Semua maklumat betul (tarikh, masa, lokasi)
- [ ] Ejaan dan grammar correct

---

## 🔧 Custom Domain (Optional)

### Vercel Custom Domain

1. Pergi ke Project Settings → Domains
2. Klik "Add"
3. Masukkan domain anda (contoh: `akikah.yourdomain.com`)
4. Follow DNS setup instructions
5. Update meta tag `og:url` dengan domain baru

### Netlify Custom Domain

1. Pergi ke Site Settings → Domain Management
2. Klik "Add custom domain"
3. Masukkan domain anda
4. Configure DNS (Netlify akan beri instructions)
5. Update meta tag `og:url`

---

## 🆘 Troubleshooting

### Preview tidak muncul di WhatsApp
```bash
# 1. Clear WhatsApp cache (dalam phone)
# 2. Use Facebook Debugger untuk force refresh
# 3. Pastikan image URL adalah absolute URL (https://)
# 4. Tunggu 24 jam (WhatsApp cache lambat)
```

### Build error
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Image tidak load
```bash
# Pastikan image URL correct dan accessible
# Test image URL dalam browser
# Use HTTPS, bukan HTTP
```

---

## 💡 Tips

1. **Vercel > Netlify > GitHub Pages** untuk WhatsApp preview
2. Gunakan **HTTPS** untuk semua URLs (image, site)
3. Test pada **actual devices** (iPhone, Android)
4. Compress image untuk faster loading
5. Monitor analytics (optional: Google Analytics)

---

## 📞 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- React Docs: [reactjs.org](https://reactjs.org)

---

**Selamat Mencuba! Barakallahu lakum!** 🎉
