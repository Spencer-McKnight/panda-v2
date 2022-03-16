/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from '../components/table';

import { TableProps } from '../types/types';

const testTable: TableProps = {
    loading: false,
    data: [{
        amount: "255",
        date: "2022-02-28T16:51:31.953Z",
        donor: 12345,
        isPublic: true
    }]
}

it('renders data with no error displayed', () => {
    const { container } = render(<Table {...testTable} />)
    screen.getByRole('table')
    expect(screen.getByText('Donation History')).toBeInTheDocument();
    expect(container.querySelector(`.table`)).toBeInTheDocument();
    expect(container.querySelector(`.table__row`)).toBeInTheDocument()
    expect(container.querySelector(`.table__header-row`)).toBeInTheDocument()
    expect(container.querySelector(`.table__body`)).toBeInTheDocument()
    expect(container.querySelector(`.table__title`)).toBeInTheDocument()
    //no error displayed
    expect(container.querySelector(`.err-message`)).not.toBeInTheDocument()
})