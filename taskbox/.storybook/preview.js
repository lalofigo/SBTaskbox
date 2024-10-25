/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tag: ['autodocs'],
};

export default preview;
