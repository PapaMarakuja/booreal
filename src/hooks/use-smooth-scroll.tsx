// Este hook foi modificado para não depender mais do Lenis

export function useSmoothScroll() {
  const scrollTo = (target: string | HTMLElement, options?: { offset?: number, duration?: number }) => {
    const element = typeof target === 'string'
      ? document.getElementById(target)
      : target;

    if (!element) return;

    // Implementação básica de scroll sem o Lenis
    const offset = options?.offset ?? -80;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return { scrollTo };
}