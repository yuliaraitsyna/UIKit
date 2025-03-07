import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    label: "label",
    color: "primary",
    variant: "outlined",
  },
};

export const Secondary: Story = {
  args: {
    label: "label",
    color: "secondary",
    variant: "outlined",
  },
};

export const Plain: Story = {
  args: {
    label: "label",
    color: "plain",
    variant: "outlined",
  },
};

export const PrimaryFilled: Story = {
  args: {
    label: "label",
    color: "primary",
    variant: "filled",
  },
};

export const SecondaryFilled: Story = {
  args: {
    label: "label",
    color: "secondary",
    variant: "filled",
  },
};

export const PlainFilled: Story = {
  args: {
    label: "label",
    color: "plain",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    label: "label",
    color: "primary",
    variant: "outlined",
    disabled: true,
  },
};

export const FilldeDisabled: Story = {
  args: {
    label: "label",
    color: "plain",
    variant: "filled",
    disabled: true,
  },
};
