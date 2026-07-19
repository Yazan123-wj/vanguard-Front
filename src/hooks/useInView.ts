'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends Element = Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, inView };
}
