# 🕌 E-Invitation Majlis Akikah

Laman web jemputan digital (e-invitation) untuk Majlis Akikah yang dibangunkan menggunakan React.js dengan reka bentuk Islamik moden, responsif, dan boleh dikongsi melalui WhatsApp dengan link preview.

## ✨ Ciri-ciri Utama

- ✅ **Reka bentuk Islamik moden** dengan warna hijau, krim, dan emas
- ✅ **Responsif sepenuhnya** (mobile-first design)
- ✅ **WhatsApp Link Preview** dengan Open Graph meta tags
- ✅ **Animasi fade-in** yang lembut dan elegan
- ✅ **Butang share ke WhatsApp** untuk kongsi jemputan dengan mudah
- ✅ **Bahasa Melayu** dengan gaya formal dan sopan
- ✅ **Corak geometri Islamik** sebagai background

## 🗂️ Struktur Projek

```
E-invitation-akikah/
├── public/
│   └── index.html          # HTML utama dengan meta tags WhatsApp
├── src/
│   ├── App.js              # Komponen utama aplikasi
│   ├── App.css             # Styling untuk komponen App
│   ├── index.js            # Entry point React
│   └── index.css           # Global styles
├── package.json            # Dependencies dan scripts
└── README.md              # Dokumentasi ini
```

## 🎨 Komponen Utama

### 1. **Seksyen Pembukaan**
- Bismillah dalam tulisan Arab dan terjemahan
- Ucapan alu-aluan
- Ucapan kesyukuran

### 2. **Seksyen Nama Anak-anak**
- Kad untuk setiap anak dengan nama dan nama ibu bapa
- Animasi hover untuk interaktiviti

### 3. **Seksyen Maklumat Majlis**
- Tarikh, masa, dan lokasi majlis
- Atur cara ringkas dengan timeline
- Icon visual untuk setiap maklumat

### 4. **Seksyen Doa & Penutup**
- Ayat Al-Quran dalam Arab dan terjemahan
- Doa untuk anak-anak
- Ucapan terima kasih kepada tetamu

### 5. **Butang WhatsApp Share**
- Share jemputan dengan satu klik
- Pre-filled message untuk WhatsApp

## 🚀 Cara Menjalankan Projek (Development)

### Prasyarat
- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. **Install dependencies**
```bash
npm install
```

2. **Jalankan development server**
```bash
npm start
```

3. **Buka browser**
```
http://localhost:3000
```

Aplikasi akan reload secara automatik jika anda edit fail dalam `src/`.

## 📦 Build untuk Production

```bash
npm run build
```

Perintah ini akan cipta folder `build/` dengan fail-fail yang telah dioptimumkan untuk production.

## 🌐 Deployment ke Vercel

Vercel adalah platform terbaik untuk deploy aplikasi React dengan sokongan automatik untuk Open Graph meta tags (penting untuk WhatsApp preview).

### Langkah-langkah Deploy ke Vercel:

1. **Install Vercel CLI** (optional)
```bash
npm install -g vercel
```

2. **Deploy menggunakan Vercel CLI**
```bash
vercel
```

3. **Atau deploy melalui GitHub:**
   - Push kod anda ke GitHub repository
   - Pergi ke [vercel.com](https://vercel.com)
   - Klik "Import Project"
   - Pilih GitHub repository anda
   - Vercel akan automatically detect React app dan deploy

4. **Konfigurasi domain:**
   - Selepas deploy, Vercel akan beri anda URL (contoh: `https://your-app.vercel.app`)
   - Update URL ini dalam `public/index.html` di meta tag `og:url`

### Penting untuk WhatsApp Preview:

Selepas deploy, **WAJIB update** meta tag `og:url` dalam `public/index.html`:

```html
<meta property="og:url" content="https://your-actual-domain.vercel.app" />
```

Kemudian commit dan push semula, atau deploy semula di Vercel.

## 🌐 Deployment ke Netlify

Alternative kepada Vercel, Netlify juga sangat bagus untuk React apps.

### Langkah-langkah Deploy ke Netlify:

1. **Build projek**
```bash
npm run build
```

2. **Deploy menggunakan Netlify CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login ke Netlify
netlify login

# Deploy
netlify deploy --prod --dir=build
```

3. **Atau deploy melalui GitHub:**
   - Push kod ke GitHub
   - Pergi ke [netlify.com](https://netlify.com)
   - Klik "New site from Git"
   - Pilih repository anda
   - Build command: `npm run build`
   - Publish directory: `build`
   - Klik "Deploy site"

4. **Update URL dalam meta tags** seperti di Vercel

## 🔧 Customization

### Tukar Maklumat Majlis

Edit fail `src/App.js` dan cari bahagian-bahagian berikut:

```javascript
// Nama anak-anak
<div className="child-name">Yusuf</div>
<div className="child-parents">Putera kepada Firdaus & Suha</div>

// Tarikh & Masa
<div className="detail-value">Ahad, 15 Februari 2026</div>
<div className="detail-value">11:00 Pagi - 3:00 Petang</div>

// Lokasi
<div className="detail-value">
  Dewan Serbaguna Taman Seri Indah<br />
  Jalan Harmoni 5/2, Taman Seri Indah<br />
  43000 Kajang, Selangor
</div>
```

### Tukar Warna

Edit fail `src/App.css` dan ubah CSS variables:

```css
:root {
  --primary-green: #2d6a4f;
  --light-green: #52b788;
  --cream: #fff8e7;
  --beige: #f5e6d3;
  --gold: #d4af37;
}
```

### Tukar Imej Preview WhatsApp

Edit fail `public/index.html`:

```html
<meta property="og:image" content="URL_IMEJ_ANDA" />
```

**Tips untuk imej preview:**
- Saiz optimum: 1200x630 pixels
- Format: JPG atau PNG
- Tema Islamik yang bersesuaian
- Upload ke image hosting (Cloudinary, ImgBB, atau dalam folder `public/`)

## 📱 WhatsApp Share Feature

Fungsi share WhatsApp sudah built-in dalam aplikasi:

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

Anda boleh customize mesej dalam bahagian `message`.

## 🧪 Testing WhatsApp Preview

Selepas deploy, test link preview anda:

1. **Facebook Sharing Debugger** (works for WhatsApp too):
   - [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
   - Masukkan URL anda
   - Klik "Scrape Again" jika perlu update

2. **WhatsApp Direct Test:**
   - Send URL ke WhatsApp (kepada diri sendiri atau chat test)
   - Link preview akan appear automatically

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Lightweight: < 100KB (selepas gzip)
- Fast loading dengan code splitting
- Optimized images dan fonts
- Mobile-first approach

## 📖 Kod Structure Explanation

### `App.js` - Komponen Utama
- Mengandungi semua seksyen jemputan
- React hooks untuk animasi fade-in
- WhatsApp share function
- Clean dan mudah dibaca

### `App.css` - Styling
- CSS Variables untuk consistency
- Mobile-first responsive design
- Smooth animations
- Islamik color scheme
- Print-friendly styles

### `index.html` - Meta Tags
- Open Graph tags untuk social media
- Twitter Card tags (bonus)
- Google Fonts untuk typography Arab & Melayu

## 🤝 Support & Contribution

Jika ada sebarang masalah atau cadangan penambahbaikan, sila hubungi developer atau buat issue dalam repository.

## 📄 License

Projek ini adalah untuk kegunaan peribadi. Anda bebas untuk customize mengikut keperluan majlis anda.

---

## 🎉 Selamat Menggunakan!

Semoga aplikasi e-invitation ini memudahkan penyebaran jemputan majlis akikah anda. Barakallahu lakum!

**Dibina dengan ❤️ menggunakan React.js**
