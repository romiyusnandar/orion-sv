import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback(node) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
    };
  }
});

export const fadeIn = (node: HTMLElement, { delay = 0 } = {}) => {
  return {
    duration: 400,
    delay,
    css: (t: number) => `
      opacity: ${t};
      transform: translateY(${(1 - t) * 20}px);
    `
  };
};

export const fadeScale = (node: HTMLElement, { delay = 0, duration = 400 }) => {
  return {
    delay,
    duration,
    css: (t: number) => `
      opacity: ${t};
      transform: scale(${0.9 + 0.1 * t});
    `
  };
};

export const pageTransition = (node: HTMLElement) => {
  return {
    duration: 300,
    css: (t: number) => `
      opacity: ${t};
      transform: translateY(${(1 - t) * 10}px);
    `
  };
};
