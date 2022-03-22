import Logo from 'components/logo';
import { Props } from 'components/logo';
import { render, screen } from '@testing-library/react';

const testLogo: Props = {
    text: "test logo text"
}

it("renders with no errors", () => {
    render(<Logo {...testLogo} />)
    expect(screen.getByText(testLogo.text as any)).toBeInTheDocument();
})