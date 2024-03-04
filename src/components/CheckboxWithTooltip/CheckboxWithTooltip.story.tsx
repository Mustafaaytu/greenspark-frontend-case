import { Meta, StoryFn } from '@storybook/react';
import { CheckboxWithTooltip, CheckboxWithTooltipProps } from './CheckboxWithTooltip';

// Define the meta information about the component
const meta: Meta<CheckboxWithTooltipProps> = {
  title: 'Components/CheckboxWithTooltip',
  component: CheckboxWithTooltip,
  argTypes: {
    inputLabel: { control: 'text' },
    inputLabelPosition: {
      control: { type: 'select', options: ['left', 'top', 'right', 'bottom'] },
    },
    size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] } },
    disabled: { control: 'boolean' },
  },
};

// Define the reusable template for rendering the component
const Template: StoryFn<CheckboxWithTooltipProps> = (args) => <CheckboxWithTooltip {...args} />;

export default meta;

// Define individual stories with different props
export const Default: StoryFn<CheckboxWithTooltipProps> = Template.bind({});
Default.args = {
  inputLabel: 'Checkbox Label',
  inputLabelPosition: 'left',
  disabled: false,
};

export const TopInputLabel: StoryFn<CheckboxWithTooltipProps> = Template.bind({});
TopInputLabel.args = {
  ...Default.args,
  inputLabelPosition: 'top',
};

export const Disabled: StoryFn<CheckboxWithTooltipProps> = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
