import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
// component
import Testimonials from '../Testimonials';

// let container;
// container = document.createElement('div');

// test('render swiper', ()=> {
//     render(<Testimonials />, container);
//     const swiperDataName = screen.getByText(/Tarnished/i);
//     expect(swiperDataName).toBeInTheDocument();
// });