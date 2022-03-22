import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/donate-button';
import { Props } from '../components/donate-button';

export default {
    title: 'Example/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const button = { link: "#", class: "test-class" }

const buttonProps: Props = {
    button: button,
    text: "Test Button"
}

export const Default = Template.bind({});
Default.args = buttonProps;

const targetButtonProps: Props = {
    button: { ...button, target: "_blank" },
    text: "Test Button",
}

export const NewPage = Template.bind({});
NewPage.args = targetButtonProps;