import React from 'react';
import ReactDOM from 'react-dom';
import MetricResults from './Metric';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
      <MetricResults />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
