import { filterData } from "utils/filterData";

const testTable: DonationEntry[] =
    [{
        amount: "255",
        date: "2022-02-28T16:51:31.953Z",
        donor: 12345,
        isPublic: true
    }, {
        amount: "230",
        date: "2022-01-28T16:51:31.953Z",
        donor: 12346,
        isPublic: false
    }, {
        amount: "190",
        date: "2022-03-28T16:51:31.953Z",
        donor: 12347,
        isPublic: true
    }
    ]

const filterTable: DonationEntry[] =
    [{
        amount: "255",
        date: "2022-02-28T16:51:31.953Z",
        donor: 12345,
        isPublic: true
    }, {
        amount: "190",
        date: "2022-03-28T16:51:31.953Z",
        donor: 12347,
        isPublic: true
    }
    ]


it('filters out data that is not public', () => {
    expect(filterData(testTable)).toEqual(filterTable);
})