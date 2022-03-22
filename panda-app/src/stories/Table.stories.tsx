import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '../components/table';

export default {
    title: 'Example/Table',
    component: Table
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Loaded = Template.bind({});
Loaded.args = {
    loading: false,
    data: [{
        amount: "255",
        date: "2022-02-28T16:51:31.953Z",
        donor: 12345,
        isPublic: true
    }, {
        amount: "230",
        date: "2022-01-28T16:51:31.953Z",
        donor: 12346,
        isPublic: true
    }, {
        amount: "190",
        date: "2022-03-28T16:51:31.953Z",
        donor: 12347,
        isPublic: true
    }
    ]
}

export const Error = Template.bind({});
const errMsg: string = "This is a test error message property"
Error.args = {
    loading: false,
    error: errMsg
}