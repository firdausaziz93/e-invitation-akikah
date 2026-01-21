import React, { useEffect, useState } from "react";
import "./App.css";
import yusufImg from "./img/Yusuf.png";
import malekImg from "./img/Malek.png";
import aidenImg from "./img/Aiden.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Animasi fade-in ketika komponen dimuat
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200);
    });
  }, []);

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
  const exportToPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.querySelector(".container");
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#f5fef5",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Jemputan-Majlis-Akikah.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Maaf, terdapat masalah semasa menjana PDF. Sila cuba lagi.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="app">
      {/* Background Pattern */}
      <div className="background-pattern"></div>

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
              <div className="child-parents">Putera kepada Firdaus & Suha</div>
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
              <div className="child-name">MALEEQ</div>
              <div className="child-parents">Putera kepada Naim & Umirah</div>
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
              <div className="detail-label">Kampung Parit Buluh, Air Kuning Selatan</div>
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
              <li>11:00 AM - Ketibaan Tetamu</li>
              <li>12:00 PM - Jamuan Makan</li>
              <li>1:00 PM - Bacaan Yassin & Doa</li>
              <li>2:30 PM - Sesi Bergambar & Perpisahan</li>
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

          <button
            className="pdf-button"
            onClick={exportToPDF}
            disabled={isGeneratingPDF}
          >
            <span className="pdf-icon">📄</span>
            {isGeneratingPDF ? "Menjana PDF..." : "Muat Turun sebagai PDF"}
          </button>
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
