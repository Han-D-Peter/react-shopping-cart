import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { router } from "../../../main";
import { RouterProvider } from "@tanstack/react-router";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Header",
  decorators: (Story) => {
    return (
      <RouterProvider router={router} defaultComponent={() => <Story />} />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
