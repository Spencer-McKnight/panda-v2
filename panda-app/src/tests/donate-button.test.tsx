import React from "react";
import { Props } from "components/donate-button";
import DonateButton from "components/donate-button";
import { render, screen } from '@testing-library/react';

const testButton = { link: "#", class: "test-class", disabled: false }

const testButtonProps: Props = {
    button: testButton,
    text: "Test Button",
    space: "6px",
    color: "#ff3399",
    border: "#ff3399",
}

it("renders with no erors", () => {
    render(<DonateButton {...testButtonProps} />);
    expect(screen.getByText(testButtonProps.text)).toBeInTheDocument();
})
