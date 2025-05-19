import React, { useState } from 'react';
import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/project/pembangunanRumah/20240911_140109.jpg";
import photo2 from "../images/project/pembangunanRumah/20240313_142839.jpg";
import photo3 from "../images/project/pembangunanRumah/20240911_140109.jpg";
import photo4 from "../images/project/pembangunanRumah/20240911_140300.jpg";

// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css' // We'll replace this
// import InnerImageZoom from 'react-inner-image-zoom' // With yet-another-react-lightbox
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// For demonstration, let's assume you have more images.
// In a real app, these would come from props or a data source.
const galleryImages = [
  { src: photo, title: "Pembangunan Rumah - Tampilan Depan", description: "Proses pembangunan rumah tahap awal." },
  { src: photo2, title: "Pembangunan Rumah - Tampilan Awal", description: "Detail konstruksi dari sisi berbeda." }, // Replace with actual different images
  { src: photo4, title: "Pembangunan Rumah - Tampilan Awal", description: "Detail konstruksi dari sisi berbeda." }, // Replace with actual different images

];

export function BangunRumah() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true); // Start open by default
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="projectDetails">
      <div className="bRumah-header"></div>
      <div className="details">
        <div className="d-project-info">
          <h2>Bangun Rumah</h2>
          <ul>
            <li> 🔑 PEMBANGUNAN RUMAH 1 LANTAI S.D 3 LANTAI </li>
            <li> 🔑 DARI RUMAH SEDERHANA SAMPAI MODERN & ELITE </li>
            <li> 🔑 BERBAGAI TIPE : SKANDINAVIA, MEDITERANIA, ETC.</li>
            <li> 🔑  PONDASI, STRUKTUR, INSTALASI KELISTRIKAN, PENGECATAN, SAMPAI DENGAN FINISHING DAN SERAH TERIMA KUNCI.</li>
          </ul>
          <p>
            <br />
          </p>
        </div>

        {/* Collapsible Section */}
        <div className="collapsible-section">
          <button 
            className="collapsible-header" 
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            aria-expanded={isDetailsOpen}
            aria-controls="bangun-rumah-details-content"
          >
            <h3>Detail Layanan Pembangunan Rumah</h3>
            {isDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isDetailsOpen && (
            <div id="bangun-rumah-details-content" className="collapsible-content">
              <ul>
                <li><strong>Pondasi:</strong> Perencanaan dan pelaksanaan pondasi yang kokoh sesuai standar.</li>
                <li><strong>Struktur Bangunan:</strong> Pembangunan struktur utama (kolom, balok, plat lantai) dengan material berkualitas.</li>
                <li><strong>Dinding & Atap:</strong> Pemasangan dinding, plesteran, acian, serta konstruksi atap yang kuat dan tahan bocor.</li>
                <li><strong>Instalasi Listrik & Air:</strong> Pemasangan instalasi listrik dan plumbing yang aman dan fungsional.</li>
                <li><strong>Pekerjaan Finishing:</strong> Pemasangan keramik, sanitasi, pengecatan, pintu, jendela, hingga detail akhir.</li>
                <li><strong>Serah Terima Kunci:</strong> Pemeriksaan akhir dan serah terima proyek kepada klien.</li>
              </ul>
              <p>Kami memastikan setiap tahap pembangunan dilakukan dengan cermat dan profesional untuk hasil terbaik.</p>
            </div>
          )}
        </div>
      </div>
      <div className="gallery-section">
        <div className="image-gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-thumbnail" 
              onClick={() => {
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }}
            >
              <img src={image.src} alt={image.title || `Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages.map(img => ({ src: img.src, title: img.title, description: img.description }))}
        index={currentImageIndex}
        plugins={[Zoom, Captions]}
        captions={{ showToggle: true, descriptionTextAlign: 'center' }}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 1.5, doubleTapDelay: 300, doubleClickDelay: 300 }}
      />
    </div>
  );
}
