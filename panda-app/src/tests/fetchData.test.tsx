import fetchData from "utils/fetchData";
import { Action } from "types/types";

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

const testFetchError: object = { error: "A test error has occurred." };

const donePromise: Promise<Action> = new Promise(() => { return { type: "success", dataset: testFetchObj } });

const failPromise: Promise<Action> = new Promise(() => { return { type: "failure", errorMsg: testFetchError } });

it('returns successful and data when data is retrieved', () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve(testFetchObj)
        } as Response)))
    expect(fetchData()).toEqual(donePromise);
    fetchMock.mockRestore();
})

it('returns failure and error type when data is retrieved', () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve(testFetchError)
        } as Response)))
    expect(fetchData()).toEqual(failPromise);
    fetchMock.mockRestore();
})

