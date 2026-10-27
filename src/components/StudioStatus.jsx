import React, { useEffect, useState } from 'react';
// Confirm these hours with the studio owner before launch.
const OPEN_HOUR = 10;
const CLOSE_HOUR = 22;
function sriLankaHour() {
  return Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', hourCycle: 'h23' }).format(new Date()));
}
export default function StudioStatus() {
  const [hour, setHour] = useState(sriLankaHour);
  useEffect(() => { const timer = window.setInterval(() => setHour(sriLankaHour()), 60000); return () => window.clearInterval(timer); }, []);
  const isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR;
  return <span className={'studio-status ' + (isOpen ? 'is-open' : 'is-closed')} title="Live status based on Sri Lanka Standard Time"><i aria-hidden="true" />{isOpen ? 'STUDIO OPEN' : 'STUDIO CLOSED'}<small>SLST</small></span>;
}