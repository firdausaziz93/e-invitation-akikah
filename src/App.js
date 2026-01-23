import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import yusufImg from "./img/Yusuf.png";
import malekImg from "./img/Malek.png";
import aidenImg from "./img/Aiden.png";
import backgroundMusic from "./audio/SELAWAT cut version.mp3";
import butterflyGif from "./img/butterfly-green.gif";
import butterflyInsect from "./img/butterfly-insect.gif";
import butterflyOrange from "./img/butterfly-orange.gif";
import butterflyCcc from "./img/ccc.gif";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef(null);
  const playInitiatedRef = useRef(false);

  // Initialize HTML5 Audio
  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 1.0;

    audioRef.current.addEventListener("play", () => {
      setIsPlaying(true);
      console.log("Music playing");
    });

    audioRef.current.addEventListener("pause", () => {
      if (playInitiatedRef.current) {
        console.log("Auto-pause detected, forcing play");
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current
              .play()
              .catch((e) => console.log("Replay error:", e));
          }
        }, 100);
      } else {
        setIsPlaying(false);
        console.log("Music paused");
      }
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Animasi fade-in ketika komponen dimuat
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200);
    });
  }, []);

  // Auto pause audio when user leaves the browser/tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User left the tab/minimized browser
        if (audioRef.current && isPlaying) {
          playInitiatedRef.current = false;
          audioRef.current.pause();
          console.log("Audio paused - user left tab");
        }
      } else {
        // User returned to the tab
        if (audioRef.current && userInteracted && !isPlaying) {
          playInitiatedRef.current = true;
          audioRef.current
            .play()
            .catch((e) => console.log("Resume play error:", e));
          console.log("Audio resumed - user returned to tab");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying, userInteracted]);

  // Note: Removed auto-play listener to prevent Safari conflicts
  // Music will only play when user clicks "BUKA JEMPUTAN" button

  // Fungsi untuk toggle music
  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        playInitiatedRef.current = false;
        audioRef.current.pause();
      } else {
        playInitiatedRef.current = true;
        audioRef.current.play().catch((e) => console.log("Play error:", e));
        if (!userInteracted) setUserInteracted(true);
      }
    }
  }, [isPlaying, userInteracted]);

  // Fungsi untuk buka invitation
  const handleOpen = useCallback(() => {
    // Prevent multiple clicks
    if (isOpened) return;

    // Mark as interacted immediately for mobile
    setUserInteracted(true);
    playInitiatedRef.current = true;

    // Trigger closing animation
    const overlay = document.querySelector(".opening-overlay");
    if (overlay) {
      overlay.classList.add("closing");
    }

    // Play music
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Music started successfully");
        })
        .catch((error) => {
          console.log("Audio play error:", error);
        });
    } else {
      console.log("Audio not ready yet");
    }

    // Remove overlay after animation
    setTimeout(() => {
      setIsOpened(true);
    }, 6000);
  }, [isOpened]);

  // Fungsi untuk share ke WhatsApp
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(
      "JEMPUTAN MAJLIS AKIKAH\n\n" +
        "Assalamualaikum..\n" +
        "بِسۡـــــــــمِ ٱللهِ ٱلرَّحۡـمَـٰنِ ٱلرَّحِـــــــيمِ\n\n" +
        "AZIZ BIN MAMAT & SITI ZAHARAH BINTI SAID\n\n" +
        "dengan setulus ikhlas untuk menjemput Ahli Keluarga / Saudara Mara / Jiran Tetangga / Sahabat Handai Serta Rakan - Rakan ke Majlis Akikah bagi anak - anak kami:\n\n" +
        "1. YUSUF (Putera kepada FIRDAUS & SYUHADAH)\n" +
        "2. AYDEEN (Putera kepada ISMAIL & ATIRAH)\n" +
        "3. MALEEQ (Putera kepada AMMAR & UMIRAH)\n\n" +
        "Tarikh: Ahad, 15 Februari 2026\n" +
        "Masa: 11:00 Pagi - 3:00 Petang\n" +
        "Lokasi: Kampung Parit Buluh, Air Kuning Selatan\n\n" +
        "Kami berharap Ahli Keluarga / Saudara Mara / Jiran Tetangga / Sahabat Handai Serta Rakan - Rakan sekeluarga dapat meluangkan masa untuk hadir memeriahkan majlis kami ini.\n\n" +
        "Wassalamualaikum warahmatullahi wabarakatuh\n\n" +
        "tekan link dibawah untuk membuka ekad :\n" +
        "https://e-invitation-akikah.vercel.app/\n"
    );
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Fungsi untuk export ke PDF
  //   const exportToPDF = async () => {
  //     setIsGeneratingPDF(true);
  //     try {
  //       const element = document.querySelector(".container");
  //       const canvas = await html2canvas(element, {
  //         scale: 2,
  //         useCORS: true,
  //         logging: false,
  //         backgroundColor: "#f5fef5",
  //       });

  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF({
  //         orientation: "portrait",
  //         unit: "mm",
  //         format: "a4",
  //       });

  //       const imgWidth = 210; // A4 width in mm
  //       const pageHeight = 297; // A4 height in mm
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //       let heightLeft = imgHeight;
  //       let position = 0;

  //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;

  //       while (heightLeft >= 0) {
  //         position = heightLeft - imgHeight;
  //         pdf.addPage();
  //         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //         heightLeft -= pageHeight;
  //       }

  //       pdf.save("Jemputan-Majlis-Akikah.pdf");
  //     } catch (error) {
  //       console.error("Error generating PDF:", error);
  //       alert("Maaf, terdapat masalah semasa menjana PDF. Sila cuba lagi.");
  //     } finally {
  //       setIsGeneratingPDF(false);
  //     }
  //   };

  return (
    <div className="app">
      {/* Opening Window Animation */}
      {!isOpened && (
        <div className="opening-overlay">
          <div className="kampung-window">
            <div className="window-frame">
              <div className="window-left"></div>
              <div className="window-right"></div>
              <div className="window-decoration-top"></div>
              <div className="window-decoration-bottom"></div>
            </div>
            <button className="open-button" onClick={handleOpen}>
              <span className="open-text">BUKA</span>
            </button>
          </div>
        </div>
      )}

      {/* Background Pattern */}
      <div className="background-pattern"></div>

      {/* Flying Butterfly GIFs */}
      <img
        src={butterflyGif}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-1"
      />
      <img
        src={butterflyInsect}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-2"
      />
      <img
        src={butterflyOrange}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-3"
      />
      <img
        src={butterflyCcc}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-4"
      />
      <img
        src={butterflyGif}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-5"
      />
      <img
        src={butterflyInsect}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-6"
      />
      <img
        src={butterflyOrange}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-7"
      />
      <img
        src={butterflyCcc}
        alt="Flying Butterfly"
        className="flying-butterfly-gif butterfly-8"
      />

      {/* Music Player */}
      <div className="music-player">
        <button className="music-toggle" onClick={toggleMusic}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isPlaying ? (
              <path d="M6 4H8V20H6V4ZM16 4H18V20H16V4Z" fill="currentColor" />
            ) : (
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            )}
          </svg>
        </button>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Seksyen Pembukaan */}
        <header className="header fade-in">
          <div className="bismillah">
            <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <p className="translation">
              Dengan Nama Allah Yang Maha Pemurah Lagi Maha Penyayang
            </p>
          </div>

          <div className="divider"></div>

          <h1 className="main-title">Jemputan Majlis Akikah</h1>

          <div className="welcome-text">
            <p>
              <em>Assalamualaikum warahmatullahi wabarakatuh</em>
            </p>
            <p>
              Alhamdulillah, dengan penuh rasa kesyukuran ke hadrat Allah SWT,
              kami dengan sukacitanya menjemput Ahli Keluarga / Saudara Mara / Jiran Tetangga / Sahabat Handai Serta Rakan - Rakan sekeluarga
              ke majlis akikah dan kesyukuran sempena kelahiran cahaya mata kami.
            </p>
          </div>
        </header>

        {/* Seksyen Nama Anak-anak */}
        <section className="children-section fade-in">
          <h2 className="section-title">Majlis Akikah Bagi</h2>

          <div className="children-cards">
            <div className="child-card">
              <div className="child-image-wrapper">
                <img src={yusufImg} alt="Yusuf" className="child-image" />
              </div>
              <div className="child-name">Yusuf</div>
              <div className="child-parents">
                Putera kepada Firdaus & Syuhadah
              </div>
            </div>

            <div className="child-card">
              <div className="child-image-wrapper">
                <img src={aidenImg} alt="Aydeen" className="child-image" />
              </div>
              <div className="child-name">Aydeen</div>
              <div className="child-parents">Putera kepada Ismail & Atirah</div>
            </div>

            <div className="child-card">
              <div className="child-image-wrapper">
                <img src={malekImg} alt="Malek" className="child-image" />
              </div>
              <div className="child-name">Maleeq</div>
              <div className="child-parents">Putera kepada Ammar & Umirah</div>
            </div>
          </div>
        </section>

        {/* Seksyen Maklumat Majlis */}
        <section className="event-details fade-in">
          <h2 className="section-title">Maklumat Majlis</h2>

          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">🗓️</div>
              <div className="detail-label">Tarikh</div>
              <div className="detail-value">
                <span className="marhaban-text">Ahad,</span> 15{" "}
                <span className="marhaban-text">Februari</span> 2026
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🕐</div>
              <div className="detail-label">Masa</div>
              <div className="detail-value">
                11:00 <span className="marhaban-text">Pagi</span> - 3:00{" "}
                <span className="marhaban-text">Petang</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-label">Lokasi</div>
              <div className="detail-label">
                Kampung Parit Buluh, Air Kuning Selatan
              </div>
              <div className="detail-value">
                <a
                  href="https://maps.app.goo.gl/c98U3UWhMseNqWMY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-link"
                >
                  Klik untuk ke lokasi
                </a>
              </div>
            </div>
          </div>

          <div className="program">
            <h3 className="program-title">Atur Cara Ringkas</h3>
            <ul className="program-list">
              <li>
                10:00AM - <span className="marhaban-text">Marhaban</span>
              </li>
              <li>
                11:00AM -{" "}
                <span className="marhaban-text">
                  Doa, Tahlil & Cukur Jambul{" "}
                </span>
              </li>
              <li>
                12:30PM - <span className="marhaban-text">Makan </span>
              </li>
              <li>
                3:00PM - <span className="marhaban-text">Tamat</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seksyen Doa & Penutup */}
        <section className="closing-section fade-in">
          <div className="dua-box">
            <p className="dua-arabic">
              رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ
              أَعْيُنٍ
            </p>
            <p className="dua-translation">
              "Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan
              kami sebagai penyejuk hati (kami)"
            </p>
            <p className="dua-reference">
              (<span className="marhaban-text">Surah Al-Furqan,</span> 25:74)
            </p>
          </div>

          <div className="closing-text">
            <p>
              Semoga Allah SWT memberkati mereka dengan kesihatan yang baik,
              akhlak yang mulia, dan menjadikan mereka hamba-hambaNya yang
              soleh.
            </p>
            <p>
              Kehadiran dan doa restu Dato'/Datin/Tuan/Puan amatlah dihargai dan
              didoakan agar Allah SWT membalas dengan segala kebaikan.
            </p>
          </div>

          <div className="families">
            <p>
              <strong>Dari Keluarga</strong>
            </p>
            <p>Aziz Mamat & Siti Zaharah Said</p>
          </div>
        </section>

        {/* Butang WhatsApp Share */}
        <div className="share-section fade-in">
          <button className="whatsapp-button" onClick={shareToWhatsApp}>
            <span className="whatsapp-icon">📱</span>
            Kongsi Jemputan di WhatsApp
          </button>

          {/* <button
            className="pdf-button"
            onClick={exportToPDF}
            disabled={isGeneratingPDF}
          >
            <span className="pdf-icon">📄</span>
            {isGeneratingPDF ? "Menjana PDF..." : "Muat Turun sebagai PDF"}
          </button> */}
        </div>

        {/* Footer */}
        <footer className="footer fade-in">
          <p className="footer-text">
            <em>Wassalamualaikum warahmatullahi wabarakatuh</em>
          </p>
          <div className="footer-divider"></div>
          <p className="footer-note">
            Terima kasih atas perhatian dan kehadiran anda
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
