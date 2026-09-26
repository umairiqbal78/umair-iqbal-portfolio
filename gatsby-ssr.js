/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

// Sets data-theme="dark" before first paint if the visitor previously chose dark mode,
// so the page never flashes light-then-dark on load. Default (no stored value) stays light.
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-init',
      dangerouslySetInnerHTML: {
        __html: `(function () {
          try {
            var theme = window.localStorage.getItem('theme');
            if (theme === 'dark') {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        })();`,
      },
    }),
  ]);
};
