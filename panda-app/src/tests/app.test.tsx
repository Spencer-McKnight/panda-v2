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

// displays content after data is fetched
it("displays content after data is fetched", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve(testFetchObj)
        } as Response)))

    render(<App />);

    // test initial state
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // await fetch to be called
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    // test loaded state
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();

    fetchMock.mockRestore();
})