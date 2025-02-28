import type { Preview } from "@storybook/react";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="app">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
