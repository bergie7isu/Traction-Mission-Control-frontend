import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './MetricResult.css';

class MetricResult extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric-result'>
        <div className='metric-actual'>
          {this.props.result}
        </div>
        <div className='metric-plan'>
          <div className='metric-type'>
            {this.props.metric_type}
          </div>
          <div className='metric-goal'>
            {this.props.plan}
          </div>
        </div>
      </div>
    );
  };
};

export default MetricResult;