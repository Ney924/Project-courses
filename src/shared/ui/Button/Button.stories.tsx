import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: ThemeButton,
    children: React.Children,
    className: CSS,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Button",
  },
};
export const Red: Story = {
  args: {
    theme: ThemeButton.RED,
    children: "Button",
  },
};
