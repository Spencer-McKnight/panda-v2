import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/table';
import { TableProps } from '../types/types';

import { isoToDMY } from '../components/table';

const testTable: TableProps = {
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

const errMsg: string = "This is a test error message property"

const testError: TableProps = {
    loading: false,
    error: errMsg
}

//test if loaded correctly with data
it('renders data with no error displayed', () => {
    render(<Table {...testTable} />);

    expect(screen.getByText('Donation History')).toBeInTheDocument();

    testTable.data.forEach((donation) => {
        const DMY = isoToDMY(donation.date);
        expect(screen.getByText("$" + donation.amount)).toBeInTheDocument();
        expect(screen.getByText(donation.donor)).toBeInTheDocument();
        expect(screen.getByText(DMY)).toBeInTheDocument();
    })

    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
});

//test if loading error message when data not displayed
it('renders error message', () => {
    render(<Table {...testError} />)

    expect(screen.getByText("The following error has occurred: " + errMsg)).toBeInTheDocument();

    expect(screen.queryByRole("table")).not.toBeInTheDocument();
});