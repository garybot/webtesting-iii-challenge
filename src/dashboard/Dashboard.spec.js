import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

// Dashboard
//
// shows the controls and display
//

test("shows the controls and display", () => {

})

test("defaults to `unlocked` and `open`", () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.getByText(/unlocked/i));
  expect(wrapper.getByText(/open/i));
})
