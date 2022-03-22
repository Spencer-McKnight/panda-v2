import Header from "components/header";
import { render, screen } from '@testing-library/react';

it("renders with no errors", () => {
    render(<Header />)
    expect(screen.getByTestId("header")).toBeInTheDocument();
})