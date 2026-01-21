# 🖼️ Visual Preview & Layout Description

Dokumen ini menerangkan visual design dan layout aplikasi E-Invitation Majlis Akikah.

---

## 📱 Mobile Layout (Default - Mobile First)

```
┌─────────────────────────────┐
│   ╔═══════════════════╗     │
│   ║  Background Pattern║     │ <- Islamic geometric pattern (subtle)
│   ╚═══════════════════╝     │
│                             │
│  ┌───────────────────────┐  │
│  │ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ│  │ <- Bismillah (Arabic)
│  │  (Translation)        │  │
│  │  ─────────            │  │ <- Golden divider
│  │                       │  │
│  │ Jemputan Majlis       │  │ <- Main title
│  │    Akikah             │  │
│  │                       │  │
│  │ Assalamualaikum...    │  │ <- Welcome text
│  │ (Welcome message)     │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Majlis Akikah Bagi   │  │ <- Section title
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │     Yusuf       │  │  │ <- Child card 1
│  │  │ (Firdaus & Suha)│  │  │
│  │  └─────────────────┘  │  │
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │     Malek       │  │  │ <- Child card 2
│  │  │ (Naim & Umirah) │  │  │
│  │  └─────────────────┘  │  │
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │     Aiden       │  │  │ <- Child card 3
│  │  │(Ismail & Atirah)│  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Maklumat Majlis      │  │ <- Event details
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │   📅 Tarikh     │  │  │ <- Date box
│  │  │  15 Feb 2026    │  │  │
│  │  └─────────────────┘  │  │
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │   🕐 Masa       │  │  │ <- Time box
│  │  │  11AM - 3PM     │  │  │
│  │  └─────────────────┘  │  │
│  │                       │  │
│  │  ┌─────────────────┐  │  │
│  │  │   📍 Tempat     │  │  │ <- Location box
│  │  │  Dewan...       │  │  │
│  │  └─────────────────┘  │  │
│  │                       │  │
│  │  Atur Cara:           │  │ <- Program
│  │  • 11:00 - Ketibaan  │  │
│  │  • 12:00 - Jamuan    │  │
│  │  • 1:00 - Doa        │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  [Arabic Dua]         │  │ <- Doa section (green bg)
│  │  "Translation..."     │  │
│  │  (Surah reference)    │  │
│  │                       │  │
│  │  Semoga Allah...      │  │ <- Closing text
│  │                       │  │
│  │  Keluarga Names       │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  [📱 Kongsi WhatsApp] │  │ <- Share button (green)
│  └───────────────────────┘  │
│                             │
│  Wassalamualaikum...        │ <- Footer
│  ─────────────              │
│  Terima kasih              │
│                             │
└─────────────────────────────┘
```

---

## 💻 Desktop Layout (900px+)

```
┌─────────────────────────────────────────────────────────────┐
│        ╔════════════════════════════════════════╗           │
│        ║     Background Pattern (Geometric)     ║           │
│        ╚════════════════════════════════════════╝           │
│                                                             │
│           ┌─────────────────────────────────┐               │
│           │  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ │               │
│           │      (Translation)              │               │
│           │      ──────────────             │               │
│           │                                 │               │
│           │   Jemputan Majlis Akikah        │               │
│           │                                 │               │
│           │   Assalamualaikum...            │               │
│           │   (Welcome message block)       │               │
│           └─────────────────────────────────┘               │
│                                                             │
│           ┌─────────────────────────────────┐               │
│           │      Majlis Akikah Bagi         │               │
│           │                                 │               │
│           │  ┌──────┐  ┌──────┐  ┌──────┐  │               │
│           │  │Yusuf │  │Malek │  │Aiden │  │  <- 3 columns │
│           │  │(...)  │  │(...)  │  │(...)  │  │               │
│           │  └──────┘  └──────┘  └──────┘  │               │
│           └─────────────────────────────────┘               │
│                                                             │
│           ┌─────────────────────────────────┐               │
│           │      Maklumat Majlis            │               │
│           │                                 │               │
│           │  ┌──────┐ ┌──────┐ ┌────────┐  │               │
│           │  │📅Date│ │🕐Time│ │📍Place│  │  <- 3 columns │
│           │  │ ...  │ │ ...  │ │  ...  │  │               │
│           │  └──────┘ └──────┘ └────────┘  │               │
│           │                                 │               │
│           │  Atur Cara:                     │               │
│           │  • Program list...              │               │
│           └─────────────────────────────────┘               │
│                                                             │
│           ┌─────────────────────────────────┐               │
│           │  [Arabic Dua in larger font]    │  <- Green bg │
│           │  "Translation..."               │               │
│           │                                 │               │
│           │  Closing message...             │               │
│           │  Family names                   │               │
│           └─────────────────────────────────┘               │
│                                                             │
│                [📱 Kongsi WhatsApp Button]                  │
│                                                             │
│                  Wassalamualaikum...                        │
│                  ─────────────────                          │
│                  Terima kasih                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Scheme Visualization

### Primary Colors
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│   #2d6a4f    │  │   #52b788    │  │   #d4af37    │
│              │  │              │  │              │
│ Primary      │  │ Light Green  │  │    Gold      │
│   Green      │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Background Colors
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│   #fff8e7    │  │   #f5e6d3    │  │   #ffffff    │
│              │  │              │  │              │
│    Cream     │  │    Beige     │  │    White     │
│              │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Text Colors
```
┌──────────────┐  ┌──────────────┐
│              │  │              │
│   #2c2c2c    │  │   #666666    │
│              │  │              │
│  Dark Text   │  │  Light Text  │
│              │  │              │
└──────────────┘  └──────────────┘
```

---

## 🎭 Typography Hierarchy

```
┌────────────────────────────────────────┐
│                                        │
│  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ   │  <- H1: 1.8rem (Amiri)
│                                        │
│  Jemputan Majlis Akikah                │  <- H1: 2.2rem (Poppins)
│                                        │
│  Majlis Akikah Bagi                    │  <- H2: 1.8rem (Poppins)
│                                        │
│  Yusuf                                 │  <- Name: 1.8rem (Amiri)
│                                        │
│  Putera kepada Firdaus & Suha          │  <- Subtitle: 1rem (Poppins)
│                                        │
│  Body text paragraph goes here with    │  <- Body: 1rem (Poppins)
│  normal line height and spacing for    │
│  comfortable reading experience.       │
│                                        │
│  Small text or captions                │  <- Small: 0.9rem (Poppins)
│                                        │
└────────────────────────────────────────┘
```

---

## 🔄 Animation Sequence

```
Time →

0ms    ┌──────┐
       │Header│ Fade in (opacity 0 → 1, translateY 20px → 0)
       └──────┘

200ms  ┌──────────┐
       │Children  │ Fade in
       │Section   │
       └──────────┘

400ms  ┌──────────┐
       │Event     │ Fade in
       │Details   │
       └──────────┘

600ms  ┌──────────┐
       │Closing   │ Fade in
       │Section   │
       └──────────┘

800ms  ┌──────────┐
       │Share     │ Fade in
       │Button    │
       └──────────┘

1000ms ┌──────────┐
       │Footer    │ Fade in
       └──────────┘
```

**Total animation duration: ~1.2 seconds**

---

## 📐 Spacing System

```
┌─────────────────────────────────────┐
│  Container Padding                  │
│  ┌─────────────────────────────┐    │ <- 1rem (mobile)
│  │                             │    │ <- 1.5rem (tablet)
│  │  Section Margin Bottom      │    │ <- 2rem (desktop)
│  │  ┌───────────────────────┐  │    │
│  │  │                       │  │    │ <- 2rem between sections
│  │  │  Element Padding      │  │    │
│  │  │  ┌─────────────────┐  │  │    │
│  │  │  │                 │  │  │    │ <- 1.5rem element padding
│  │  │  │  Text Spacing   │  │  │    │
│  │  │  │  Line height:   │  │  │    │
│  │  │  │  1.7 (body)     │  │  │    │
│  │  │  │  1.8 (arabic)   │  │  │    │
│  │  │  └─────────────────┘  │  │    │
│  │  └───────────────────────┘  │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘

Spacing Scale:
--spacing-xs:  0.5rem (8px)
--spacing-sm:  1rem   (16px)
--spacing-md:  1.5rem (24px)
--spacing-lg:  2rem   (32px)
--spacing-xl:  3rem   (48px)
```

---

## 🃏 Card Components

### Child Card
```
┌────────────────────────────┐
│                            │
│                            │ <- Padding: 1.5rem
│         Yusuf              │ <- Name (centered, large)
│                            │
│  Putera kepada             │ <- Parents (centered, smaller)
│  Firdaus & Suha            │
│                            │
│                            │
└────────────────────────────┘
  │                        │
  └─ Border left: 4px green
  
  Hover: Lift up 5px + larger shadow
```

### Detail Card
```
┌────────────────────────────┐
│                            │
│          📅                │ <- Icon (2rem)
│                            │
│        TARIKH              │ <- Label (uppercase)
│                            │
│   Ahad, 15 Feb 2026        │ <- Value (bold)
│                            │
└────────────────────────────┘
  
  Background: Cream (#fff8e7)
  Border: 2px solid Beige
  Border radius: 8px
```

---

## 🎨 Design Elements

### Divider Line
```
─────────────
│           │
└─ Width: 80px
└─ Height: 3px
└─ Gradient: transparent → gold → transparent
```

### Background Pattern
```
╱╲╱╲╱╲╱╲╱╲  <- 45deg lines
╲╱╲╱╲╱╲╱╲╱  <- -45deg lines
╱╲╱╲╱╲╱╲╱╲
╲╱╲╱╲╱╲╱╲╱

Repeating every 10px
Opacity: 0.03 (very subtle)
Color: Primary green
```

### Shadow Levels
```
Level 1 (sm):  0 2px 8px rgba(0,0,0,0.08)   <- Cards
Level 2 (md):  0 4px 16px rgba(0,0,0,0.12)  <- Sections
Level 3 (lg):  0 8px 24px rgba(0,0,0,0.15)  <- Hover states
```

---

## 📱 WhatsApp Share Button

```
┌────────────────────────────────────┐
│  📱  Kongsi Jemputan di WhatsApp   │ <- Icon + Text
└────────────────────────────────────┘
  │
  ├─ Background: WhatsApp green gradient
  ├─ Border radius: 50px (pill shape)
  ├─ Padding: 1rem 3rem
  ├─ Shadow: Medium
  └─ Hover: Lift 3px + larger shadow
```

---

## 🎯 Interaction States

### Button States
```
Normal:    [📱 Kongsi WhatsApp]
           └─ Green gradient, medium shadow

Hover:     [📱 Kongsi WhatsApp]
           └─ Lifted up, larger shadow

Active:    [📱 Kongsi WhatsApp]
           └─ Back to normal position

Focus:     [📱 Kongsi WhatsApp]
           └─ Outline for accessibility
```

### Card Hover
```
Normal:    ┌─────────┐
           │  Card   │ <- Flat
           └─────────┘

Hover:     ┌─────────┐
           │  Card   │ <- Lifted 5px up
           └─────────┘
                ↑
           Larger shadow
```

---

## 📏 Responsive Breakpoints

```
Mobile (Default):
└─ 0px - 599px
   └─ 1 column layout
   └─ Smaller fonts
   └─ Full width cards

Tablet:
└─ 600px - 899px
   └─ 2 columns for details
   └─ Slightly larger fonts
   └─ More padding

Desktop:
└─ 900px+
   └─ 3 columns for children cards
   └─ 3 columns for details
   └─ Maximum width: 800px (centered)
   └─ Largest fonts
   └─ Most spacing
```

---

## 🖼️ WhatsApp Link Preview (Visual)

```
┌────────────────────────────────────┐
│  [Preview Image 1200x630]          │ <- og:image
│  Islamic theme / Mosque / Pattern  │
├────────────────────────────────────┤
│  Jemputan Majlis Akikah...         │ <- og:title
│                                    │
│  Dengan penuh kesyukuran, kami     │ <- og:description
│  menjemput Dato'/Datin/Tuan...     │
│                                    │
│  your-domain.vercel.app            │ <- og:url
└────────────────────────────────────┘

Preview appears when link is pasted in:
- WhatsApp chats
- WhatsApp groups
- WhatsApp Status
- Facebook
- Twitter
- Telegram
```

---

## 🎨 Design Philosophy

### Islamic Aesthetics
```
✦ Geometric Patterns  - Subtlety & order
✦ Calligraphy        - Elegance & tradition
✦ Earthy Colors      - Natural & peaceful
✦ White Space        - Clarity & breathing room
✦ Gold Accents       - Celebration & importance
```

### User Experience Principles
```
1. Mobile First      - Most users on phones
2. Clear Hierarchy   - Easy to scan
3. Readable Text     - Good contrast & size
4. Fast Loading      - Minimal dependencies
5. Accessible        - Semantic HTML
6. Shareable         - One-click WhatsApp share
```

---

## 🎭 Visual Mood Board

### Color Associations
```
Green  → Nature, Peace, Islamic tradition
Cream  → Warmth, Elegance, Invitation
Gold   → Celebration, Special occasion
White  → Purity, Clarity, Simplicity
```

### Font Personality
```
Amiri     → Traditional, Elegant, Arabic heritage
Poppins   → Modern, Clean, Professional
```

### Overall Feel
```
☑ Elegant
☑ Respectful
☑ Warm & Welcoming
☑ Modern but Traditional
☑ Professional but Personal
☑ Clean & Organized
☑ Celebratory
```

---

## 📸 Suggested Preview Images

### Theme 1: Mosque/Islamic Architecture
- Beautiful mosque at golden hour
- Islamic geometric patterns
- Arabic calligraphy

### Theme 2: Baby/Family
- Cute baby items (Islamic theme)
- Family silhouettes
- Soft pastel colors

### Theme 3: Celebration
- Decorative elements
- Floral patterns
- Festive atmosphere (tasteful)

**Image Specs:**
- Size: 1200 x 630 pixels
- Format: JPG (or PNG)
- File size: < 300KB
- Content: Family-friendly, Islamic-appropriate

---

## 🎯 Design Goals Achieved

✅ **Beautiful** - Elegant Islamic design
✅ **Functional** - Easy to read & navigate
✅ **Responsive** - Works on all devices
✅ **Fast** - Loads quickly
✅ **Shareable** - WhatsApp integration
✅ **Accessible** - Good contrast, readable fonts
✅ **Culturally Appropriate** - Respectful & Islamic
✅ **Modern** - Contemporary design patterns
✅ **Memorable** - Stands out from typical invitations

---

**This design combines traditional Islamic aesthetics with modern web design principles to create a unique, memorable, and effective e-invitation!** 🎨✨
