import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

// component
import Nav from './../Nav';

let container = null;
beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', ()=>{
    render(<Nav />, container);
});

it('renders icons', () => {
    const {getByTestId} = render(<Nav />);
    expect(getByTestId('home-icon')).toBeVisible();
    expect(getByTestId('about-icon')).toBeVisible();
    expect(getByTestId('experience-icon')).toBeVisible();
    expect(getByTestId('services-icon')).toBeVisible();
    expect(getByTestId('contact-icon')).toBeVisible();
});

it("Test if navlinks className is changing when clicked", () => {
    const {getByTestId} = render(<Nav />);
    const button = getByTestId('about-icon');
    expect((button).getAttribute('class')).toMatch('')
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('active');
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('');
});
it("Test if navlinks className is changing when clicked", () => {
    const {getByTestId} = render(<Nav />);
    const button = getByTestId('experience-icon');
    expect((button).getAttribute('class')).toMatch('')
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('active');
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('');
});
it("Test if navlinks className is changing when clicked", () => {
    const {getByTestId} = render(<Nav />);
    const button = getByTestId('services-icon');
    expect((button).getAttribute('class')).toMatch('')
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('active');
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('');
});
it("Test if navlinks className is changing when clicked", () => {
    const {getByTestId} = render(<Nav />);
    const button = getByTestId('contact-icon');
    expect((button).getAttribute('class')).toMatch('')
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('active');
    fireEvent.click(button);
    expect((button).getAttribute('class')).toMatch('');
});
// snapshot
it('matches snapshot', ()=>{
    let tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
});