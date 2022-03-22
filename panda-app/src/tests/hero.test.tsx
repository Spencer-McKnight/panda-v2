import Hero from "components/hero";
import { Props } from "components/hero";
import { render, screen } from '@testing-library/react';

const testHero: Props = {
    imgSrc: "./test-file-stub.png/",
    altText: "test alt text"
}

it("renders with no errors", () => {
    render(<Hero {...testHero} />);
    const image = screen.getByAltText(testHero.altText)
    expect(image).toHaveAttribute("src", testHero.imgSrc)
})