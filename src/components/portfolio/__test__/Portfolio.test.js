import React from "react";
import { unmountComponentAtNode } from "react-dom";
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
// component
import Portfolio from './../Portfolio';

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
    render(<Portfolio />, container);
});
// img
it('Check if imgs are rendering properly', () => {
    const {getByTestId} = render(<Portfolio />);
    expect(getByTestId('image-1')).toBeVisible();
    expect(getByTestId('image-2')).toBeVisible();
    expect(getByTestId('image-3')).toBeVisible();
    expect(getByTestId('image-4')).toBeVisible();
    expect(getByTestId('image-5')).toBeVisible();
    expect(getByTestId('image-6')).toBeVisible();
});
// snapshot
it('matches snapshot', ()=>{
    let tree = renderer.create(<Portfolio />).toJSON();
    expect(tree).toMatchSnapshot();
});


    


