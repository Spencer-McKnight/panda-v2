import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/app';
import { TableState } from '../types/types';

const mockTable: TableState = {
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
        isPublic: false
    }, {
        amount: "10",
        date: "2022-04-28T16:51:31.953Z",
        donor: 12348,
        isPublic: true
    }, {
        amount: "40",
        date: "2022-05-28T16:51:31.953Z",
        donor: 12349,
        isPublic: false
    }, {
        amount: "1300",
        date: "2022-06-28T16:51:31.953Z",
        donor: 12340,
        isPublic: true
    }
    ]
}

//test if content loads when data loads


//test if data is sorting public and private donations
it('hides private donations', async () => {
    render(<App />);

    await screen.findByText("Loading...");
});

//test if loading... is displayed while data is loading








// render(<Table {...testTable} />);

// expect(screen.getByText('Donation History')).not.toBeInTheDocument();

// testTable.data.forEach((donation) => {
//     const DMY = isoToDMY(donation.date);
//     expect(screen.getByText("$" + donation.amount)).toBeInTheDocument();
//     expect(screen.getByText(donation.donor)).toBeInTheDocument();
//     expect(screen.getByText(DMY)).toBeInTheDocument();
// })

// it('renders data with no error displayed', () => {
//     render(<Table {...testTable} />);

//     expect(screen.getByText('Donation History')).toBeInTheDocument();

//     testTable.data.forEach((donation) => {
//         const DMY = isoToDMY(donation.date);
//         expect(screen.getByText("$" + donation.amount)).toBeInTheDocument();
//         expect(screen.getByText(donation.donor)).toBeInTheDocument();
//         expect(screen.getByText(DMY)).toBeInTheDocument(); 
//     })
// })