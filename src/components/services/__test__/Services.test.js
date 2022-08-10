import React from "react";
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
// component
import Services from "../Services";
let container = null;
it('renders without crashing', ()=>{
    container = document.createElement('div');
    render(<Services />, container);
});
// snapshot
it('matches snapshot', ()=>{
    let tree = renderer.create(<Services />).toJSON();
    expect(tree).toMatchSnapshot();
});