import { fetchData } from "utils/fetchData";

const testFetchObj = [{
    amount: "255",
    date: "2022-02-28T16:51:31.953Z",
    donor: 12345,
    isPublic: true
}]

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve(testFetchObj),
//     }),
// ) as jest.Mock;

// beforeEach(() => {
//     fetch.mockClear();
// });

// const fetchMock = jest.spyOn(global, 'fetch').mock

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ test: 100 }),
//     }),
// ) as jest.Mock;

// it('outputs successful case when data is input', () => {
//     expect(fetchData()).toBeCalled();
// })

