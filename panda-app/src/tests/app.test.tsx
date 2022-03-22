import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/app';

const testFetchObj: DonationEntry[] = [{
    amount: "255",
    date: "2022-02-28T16:51:31.953Z",
    donor: 12345,
    isPublic: true
}, {
    amount: "100",
    date: "2023-02-28T16:51:31.953Z",
    donor: 12346,
    isPublic: true
}]

//displays content after data is fetched
it("displays content after data is fetched", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve(testFetchObj)
        })) as jest.Mock)

    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => { render(<App />) });

    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    fetchMock.mockRestore();
})

//displays loading before content is loaded
it("displays loading... in initial state", () => {
    render(<App />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByTestId("content")).not.toBeInTheDocument();
})


//displays loading before content is loaded
// it("displays loading... before content is loaded", () => {
//     const fetchMock = jest.spyOn(global, "fetch").mockImplementation()

//     render(<App />)
//     expect(screen.getByText("Loading...")).toBeInTheDocument();

//     fetchMock.mockClear();
// })

//test if loading is removed from dom

//test that data is displayed 

//removes loading text and displays new data
// it("removes loading text and displays fetched data", async () => {
// })


    // const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(testPromise,));

    // eslint-disable-next-line testing-library/no-unnecessary-act
    // await act(async () => { render(<App />) });

    // await new Promise((r) => setTimeout(r, 9000));
    // await waitForElementToBeRemoved(screen.queryByText("Loading..."), { timeout: 9000 })
    // expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    // await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));



    // expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    // render(<App />);
    // expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    // expect(await screen.findByTestId("content")).toBeInTheDocument();
    // expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();



// import { TableState, Action } from '../types/types';

// const mockTable: TableState = {
//     loading: false,
//     data: [{
//         amount: "255",
//         date: "2022-02-28T16:51:31.953Z",
//         donor: 12345,
//         isPublic: true
//     }, {
//         amount: "230",
//         date: "2022-01-28T16:51:31.953Z",
//         donor: 12346,
//         isPublic: true
//     }, {
//         amount: "190",
//         date: "2022-03-28T16:51:31.953Z",
//         donor: 12347,
//         isPublic: false
//     }, {
//         amount: "10",
//         date: "2022-04-28T16:51:31.953Z",
//         donor: 12348,
//         isPublic: true
//     }, {
//         amount: "40",
//         date: "2022-05-28T16:51:31.953Z",
//         donor: 12349,
//         isPublic: false
//     }, {
//         amount: "1300",
//         date: "2022-06-28T16:51:31.953Z",
//         donor: 12340,
//         isPublic: true
//     }
//     ]
// }

//test if content loads when data loads

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