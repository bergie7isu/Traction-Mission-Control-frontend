import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './MetricResult.css';

class MetricResult extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric-result'>
        <div className='metric-actual'>
          Metric Result
        </div>
        <div className='metric-plan'>
          <div className='metric-type'>
            {`<>`}
          </div>
          <div className='metric-goal'>
            Plan
          </div>
        </div>
      </div>
    );
  };
};

export default MetricResult;