# ⚡ QUICK START - 5 Minit Setup!

Panduan super ringkas untuk start projek ini SEKARANG!

---

## 🚀 Step 1: Install (1 minit)

```bash
cd E-invitation-akikah
npm install
```

Tunggu sehingga selesai...

---

## 🎬 Step 2: Run Locally (30 saat)

```bash
npm start
```

Browser akan auto-open di `http://localhost:3000`

---

## ✏️ Step 3: Edit Maklumat (2 minit)

### Edit `src/App.js`:

**Line 89-91** - Nama anak pertama:
```jsx
<div className="child-name">NAMA_ANAK_1</div>
<div className="child-parents">Putera kepada BAPA & IBU</div>
```

**Line 95-97** - Nama anak kedua:
```jsx
<div className="child-name">NAMA_ANAK_2</div>
<div className="child-parents">Putera kepada BAPA & IBU</div>
```

**Line 101-103** - Nama anak ketiga:
```jsx
<div className="child-name">NAMA_ANAK_3</div>
<div className="child-parents">Putera kepada BAPA & IBU</div>
```

**Line 120** - Tarikh:
```jsx
<div className="detail-value">TARIKH_ANDA</div>
```

**Line 128** - Masa:
```jsx
<div className="detail-value">MASA_ANDA</div>
```

**Line 136-140** - Lokasi:
```jsx
<div className="detail-value">
  NAMA_TEMPAT<br />
  ALAMAT<br />
  POSKOD BANDAR, NEGERI
</div>
```

Save file, page akan auto-reload!

---

## 🌐 Step 4: Deploy ke Vercel (1 minit)

### Via Website (Paling Mudah):

1. Push code ke GitHub
2. Pergi ke [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. DONE! 🎉

### Via CLI (Alternative):

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📱 Step 5: Update Meta Tag (30 saat)

Selepas deploy, edit `public/index.html` line 13:

```html
<meta property="og:url" content="https://YOUR-VERCEL-URL.vercel.app" />
```

Replace dengan URL sebenar dari Vercel.

Commit & push. Vercel akan auto-deploy semula.

---

## ✅ SIAP! 

URL anda sekarang boleh share di WhatsApp dengan preview card yang cantik!

---

## 🆘 Ada Masalah?

### "npm install" error?
```bash
# Try:
rm -rf node_modules package-lock.json
npm install
```

### Page tak load?
```bash
# Make sure command masih running:
npm start
# Don't close the terminal!
```

### WhatsApp preview tak muncul?
1. Update `og:url` dalam `public/index.html`
2. Test di [Facebook Debugger](https://developers.facebook.com/tools/debug/)
3. Tunggu 24 jam (WhatsApp cache lambat)

---

## 📚 Nak Belajar Lebih?

- **[INDEX.md](INDEX.md)** - Navigation hub untuk semua docs
- **[SUMMARY.md](SUMMARY.md)** - Project overview
- **[README.md](README.md)** - Full documentation
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Cheat sheet

---

## 🎨 Nak Customize Lagi?

Baca **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** untuk:
- Tukar warna
- Tukar font
- Tambah features
- Dan banyak lagi!

---

**That's it! 5 minit je! Simple kan?** 😊

**Selamat menggunakan! Barakallahu lakum!** 🎉

---

*Quick Start Guide - E-Invitation Majlis Akikah*
