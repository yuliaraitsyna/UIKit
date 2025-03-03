import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    variant: "filled",
    size: "small",
    disabled: false,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    variant: "filled",
    size: "small",
    disabled: false,
    children: "Secondary Button",
  },
};

export const Plain: Story = {
  args: {
    color: "plain",
    variant: "filled",
    size: "small",
    disabled: false,
    children: "Plain Button",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    size: "small",
    disabled: false,
    children: "Primary Outlined Button",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    color: "secondary",
    variant: "outlined",
    size: "small",
    disabled: false,
    children: "Secondary Outlined Button",
  },
};

export const PlainOutlined: Story = {
  args: {
    color: "plain",
    variant: "outlined",
    size: "small",
    disabled: false,
    children: "Plain Outlined Button",
  },
};

export const PrimaryText: Story = {
  args: {
    color: "primary",
    variant: "text",
    size: "small",
    disabled: false,
    children: "Primary Text Button",
  },
};

export const SecondaryText: Story = {
  args: {
    color: "secondary",
    variant: "text",
    size: "small",
    disabled: false,
    children: "Secondary Text Button",
  },
};

export const PlainText: Story = {
  args: {
    color: "plain",
    variant: "text",
    size: "small",
    disabled: false,
    children: "Plain Text Button",
  },
};

export const FullWidthPrimary: Story = {
  args: {
    color: "primary",
    variant: "filled",
    size: "small",
    fullWidth: true,
    disabled: false,
    children: "Full Width Primary Button",
  },
};

export const FullWidthSecondary: Story = {
  args: {
    color: "secondary",
    variant: "filled",
    size: "small",
    fullWidth: true,
    disabled: false,
    children: "Full Width Secondary Button",
  },
};

export const FullWidthPlain: Story = {
  args: {
    color: "plain",
    variant: "filled",
    size: "small",
    fullWidth: true,
    disabled: false,
    children: "Full Width Plain Button",
  },
};

export const MediumSize: Story = {
  args: {
    color: "primary",
    variant: "filled",
    size: "medium",
    disabled: false,
    children: "Medium Size Button",
  },
};

export const LargeSize: Story = {
  args: {
    color: "primary",
    variant: "filled",
    size: "large",
    disabled: false,
    children: "Large Size Button",
  },
};

export const DisabledPrimary: Story = {
  args: {
    color: "primary",
    variant: "filled",
    size: "small",
    disabled: true,
    children: "Disabled Primary Button",
  },
};

export const DisabledSecondary: Story = {
  args: {
    color: "secondary",
    variant: "filled",
    size: "small",
    disabled: true,
    children: "Disabled Secondary Button",
  },
};

export const FunctionalButton: Story = {
  args: {
    onClick: () => alert("Button is clicked"),
  },
};
