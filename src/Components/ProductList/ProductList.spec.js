import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../Context';
import ProductList from './index';

const Wrapper = () => {
    return(
        <Provider>
            <ProductList />
        </Provider>
    )
}

describe('ProductLis Component', () => {
    it('should render table', () => {
        render(<Wrapper />);
        const TableElement = screen.getByTestId('productlist');
        expect(TableElement).toBeInTheDocument();
    });

    describe('render a table with 4 heading' , () => {
        it('should render heading with a text of product', () => {
            render(<Wrapper />);
            const productlist_table_heading = screen.getByRole("columnheader", {name: 'Product'});
            expect(productlist_table_heading).toContainHTML('th');
        })
        it('should render heading with a text of price', () => {
            render(<Wrapper />);
            const productlist_table_heading = screen.getByRole("columnheader", {name: 'Price'});
            expect(productlist_table_heading).toContainHTML('th');
        })
        it('should render heading with a text of Qauntity', () => {
            render(<Wrapper />);
            const productlist_table_heading = screen.getByRole("columnheader", {name: 'Quantity'});
            expect(productlist_table_heading).toContainHTML('th');
        })
        it('should render heading with a text of Cost', () => {
            render(<Wrapper />);
            const productlist_table_heading = screen.getByRole("columnheader", {name: 'Cost'});
            expect(productlist_table_heading).toContainHTML('th');
        })
    })
})
