import { getImage } from 'astro:assets';
import posterSrc from '../assets/images/hero-poster.jpg';

// Shared by Hero.astro (the <video poster>) and the page <head> (the preload),
// so both point at the exact same optimized file.
export const heroPoster = () => getImage({ src: posterSrc, width: 1600, format: 'webp', quality: 70, layout: 'none' });

export const heroVideoSrc = '/video/hero-bg.mp4';
