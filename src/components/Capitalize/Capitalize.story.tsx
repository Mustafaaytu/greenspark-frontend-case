import type { Meta, StoryObj } from '@storybook/react';

import { Capitalize } from './Capitalize';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Capitalize> = {
  component: Capitalize,
};

export default meta;
type Story = StoryObj<typeof Capitalize>;

export const FirstStory: Story = {
  args: {
    value: 'hello_world',
  },
};

export const SecondStory: Story = {
  args: {
    value: 'Selam Dünya',
    lowerRest: false,
  },
};
