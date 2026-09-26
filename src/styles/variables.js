import { css } from 'styled-components';

// Color roles keep their original names (--navy, --slate, --green, etc.) so the rest of
// the codebase doesn't need touching, but the values below are Umair's light/dark palette
// instead of the template's default navy/teal scheme.
const variables = css`
  :root {
    /* Light theme (default) */
    --dark-navy: #ede9e3;
    --navy: #faf9f7;
    --light-navy: #f2f0eb;
    --lightest-navy: #e3e1dc;
    --navy-shadow: rgba(28, 27, 31, 0.1);
    --dark-slate: #b9b6c2;
    --slate: #5b5966;
    --light-slate: #46444f;
    --lightest-slate: #2a2830;
    --white: #1c1b1f;
    --green: #36cd4dff;
    --green-tint: rgba(100, 255, 121, 0.08);
    --pink: #d6409f;
    --blue: #2563eb;
    --nav-bg: rgba(250, 249, 247, 0.85);

    --button-bg: #80e28e; /* softer, less vibrant green for light mode */
    --button-text: #1c1b1f; /* dark text for contrast */
    --button-border: #80e28e;
    --button-hover-bg: #6bcf7a;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  html[data-theme='dark'] {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.2);
    --nav-bg: rgba(10, 25, 47, 0.85);

    --button-bg: transparent;
    --button-text: var(--green);
    --button-border: var(--green);
    --button-hover-bg: var(--green-tint);
  }
`;

export default variables;
