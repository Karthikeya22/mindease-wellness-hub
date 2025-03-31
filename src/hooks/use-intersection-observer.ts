
import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: IntersectionObserverOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    const shouldFreeze = freezeOnceVisible && isIntersecting && hasIntersected;
    
    if (!node || shouldFreeze) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
}
