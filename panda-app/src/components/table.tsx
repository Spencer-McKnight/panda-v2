import React from 'react';
import styled from 'styled-components';

import { TableProps } from 'types/types';

const StyledTable = styled.table`
    border: 1px solid #ddd;
    width: 100%;

    th {
        padding: 6px;
        border: 1px solid #ddd;
        color: white;
        background-color: black;
    }

    td {
        padding: 6px;
        border: 1px solid #ddd;
    }   
`;

interface DataProp {
    loading: false,
    data: DonationEntry[]
}

interface ErrProp {
    loading: false,
    error: string
}

export const isoToDMY: (isoDate: string) => string = (isoDate: string) => {
    const formattedDate = isoDate.replace(/T.*/, '').split('-').reverse().join('/')
    return formattedDate;
}

const getTableHTML: (arg0: DonationEntry[]) => JSX.Element = (dataset: DonationEntry[]) => {
    const listNodes = dataset.map(function (item, i) {
        return <tr key={i}><td>{isoToDMY(item.date)}</td><td>{item.donor}</td><td>${item.amount}</td></tr>
    })

    return <div data-testid="table"><h3>Donation History</h3><StyledTable><tbody><tr><th>Date</th><th>Donor ID</th><th>Amount</th></tr>{listNodes}</tbody></StyledTable></div>;;
}

const Table: React.FC<TableProps> = (props) => {
    //unsure about implementation of props as x to avoid type error
    if (props.hasOwnProperty('error')) {
        return (<h2 data-testid="error-msg">The following error has occurred: {(props as ErrProp).error}</h2>)
    } else {
        const tableHTML = getTableHTML((props as DataProp).data);
        return (tableHTML)
    }
}

export default Table