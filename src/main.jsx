import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const tracks = [
  { title: 'SILENT', artists: 'Avatar Shark × Dinesh Hemantha', id: 'yOHy7LDLUjQ', tag: '01 / RAP', color: 'lime', note: '2026 · SINGLE' },
  { title: 'KARADIYA', artists: 'M Thila ft. Avatar Shark', id: 'rXbOxPvBzDI', tag: '02 / RAP', color: 'red', note: '2026 · MUSIC VIDEO' },
  { title: 'WANSHE', artists: 'Chama Music ft. Dinesh Hemantha', id: 'HMX2k59Mi-Y', tag: '03 / HIP-HOP', color: 'cream', note: '2023 · SINGLE' },
  { title: 'ALIYA', artists: 'DH Wave Music', id: '0zHZX9a_kKI', tag: '04 / VISUAL', color: 'purple', note: 'OFFICIAL VIDEO' }
];
const services = [
  ['01', 'Record', 'Vocal recording built around the artist. Solo sessions, features and group takes.'],
  ['02', 'Produce', 'Original beats, trap, hip-hop, arrangements and complete song production.'],
  ['03', 'Finish', 'Mixing and mastering with a release-ready focus across streaming platforms.'],
  ['04', 'Shoot', 'Music videos, commercial visuals, editing and colour finishing.'],
  ['05', 'Release', 'Independent label support and digital distribution for your next drop.']
];
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
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll('.enter');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('shown'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const msg = [
      'Hi DH Wave Music, I want to enquire about a studio session.',
      'Name: ' + data.get('name'),
      'Service: ' + data.get('service'),
      'Preferred date: ' + (data.get('date') || 'Flexible'),
      'Preferred time: ' + (data.get('time') || 'Flexible'),
      'Project: ' + (data.get('details') || 'Not provided')
    ].join('\n');
    setSent(true);
    window.open('https://wa.me/94778300694?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
  };
  return <>
    <div className="ticker"><div className="ticker-run"><span>DH WAVE MUSIC®</span><b>INDEPENDENT SOUND FROM THE SOUTH</b><span>DH WAVE MUSIC®</span><b>GALLe · SRI LANKA</b><span>DH WAVE MUSIC®</span><b>INDEPENDENT SOUND FROM THE SOUTH</b></div></div>
    <header className="header">
      <a className="wordmark" href="#home">DH<span>WAVE</span><sup>®</sup></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}><a onClick={() => setMenu(false)} href="#releases">Releases</a><a onClick={() => setMenu(false)} href="#studio">The studio</a><a onClick={() => setMenu(false)} href="#about">About</a><a onClick={() => setMenu(false)} href="#contact">Contact</a></nav>
      <a className="header-book" href="#contact">BOOK A SESSION</a>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><Icon name="menu"/></button>
    </header>
    <main id="home">
      <section className="hero">
        <div className="hero-grain"></div>
        <div className="hero-copy">
          <div className="kicker"><span className="live"></span> STUDIO / LABEL / VISUALS <span className="kicker-place">06°02'23.0"N 80°14'02.5"E</span></div>
          <h1>MAKE<br/>NOISE<span className="period">.</span><br/><span className="outline-word">MAKE</span><br/><span className="lime-word">WAVES.</span></h1>
          <div className="hero-bottom"><p>Independent music production from Galle, Sri Lanka. Built for artists with something to say.</p><a className="round-link" href="#releases" aria-label="Explore releases"><span>EXPLORE<br/>THE SOUND</span><b>+</b></a></div>
        </div>
        <div className="hero-photo" role="img" aria-label="SILENT music video artwork">
          <img src="https://i.ytimg.com/vi/yOHy7LDLUjQ/maxresdefault.jpg" alt="SILENT music video by Avatar Shark and Dinesh Hemantha" fetchPriority="high"/>
          <div className="photo-shade"></div><div className="photo-index">DHWM / VISUAL ARCHIVE / 026</div>
          <button className="hero-play" onClick={() => setActiveTrack(tracks[0])} aria-label="Play SILENT video"><Icon name="play"/></button>
          <div className="photo-caption"><span>NOW IN ROTATION</span><strong>SILENT</strong><small>AVATAR SHARK × DINESH HEMANTHA</small></div>
        </div>
        <div className="hero-stamp">SOUTH<br/>SIDE<br/><span>STUDIO</span></div>
        <div className="hero-foot"><span>RECORD IT. OWN IT. RELEASE IT.</span><span>GALLe, SRI LANKA / EST. INDEPENDENT</span></div>
      </section>
      <section className="proof"><div className="proof-label">THE WORK<br/>SPEAKS</div><div className="proof-stat"><strong>2M<span>+</span></strong><small>SILENT VIDEO VIEWS<br/>REPORTED</small></div><div className="proof-stat"><strong>24K<span>+</span></strong><small>YOUTUBE COMMUNITY<br/>CHANNEL FIGURE</small></div><div className="proof-stat"><strong>01<span> /</span></strong><small>INDEPENDENT<br/>SOUTHERN ROOTS</small></div><a href="https://www.youtube.com/@DHWaveMusicOfficial" target="_blank" rel="noreferrer" className="proof-link">SEE THE CHANNEL <Icon name="arrow"/></a></section>
      <section className="releases section-pad" id="releases">
        <div className="section-top enter"><div><span className="section-no">01 / SELECTED WORK</span><h2>OUT IN<br/><span>THE WORLD.</span></h2></div><p>Records, visuals and collaborations from the DH Wave orbit. Tap a cover to watch the official video.</p></div>
        <div className="release-grid">{tracks.map((track, i) => <article className={'release-card enter '+track.color} key={track.id}>
          <button className="release-image" onClick={() => setActiveTrack(track)} aria-label={'Play '+track.title}>
            <img src={'https://i.ytimg.com/vi/'+track.id+'/hqdefault.jpg'} alt={track.title+' official music video thumbnail'} loading="lazy"/>
            <span className="release-number">DH / {String(i+1).padStart(2,'0')}</span><span className="release-play"><Icon name="play"/></span><span className="release-tag">{track.tag}</span>
          </button>
          <div className="release-meta"><div><span>{track.note}</span><h3>{track.title}</h3><p>{track.artists}</p></div><button className="text-play" onClick={() => setActiveTrack(track)} aria-label={'Watch '+track.title}>PLAY <Icon name="arrow"/></button></div>
        </article>)}</div>
        <div className="releases-end"><span>NO SHORTCUTS. JUST THE WORK.</span><a href="https://www.youtube.com/@DHWaveMusicOfficial" target="_blank" rel="noreferrer">ALL RELEASES ON YOUTUBE <Icon name="arrow"/></a></div>
      </section>
      <section className="manifesto"><div className="manifesto-side">DH WAVE MUSIC / STUDIO NOTE 001</div><div className="manifesto-main enter"><span className="section-no">NOT A FACTORY. A CREATIVE PARTNER.</span><h2>YOUR SOUND.<br/>YOUR STORY.<br/><span>DONE RIGHT.</span></h2><p>From a rough voice note to a finished release, the studio gives artists a place to shape the idea, capture the performance and get the record out into the world.</p><a className="line-link" href="#contact">TELL US WHAT YOU'RE MAKING <Icon name="arrow"/></a></div><div className="manifesto-art"><div className="big-dh">DH<span>.</span></div><div className="circle-copy">RECORD / PRODUCE / RELEASE / REPEAT /</div></div></section>
      <section className="studio section-pad" id="studio"><div className="section-top enter"><div><span className="section-no">02 / WHAT WE DO</span><h2>FROM FIRST<br/>TAKE TO <span>FINAL.</span></h2></div><p>One place to record, produce, finish and present your next project.</p></div><div className="service-list">{services.map(([num,title,desc])=><article className="service-row enter" key={num}><span className="service-num">{num}</span><h3>{title}</h3><p>{desc}</p><span className="service-plus">+</span></article>)}</div></section>
      <section className="producer" id="about"><div className="producer-image"><div className="producer-image-inner"><span className="portrait-mark">DH</span><span className="portrait-caption">DINESH HEMANTHA / PRODUCER</span></div></div><div className="producer-copy enter"><span className="section-no">03 / THE PERSON BEHIND THE SOUND</span><h2>MADE IN<br/>THE <span>SOUTH.</span></h2><p>Led by Dinesh Hemantha, producer, composer, mix engineer and artist, DH Wave Music works across Sinhala rap, hip-hop, trap and contemporary pop from Makuluwa, Galle.</p><p>Independent by nature. Collaborative by design. Every project starts with the artist and what they want the world to hear.</p><div className="producer-sign">DINESH HEMANTHA <span>PRODUCER / COMPOSER / ARTIST</span></div><a className="line-link" href="https://www.instagram.com/dhwavemusic/" target="_blank" rel="noreferrer">FOLLOW THE WORK <Icon name="arrow"/></a></div></section>
      <section className="contact section-pad" id="contact"><div className="section-top enter"><div><span className="section-no">04 / START SOMETHING</span><h2>LET'S GET<br/><span>TO WORK.</span></h2></div><p>Got a song, a session idea or a visual project? Send the details directly to the studio.</p></div><div className="contact-grid"><form className="booking-form enter" onSubmit={submit}><div className="form-title"><span>SESSION ENQUIRY</span><span>FORM / 001</span></div><label>Your name<input name="name" placeholder="Artist or contact name" required maxLength="80"/></label><label>What are we making?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Vocal recording</option><option>Beat production</option><option>Recording + mix + master</option><option>Mixing and mastering</option><option>Music video production</option><option>Label and distribution</option><option>Something else</option></select></label><div className="form-row"><label>Preferred date<input name="date" type="date" min={new Date().toLocaleDateString('en-CA')} /></label><label>Time of day<select name="time" defaultValue="Flexible"><option>Flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div><label>Tell us about it<textarea name="details" rows="3" maxLength="350" placeholder="Track idea, number of artists, project details..."/></label><button className="submit-btn" type="submit">{sent ? 'OPEN WHATSAPP AGAIN' : 'SEND ENQUIRY ON WHATSAPP'} <Icon name="arrow"/></button><small className="form-foot">Your message opens in WhatsApp. No form data is stored on this website.</small></form>
        <div className="contact-details enter"><div className="map-wrap"><iframe title="DH Wave Music location, Makuluwa Galle" loading="lazy" src="https://maps.google.com/maps?q=6.0396495,80.2340348&z=15&output=embed" referrerPolicy="no-referrer-when-downgrade"/></div><div className="address-row"><Icon name="pin"/><div><span>COME THROUGH</span><strong>Makuluwa Junction, Galle 80000</strong><small>Southern Province, Sri Lanka</small></div></div><a className="contact-row" href="https://wa.me/94778300694"><span>WHATSAPP / PHONE</span><strong>+94 77 830 0694</strong></a><a className="contact-row" href="mailto:dh.wavemusic@gmail.com"><span>EMAIL</span><strong>dh.wavemusic@gmail.com</strong></a><a className="map-link" href="https://www.google.com/maps?q=6.0396495,80.2340348" target="_blank" rel="noreferrer">OPEN MAPS <Icon name="arrow"/></a></div></div></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="footer-logo" href="#home">DH<span>WAVE</span><sup>®</sup></a><p>INDEPENDENT SOUND.<br/>SOUTHERN ROOTS.</p><div className="footer-social"><a href="https://www.youtube.com/@DHWaveMusicOfficial" target="_blank" rel="noreferrer">YOUTUBE</a><a href="https://www.instagram.com/dhwavemusic/" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://www.facebook.com/DHWave/" target="_blank" rel="noreferrer">FACEBOOK</a><a href="https://www.tiktok.com/@dhwavemusic" target="_blank" rel="noreferrer">TIKTOK</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} DH WAVE MUSIC. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP</a><span>GALLe / SRI LANKA</span></div></footer>
    {activeTrack && <div className="video-modal" role="dialog" aria-modal="true" aria-label={activeTrack.title+' music video'} onClick={() => setActiveTrack(null)}><button className="modal-close" onClick={() => setActiveTrack(null)} aria-label="Close video">CLOSE ×</button><div className="video-box" onClick={e => e.stopPropagation()}><iframe src={'https://www.youtube-nocookie.com/embed/'+activeTrack.id+'?autoplay=1&rel=0'} title={activeTrack.title+' music video'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div><div className="modal-caption"><span>{activeTrack.note}</span><strong>{activeTrack.title}</strong><small>{activeTrack.artists}</small></div></div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
