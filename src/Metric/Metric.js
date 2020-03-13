import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './Metric.css';

class Metric extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric'>
        Metric
      </div>
    );
  };
};

export default Metric;