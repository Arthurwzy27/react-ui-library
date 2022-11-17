// import '../src/index.css';

// <--- The following two lines are critical too. You should make sure you don't process an already processed CSS once more or else you'll get the 'unknown word var' error.

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
