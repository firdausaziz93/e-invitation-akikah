import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import "./FloatingFlowers.css";
import yusufImg from "./img/Yusuf.png";
import malekImg from "./img/Malek.png";
import aidenImg from "./img/Aiden.png";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

function App() {
  //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const playerRef = useRef(null);

  // Load YouTube IFrame API
  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: "DeweCI6MxYY",
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: "DeweCI6MxYY",
          controls: 0,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            // Unmute and set volume when ready
            event.target.unMute();
            event.target.setVolume(100);
            console.log("Player ready");
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              console.log("Music playing");
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              console.log("Music paused");
            }
          },
        },
      });
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

  // Auto-play music on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userInteracted && playerRef.current && playerRef.current.playVideo) {
        playerRef.current.playVideo();
        setUserInteracted(true);
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [userInteracted]);

  // Floating flowers animation
  useEffect(() => {
    const flowers = [
      "\ud83c\udf38",
      "\ud83c\udf3a",
      "\ud83c\udf3c",
      "\ud83c\udf37",
      "\ud83c\udf39",
    ];
    const createFloatingFlower = () => {
      const flower = document.createElement("div");
      flower.className = "floating-flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.animationDuration = `${15 + Math.random() * 10}s`;
      flower.style.animationDelay = `${Math.random() * 5}s`;

      document.querySelector(".app").appendChild(flower);

      setTimeout(() => {
        if (flower.parentNode) {
          flower.remove();
        }
      }, 25000);
    };

    // Create initial flowers
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createFloatingFlower(), i * 2000);
    }

    // Create new flowers periodically
    const interval = setInterval(createFloatingFlower, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk toggle music
  const toggleMusic = useCallback(() => {
    if (playerRef.current && playerRef.current.playVideo) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        // Ensure unmuted before playing
        if (playerRef.current.unMute) playerRef.current.unMute();
        if (playerRef.current.setVolume) playerRef.current.setVolume(100);
        playerRef.current.playVideo();
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

    // Try to play music immediately on button click (mobile requirement)
    if (playerRef.current && playerRef.current.playVideo) {
      try {
        // Ensure unmuted and volume is set
        if (playerRef.current.unMute) playerRef.current.unMute();
        if (playerRef.current.setVolume) playerRef.current.setVolume(100);

        playerRef.current.playVideo();
        setIsPlaying(true);
        console.log("Attempting to play music");
      } catch (error) {
        console.log("Error playing video:", error);
      }
    } else {
      console.log("Player not ready yet");
    }

    // Trigger closing animation
    const overlay = document.querySelector(".opening-overlay");
    if (overlay) {
      overlay.classList.add("closing");
    }

    // Remove overlay after animation
    setTimeout(() => {
      setIsOpened(true);
      // Try again after animation in case first attempt failed
      if (playerRef.current && playerRef.current.playVideo) {
        try {
          if (playerRef.current.unMute) playerRef.current.unMute();
          if (playerRef.current.setVolume) playerRef.current.setVolume(100);
          playerRef.current.playVideo();
          console.log("Retry playing music");
        } catch (error) {
          console.log("Retry play error:", error);
        }
      }
    }, 1000); // Match with animation duration
  }, [isOpened]);

  // Fungsi untuk share ke WhatsApp
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(
      "Assalamualaikum! Anda dijemput ke Majlis Akikah anak-anak kami.\n\n" +
        "Sila klik pautan ini untuk maklumat lanjut:\n" +
        window.location.href,
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
              <span className="open-text">BUKA JEMPUTAN</span>
            </button>
          </div>
        </div>
      )}

      {/* Background Pattern */}
      <div className="background-pattern"></div>

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
        <div id="youtube-player" style={{ display: "none" }}></div>
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
              kami dengan sukacitanya menjemput Dato'/Datin/Tuan/Puan sekeluarga
              ke majlis kesyukuran sempena kelahiran cahaya mata kami.
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
              <div className="detail-icon">📅</div>
              <div className="detail-label">Tarikh</div>
              <div className="detail-value">Ahad, 15 Februari 2026</div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🕐</div>
              <div className="detail-label">Masa</div>
              <div className="detail-value">11:00 Pagi - 3:00 Petang</div>
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
              <li>10:00 AM - Marhaban</li>
              <li>11:00 AM - Doa, Tahlil & Cukur Jambul </li>
              <li>12:30 AM - Makan </li>
              <li>3:00 PM - Tamat</li>
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
            <p className="dua-reference">(Surah Al-Furqan, 25:74)</p>
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
