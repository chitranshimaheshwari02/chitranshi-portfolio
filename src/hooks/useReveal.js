import { useEffect, useRef } from "react";

/**
 * Adds an "is-visible" class to the element once it scrolls into view.
 * Pair with the `reveal` mixin / class in SCSS for a fade + rise animation.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
