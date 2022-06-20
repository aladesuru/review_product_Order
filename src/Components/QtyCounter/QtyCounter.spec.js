import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Provider from '../Context';
import QtyCounter from './index';


const Wrapper = () => {
    return(
        <Provider>
            <QtyCounter quantity={2} orderIndex={1}/>
        </Provider>
    )
}

describe('QtyComponent', () => {
    it('should display initial value of quantity when component load to be 2', () => {
        render(<Wrapper />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement.value).toEqual('2');
    })
    it('should set quantity value to 0 when quantity is not whole numbers from 1 to 10', () => {
        render(<Wrapper />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: {value:'11'}});
        expect(inputElement.value).toEqual('0');

    })
    it('quantity value should increase when plus button is press', () => {
        render(<Wrapper />);
        const inputElement = screen.getByRole('textbox');
        const plusButton = screen.getByRole("button", {name: '+'});
        fireEvent.click(plusButton);
        expect(inputElement.value).toEqual('3');

    })
    it('quantity value should decrease when minus button is press', () => {
        render(<Wrapper />);
        const inputElement = screen.getByRole('textbox');
        const plusButton = screen.getByRole("button", {name: '-'});
        fireEvent.click(plusButton);
        expect(inputElement.value).toEqual('1');

    })
    it('should change when user type in quantity value', () => {
        render(<Wrapper />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, {target: {value:'4'}});
        expect(inputElement.value).toEqual('4');
    })
    it('should have 2 button', () => {
        render(<Wrapper />);
        const buttoElements = screen.getAllByRole('button');
        expect(buttoElements.length).toBe(2);
    })
})