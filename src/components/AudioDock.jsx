import React, { useState } from 'react';
export default function AudioDock({ tracks }) {
  const [selected, setSelected] = useState(null);
  const [minimized, setMinimized] = useState(false);
  const startTrack = track => { setSelected(track); setMinimized(false); };
  const embedUrl = selected ? 'https://www.youtube-nocookie.com/embed/' + selected.id + '?autoplay=1&controls=1&rel=0&playsinline=1' : '';
  return <aside className={'audio-dock ' + (minimized ? 'is-minimized' : '')} aria-label="Persistent studio player">
    <div className="audio-dock-label"><span className="audio-eq" aria-hidden="true"><i/><i/><i/><i/></span><span>DH WAVE / PLAYER</span><button type="button" className="dock-minimize" onClick={() => setMinimized(v => !v)} aria-label={minimized ? 'Expand player' : 'Minimize player'}>{minimized ? '+' : '−'}</button></div>
    {selected ? <div className="audio-dock-active"><div className="audio-dock-art"><img src={'https://i.ytimg.com/vi/' + selected.id + '/default.jpg'} alt="" loading="lazy"/></div><div className="audio-dock-track"><strong>{selected.title}</strong><span>{selected.artists}</span><small>YOUTUBE STREAM</small></div><button className="dock-change" type="button" onClick={() => setSelected(null)}>CHANGE</button><iframe key={selected.id} title={selected.title + ' YouTube player'} src={embedUrl} allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" loading="lazy" allowFullScreen /></div> : <div className="audio-dock-empty"><div><strong>KEEP THE SOUND ON.</strong><span>Choose a release to start a YouTube stream.</span></div><div className="dock-track-picker">{tracks.slice(0,3).map(track => <button key={track.id} type="button" onClick={() => startTrack(track)}>{track.title}<span>PLAY</span></button>)}</div></div>}
    {!selected && <span className="audio-dock-note">VIDEO PLAYER LOADS ONLY AFTER YOU CHOOSE A TRACK</span>}
  </aside>;
}