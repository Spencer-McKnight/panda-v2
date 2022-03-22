import React from "react";
import { Props } from "components/donate-button";
import DonateButton from "components/donate-button";
import { render, screen } from '@testing-library/react';

const testButton = { link: "#", class: "test-class" }

const testButtonProps: Props = {
    button: testButton,
    text: "Test Button"
}

it("renders with no erors", () => {
    render(<DonateButton {...testButtonProps} />);
    expect(screen.getByText(testButtonProps.text)).toBeInTheDocument();
})
