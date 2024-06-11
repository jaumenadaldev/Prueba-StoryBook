import { Meta, StoryObj, Story } from '@storybook/react';
import { Header } from './Header';
import { Default as ButtonStories } from '../Button/Button.stories';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta<typeof Header>;

export const Template = Story = (args: typeof Button) => <div><Header/><ButtonStories {...args}/></div>

export const Default = Template.bind({})
