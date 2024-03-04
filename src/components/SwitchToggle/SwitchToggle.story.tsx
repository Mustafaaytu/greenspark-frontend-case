import { Meta, StoryFn } from '@storybook/react';
import { SwitchToggle, SwitchToggleProps } from './SwitchToggle';

const meta: Meta<SwitchToggleProps> = {
  title: 'Components/SwitchToggle',
  component: SwitchToggle,
  argTypes: {
    inputLabel: { control: 'text' },
    inputLabelPosition: {
      control: { type: 'select', options: ['left', 'top', 'right', 'bottom'] },
    },
    size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] } }, // Assuming your component has a 'size' prop
    disabled: { control: 'boolean' },
  },
};

const Template: StoryFn<SwitchToggleProps> = (args) => <SwitchToggle {...args} />;

export default meta;

export const Default: StoryFn<SwitchToggleProps> = Template.bind({});
Default.args = {
  inputLabel: 'Switch Label',
  inputLabelPosition: 'right',
  disabled: false,
};

export const TopInputLabel: StoryFn<SwitchToggleProps> = Template.bind({});
TopInputLabel.args = {
  ...Default.args,
  inputLabelPosition: 'top',
};

export const Disabled: StoryFn<SwitchToggleProps> = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
