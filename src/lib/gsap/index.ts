'use client';

/**
 * GSAP RULE: Every animation in the app must be written inside
 * useGSAP(() => { ... }, { scope: ref }). This ensures cleanup on
 * unmount and through Next.js route transitions. Never import gsap
 * directly in components — always import from @/lib/gsap.
 */

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import './eases';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

gsap.config({ nullTargetWarn: false });

ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, useGSAP, ScrollTrigger, SplitText };
