import Content from "components/content";
import { render, screen } from '@testing-library/react';
import { TableProps } from "types/types";

const testTable: TableProps = {
    loading: false,
    data: [{
        amount: "255",
        date: "2022-02-28T16:51:31.953Z",
        donor: 12345,
        isPublic: true
    }
    ]
}

it("renders with no errors", () => {
    render(<Content {...testTable} />)
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByText(/donating now/i)).toBeInTheDocument();
})