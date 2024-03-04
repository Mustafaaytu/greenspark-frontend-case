import { Meta, StoryFn } from '@storybook/react';
import { ColorSwatchCheckbox, ColorSwatchCheckboxProps } from './ColorSwatchCheckbox';

const meta: Meta<ColorSwatchCheckboxProps> = {
  title: 'Components/ColorSwatchCheckbox',
  component: ColorSwatchCheckbox,
  argTypes: {
    color: { control: 'color' },
    checked: { control: 'boolean' },
    checkBoxColor: { control: 'color' },
  },
};

const Template: StoryFn<ColorSwatchCheckboxProps> = (args) => <ColorSwatchCheckbox {...args} />;

export default meta;

export const Default: StoryFn<ColorSwatchCheckboxProps> = Template.bind({});
Default.args = {
  color: '#FF5733',
  onClick: (color: string) => console.log(`Clicked color: ${color}`),
};

export const Checked: StoryFn<ColorSwatchCheckboxProps> = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const CustomCheckBoxColor: StoryFn<ColorSwatchCheckboxProps> = Template.bind({});
CustomCheckBoxColor.args = {
  ...Default.args,
  checkBoxColor: '#000',
};
