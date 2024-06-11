import type { Meta, StoryObj, Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    label: { control: 'text' },
  }
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  backgroundColor: 'blue',
  color: 'white',
}