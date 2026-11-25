'use client'
import { useEffect } from 'react'

// Fades in every element marked `data-reveal` when it scrolls into view.
// Hiding happens here (not in the HTML), so content still shows if JS never runs.
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.dataset.reveal = 'shown';
        io.unobserve(e.target);
      }
    }), { threshold: 0.15 });

    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.dataset.reveal = 'hidden';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
