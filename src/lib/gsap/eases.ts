'use client';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

CustomEase.create('vanguard.out', '0.16, 1, 0.3, 1');
CustomEase.create('vanguard.inOut', '0.65, 0, 0.35, 1');
CustomEase.create('vanguard.expo', '0.19, 1, 0.22, 1');

export { CustomEase };
