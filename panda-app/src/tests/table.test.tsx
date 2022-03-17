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
    render(<Table {...testTable} />)
    expect(screen.getByText('Donation History')).toBeInTheDocument();
    expect(screen.getByText('$255')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('28/02/2022')).toBeInTheDocument();
})