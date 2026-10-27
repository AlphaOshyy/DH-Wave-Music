import React, { useEffect, useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { tracks, services } from './data/tracks';
import StudioStatus from './components/StudioStatus';
import HeroSection from './components/HeroSection';
import ReleaseGrid from './components/ReleaseGrid';
import AudioDock from './components/AudioDock';
import BookingWizard from './components/BookingWizard';
import RawMastered from './components/RawMastered';
const VideoModal = lazy(() => import('./components/VideoModal'));

function Icon({ name }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'play') return <svg {...common}><path d="m9 6 10 6-10 6z" fill="currentColor" /></svg>;
  if (name === 'menu') return <svg {...common}><path d="M3 7h18M3 17h18" /></svg>;
  if (name === 'pin') return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  if (name === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>;
  return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
}
function App() {
  const [menu, setMenu] = useState(false);
  const [activeTrack, setActiveTrack] = useState(null);
  useEffect(() => {
    const nodes = document.querySelectorAll('.enter');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('shown'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <>
    <div className="ticker"><div className="ticker-run"><span>DH WAVE MUSIC®</span><b>INDEPENDENT SOUND FROM THE SOUTH</b><span>DH WAVE MUSIC®</span><b>GALLe · SRI LANKA</b><span>DH WAVE MUSIC®</span><b>INDEPENDENT SOUND FROM THE SOUTH</b></div></div>
    <header className="header">
      <a className="wordmark" href="#home">DH<span>WAVE</span><sup>®</sup></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}><a onClick={() => setMenu(false)} href="#releases">Releases</a><a onClick={() => setMenu(false)} href="#studio">The studio</a><a onClick={() => setMenu(false)} href="#about">About</a><a onClick={() => setMenu(false)} href="#contact">Contact</a></nav>
      <StudioStatus /><a className="header-book" href="#contact">BOOK A SESSION</a>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><Icon name="menu"/></button>
    </header>
    <main id="home">
      <HeroSection onPlay={setActiveTrack} />
      <section className="proof"><div className="proof-label">THE WORK<br/>SPEAKS</div><div className="proof-stat"><strong>2M<span>+</span></strong><small>SILENT VIDEO VIEWS<br/>REPORTED</small></div><div className="proof-stat"><strong>24K<span>+</span></strong><small>YOUTUBE COMMUNITY<br/>CHANNEL FIGURE</small></div><div className="proof-stat"><strong>01<span> /</span></strong><small>INDEPENDENT<br/>SOUTHERN ROOTS</small></div><a href="https://www.youtube.com/@DHWaveMusicOfficial" target="_blank" rel="noreferrer" className="proof-link">SEE THE CHANNEL <Icon name="arrow"/></a></section>
      <ReleaseGrid tracks={tracks} onPlay={setActiveTrack} />
      <section className="manifesto"><div className="manifesto-side">DH WAVE MUSIC / STUDIO NOTE 001</div><div className="manifesto-main enter"><span className="section-no">NOT A FACTORY. A CREATIVE PARTNER.</span><h2>YOUR SOUND.<br/>YOUR STORY.<br/><span>DONE RIGHT.</span></h2><p>From a rough voice note to a finished release, the studio gives artists a place to shape the idea, capture the performance and get the record out into the world.</p><a className="line-link" href="#contact">TELL US WHAT YOU'RE MAKING <Icon name="arrow"/></a></div><div className="manifesto-art"><div className="big-dh">DH<span>.</span></div><div className="circle-copy">RECORD / PRODUCE / RELEASE / REPEAT /</div></div></section>
      <RawMastered />
      <section className="studio section-pad" id="studio"><div className="section-top enter"><div><span className="section-no">02 / WHAT WE DO</span><h2>FROM FIRST<br/>TAKE TO <span>FINAL.</span></h2></div><p>One place to record, produce, finish and present your next project.</p></div><div className="service-list">{services.map(([num,title,desc])=><article className="service-row enter" key={num}><span className="service-num">{num}</span><h3>{title}</h3><p>{desc}</p><span className="service-plus">+</span></article>)}</div></section>
      <section className="producer" id="about"><div className="producer-image"><div className="producer-image-inner"><span className="portrait-mark">DH</span><span className="portrait-caption">DINESH HEMANTHA / PRODUCER</span></div></div><div className="producer-copy enter"><span className="section-no">03 / THE PERSON BEHIND THE SOUND</span><h2>MADE IN<br/>THE <span>SOUTH.</span></h2><p>Led by Dinesh Hemantha, producer, composer, mix engineer and artist, DH Wave Music works across Sinhala rap, hip-hop, trap and contemporary pop from Makuluwa, Galle.</p><p>Independent by nature. Collaborative by design. Every project starts with the artist and what they want the world to hear.</p><div className="producer-sign">DINESH HEMANTHA <span>PRODUCER / COMPOSER / ARTIST</span></div><a className="line-link" href="https://www.instagram.com/dhwavemusic/" target="_blank" rel="noreferrer">FOLLOW THE WORK <Icon name="arrow"/></a></div></section>
      <section className="contact section-pad" id="contact"><div className="section-top enter"><div><span className="section-no">04 / START SOMETHING</span><h2>LET'S GET<br/><span>TO WORK.</span></h2></div><p>Got a song, a session idea or a visual project? Send the details directly to the studio.</p></div><div className="contact-grid"><BookingWizard />
        <div className="contact-details enter"><div className="map-wrap"><iframe title="DH Wave Music location, Makuluwa Galle" loading="lazy" src="https://maps.google.com/maps?q=6.0396495,80.2340348&z=15&output=embed" referrerPolicy="no-referrer-when-downgrade"/></div><div className="address-row"><Icon name="pin"/><div><span>COME THROUGH</span><strong>Makuluwa Junction, Galle 80000</strong><small>Southern Province, Sri Lanka</small></div></div><a className="contact-row" href="https://wa.me/94778300694"><span>WHATSAPP / PHONE</span><strong>+94 77 830 0694</strong></a><a className="contact-row" href="mailto:dh.wavemusic@gmail.com"><span>EMAIL</span><strong>dh.wavemusic@gmail.com</strong></a><a className="map-link" href="https://www.google.com/maps?q=6.0396495,80.2340348" target="_blank" rel="noreferrer">OPEN MAPS <Icon name="arrow"/></a></div></div></section>
    </main>
    <AudioDock tracks={tracks} />
    <footer className="footer"><div className="footer-main"><a className="footer-logo" href="#home">DH<span>WAVE</span><sup>®</sup></a><p>INDEPENDENT SOUND.<br/>SOUTHERN ROOTS.</p><div className="footer-social"><a href="https://www.youtube.com/@DHWaveMusicOfficial" target="_blank" rel="noreferrer">YOUTUBE</a><a href="https://www.instagram.com/dhwavemusic/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://www.facebook.com/DHWave/" target="_blank" rel="noreferrer">FACEBOOK</a><a href="https://www.tiktok.com/@dhwavemusic" target="_blank" rel="noreferrer">TIKTOK</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} DH WAVE MUSIC. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP</a><span>GALLe / SRI LANKA</span></div></footer>
    <Suspense fallback={null}><VideoModal track={activeTrack} onClose={() => setActiveTrack(null)} /></Suspense>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
