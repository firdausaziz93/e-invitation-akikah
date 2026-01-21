# 🎨 Panduan Customization Lengkap

Panduan ini akan tunjukkan cara customize setiap bahagian aplikasi E-Invitation Majlis Akikah.

---

## 📝 1. Tukar Maklumat Anak-anak

### Lokasi: `src/App.js` (Line ~85-105)

#### Untuk menukar nama anak dan ibu bapa:

**Sebelum:**
```jsx
<div className="child-card">
  <div className="child-name">Yusuf</div>
  <div className="child-parents">Putera kepada Firdaus & Suha</div>
</div>
```

**Selepas:**
```jsx
<div className="child-card">
  <div className="child-name">Ahmad</div>
  <div className="child-parents">Putera kepada Ali & Siti</div>
</div>
```

#### Untuk tambah atau kurangkan bilangan anak:

**Tambah anak keempat:**
```jsx
<div className="child-card">
  <div className="child-name">Zain</div>
  <div className="child-parents">Putera kepada Hassan & Fatimah</div>
</div>
```

**Untuk anak perempuan:**
```jsx
<div className="child-card">
  <div className="child-name">Aisyah</div>
  <div className="child-parents">Puteri kepada Ahmad & Khadijah</div>
</div>
```

---

## 📅 2. Tukar Tarikh, Masa & Lokasi

### Lokasi: `src/App.js` (Line ~115-145)

#### Tarikh:
```jsx
<div className="detail-value">Sabtu, 28 Mac 2026</div>
```

#### Masa:
```jsx
<div className="detail-value">10:00 Pagi - 2:00 Petang</div>
```

#### Tempat:
```jsx
<div className="detail-value">
  Dewan Komuniti Taman Melati<br />
  No. 123, Jalan Melati 3/7<br />
  56000 Kuala Lumpur
</div>
```

#### Atur Cara:
```jsx
<ul className="program-list">
  <li>10:00 AM - Ketibaan Tetamu & Pendaftaran</li>
  <li>11:00 AM - Majlis Bacaan Doa</li>
  <li>12:00 PM - Jamuan Makan Tengahari</li>
  <li>1:30 PM - Penyampaian Cenderahati & Bergambar</li>
</ul>
```

---

## 🎨 3. Tukar Warna Tema

### Lokasi: `src/App.css` (Line ~10-20)

#### Tema 1: Hijau & Emas (Default)
```css
:root {
  --primary-green: #2d6a4f;
  --light-green: #52b788;
  --cream: #fff8e7;
  --beige: #f5e6d3;
  --gold: #d4af37;
}
```

#### Tema 2: Biru & Perak
```css
:root {
  --primary-green: #1e3a8a;      /* Biru tua */
  --light-green: #3b82f6;        /* Biru terang */
  --cream: #f0f9ff;              /* Biru sangat muda */
  --beige: #dbeafe;              /* Biru muda */
  --gold: #94a3b8;               /* Perak */
}
```

#### Tema 3: Ungu & Rose Gold
```css
:root {
  --primary-green: #6b21a8;      /* Ungu tua */
  --light-green: #a855f7;        /* Ungu terang */
  --cream: #fdf4ff;              /* Ungu sangat muda */
  --beige: #f3e8ff;              /* Ungu muda */
  --gold: #e9967a;               /* Rose gold */
}
```

#### Tema 4: Merah Maroon & Emas
```css
:root {
  --primary-green: #7f1d1d;      /* Maroon */
  --light-green: #dc2626;        /* Merah */
  --cream: #fef2f2;              /* Merah sangat muda */
  --beige: #fee2e2;              /* Merah muda */
  --gold: #d4af37;               /* Emas */
}
```

---

## 💬 4. Tukar Mesej WhatsApp

### Lokasi: `src/App.js` (Line ~20-26)

**Default:**
```javascript
const message = encodeURIComponent(
  'Assalamualaikum! Anda dijemput ke Majlis Akikah anak-anak kami.\n\n' +
  'Sila klik pautan ini untuk maklumat lanjut:\n' +
  window.location.href
);
```

**Custom 1: Lebih formal**
```javascript
const message = encodeURIComponent(
  'السلام عليكم ورحمة الله وبركاته\n\n' +
  'Dengan segala hormatnya, kami ingin menjemput Dato\'/Datin/Tuan/Puan ' +
  'ke Majlis Kesyukuran Akikah anak kami.\n\n' +
  'Maklumat penuh: ' + window.location.href + '\n\n' +
  'Terima kasih. Wassalam.'
);
```

**Custom 2: Lebih ringkas**
```javascript
const message = encodeURIComponent(
  'Salam! Jemput datang Majlis Akikah anak kami 😊\n' +
  'Details: ' + window.location.href
);
```

**Custom 3: Dengan nama penerima**
```javascript
const shareToWhatsApp = (recipientName = '') => {
  const greeting = recipientName ? `Salam ${recipientName}! ` : 'Assalamualaikum! ';
  const message = encodeURIComponent(
    greeting + 'Anda dijemput ke Majlis Akikah anak-anak kami.\n\n' +
    'Sila klik pautan ini untuk maklumat lanjut:\n' +
    window.location.href
  );
  const whatsappUrl = `https://wa.me/?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
```

---

## 🖼️ 5. Tukar Imej Preview WhatsApp

### Lokasi: `public/index.html` (Line ~10)

#### Option 1: Guna Unsplash (Free Images)
```html
<!-- Tema mosque -->
<meta property="og:image" content="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1200&h=630&fit=crop" />

<!-- Tema Islamic pattern -->
<meta property="og:image" content="https://images.unsplash.com/photo-1584286595398-a59f21d5c1f0?w=1200&h=630&fit=crop" />

<!-- Tema baby/family -->
<meta property="og:image" content="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=630&fit=crop" />
```

#### Option 2: Upload Image Sendiri

1. **Prepare image:**
   - Saiz: 1200x630 pixels (optimum untuk social media)
   - Format: JPG atau PNG
   - File size: < 300KB (compress jika perlu)

2. **Upload ke image hosting:**
   - [ImgBB](https://imgbb.com) - Free, mudah
   - [Cloudinary](https://cloudinary.com) - Professional
   - Atau dalam folder `public/` projek sendiri

3. **Update meta tag:**
```html
<!-- Jika upload ke hosting -->
<meta property="og:image" content="https://i.imgbb.com/xxxxx/your-image.jpg" />

<!-- Jika dalam folder public -->
<meta property="og:image" content="https://your-domain.vercel.app/akikah-image.jpg" />
```

#### Option 3: Buat Design Custom

Tools untuk create custom image:
- **Canva** ([canva.com](https://canva.com)) - Template ready
- **Figma** ([figma.com](https://figma.com)) - Professional design
- **Adobe Express** - Quick designs

Template suggestions:
- Islamic geometric patterns
- Pastel colors dengan Arabic calligraphy
- Baby theme dengan Islamic elements
- Simple elegant dengan event details

---

## ✏️ 6. Tukar Teks Pembukaan & Penutup

### Ucapan Pembukaan
**Lokasi: `src/App.js` (Line ~45-55)**

**Default:**
```jsx
<p>
  Alhamdulillah, dengan penuh rasa kesyukuran ke hadrat Allah SWT, 
  kami dengan sukacitanya menjemput Dato'/Datin/Tuan/Puan sekeluarga 
  ke majlis kesyukuran sempena kelahiran cahaya mata kami.
</p>
```

**Alternative 1:**
```jsx
<p>
  Dengan penuh rasa syukur ke hadrat Ilahi, kami dengan rendah diri 
  menjemput kehadiran Dato'/Datin/Tuan/Puan ke Majlis Akikah 
  yang akan diadakan insyaAllah.
</p>
```

**Alternative 2:**
```jsx
<p>
  Segala puji bagi Allah, dengan izinNya kami telah dikurniakan 
  zuriat yang sihat dan sempurna. Sehubungan itu, kami ingin 
  berkongsi kegembiraan ini bersama tetamu-tetamu yang dihormati.
</p>
```

### Doa & Penutup
**Lokasi: `src/App.js` (Line ~170-185)**

Boleh tambah ayat Al-Quran lain atau hadis:

```jsx
<p className="dua-arabic">
  وَجَعَلَهُ مُبَارَكًا أَيْنَ مَا كَانَ
</p>
<p className="dua-translation">
  "Dan dijadikanNya daku memberi berkat di mana sahaja aku berada"
</p>
<p className="dua-reference">(Surah Maryam, 19:31)</p>
```

---

## 🎭 7. Tukar Font Typography

### Lokasi: `public/index.html` (Line ~15-17)

**Default (Amiri + Poppins):**
```html
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```

**Alternative 1 (Scheherazade + Nunito):**
```html
<link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Nunito:wght@300;400;600&display=swap" rel="stylesheet">
```

**Alternative 2 (Cairo + Raleway):**
```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
```

**Then update CSS (`src/App.css`):**
```css
:root {
  --font-arabic: 'Scheherazade New', serif;  /* atau 'Cairo' */
  --font-body: 'Nunito', sans-serif;         /* atau 'Raleway' */
}
```

---

## 🎬 8. Tukar Animasi Speed

### Lokasi: `src/App.css` (Line ~80-90)

**Slow animation (lambat & elegant):**
```css
.fade-in {
  transition: opacity 1s ease-out, transform 1s ease-out;
}
```

**Fast animation (cepat & snappy):**
```css
.fade-in {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
```

**No animation:**
```css
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: none;
}
```

### Tukar delay antara elements
**Lokasi: `src/App.js` (Line ~15)**

```javascript
// Default: 200ms delay
setTimeout(() => {
  el.classList.add('visible');
}, index * 200);

// Faster: 100ms delay
setTimeout(() => {
  el.classList.add('visible');
}, index * 100);

// Slower: 400ms delay
setTimeout(() => {
  el.classList.add('visible');
}, index * 400);
```

---

## 📱 9. Tambah Butang Call/SMS/Map

### Lokasi: `src/App.js` (selepas WhatsApp button)

#### Butang Call
```jsx
<button 
  className="whatsapp-button" 
  onClick={() => window.open('tel:+60123456789')}
  style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}
>
  <span className="whatsapp-icon">📞</span>
  Hubungi Kami
</button>
```

#### Butang Google Maps
```jsx
<button 
  className="whatsapp-button" 
  onClick={() => window.open('https://goo.gl/maps/YOUR_LOCATION_ID')}
  style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)'}}
>
  <span className="whatsapp-icon">📍</span>
  Lihat Lokasi
</button>
```

#### Butang RSVP (Simple)
```jsx
<button 
  className="whatsapp-button" 
  onClick={() => window.open('https://forms.gle/YOUR_FORM_ID')}
  style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)'}}
>
  <span className="whatsapp-icon">✅</span>
  Sahkan Kehadiran
</button>
```

---

## 🎵 10. Tambah Background Music (Optional)

### Lokasi: `src/App.js`

**Add state untuk control music:**
```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <audio ref={audioRef} loop>
        <source src="/path-to-your-music.mp3" type="audio/mpeg" />
      </audio>
      
      <button onClick={toggleMusic} className="music-button">
        {isPlaying ? '🔇 Pause' : '🔊 Play Music'}
      </button>
      
      {/* Rest of your content */}
    </div>
  );
}
```

**Add CSS for music button:**
```css
.music-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary-green);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  z-index: 1000;
}
```

---

## 📊 11. Tambah Google Analytics (Track Visitors)

### Lokasi: `public/index.html` (dalam `<head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` dengan your actual Google Analytics ID.

---

## 💡 Tips Customization

1. **Test selepas setiap perubahan** - Jangan buat banyak changes sekaligus
2. **Backup original code** - Git commit sebelum major changes
3. **Test di multiple devices** - Mobile, tablet, desktop
4. **Check browser console** - Untuk errors
5. **Ask for feedback** - Dari family/friends sebelum share widely

---

## 🆘 Need Help?

Jika stuck atau confused:
1. Baca `README.md` untuk overview
2. Baca `PENERANGAN_KOD.md` untuk technical details
3. Check `DEPLOYMENT.md` untuk deployment issues
4. Google specific errors
5. Ask ChatGPT/Claude dengan specific questions

---

**Selamat Customize! Jadikan invitation anda unik dan special!** 🎨✨
