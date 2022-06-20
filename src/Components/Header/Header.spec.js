import React from "react";
import Header from './index';

import { render , screen } from "@testing-library/react";

function renderPlayerComponent(arg){
    let defaultProps = {
        text: 'Review Your Order &amp; Complete Check Out'
    }

    const props = {...defaultProps, ...arg};
    return render(<Header {...props} />)
}

describe('Header component' , () => {
    it('should render heading using h1 tag', () => {
        renderPlayerComponent();
        const headerElement = screen.getByText("Review Your Order &amp; Complete Check Out");
        expect(headerElement).toContainHTML("h1");
    });

    it('should display same text pass to text props', () => {
        renderPlayerComponent();
        const headerElement = screen.getByRole("heading", {name: "Review Your Order &amp; Complete Check Out" });
        expect(headerElement).toBeInTheDocument();
    });
})
