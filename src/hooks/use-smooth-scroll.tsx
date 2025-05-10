import { useLenis } from '../components/smooth-scroll/lenis-provider';

export function useSmoothScroll() {
  const { lenis } = useLenis();

  const scrollTo = (target: string | HTMLElement, options?: { offset?: number, duration?: number }) => {
    if (!lenis) return;

    const element = typeof target === 'string'
      ? document.getElementById(target)
      : target;

    if (!element) return;

    lenis.scrollTo(element, {
      offset: options?.offset ?? -80,
      duration: options?.duration ?? 1.2,
    });
  };

  return { scrollTo };
}