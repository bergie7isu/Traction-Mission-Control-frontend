import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './MetricResult.css';

class MetricResult extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    const colorCode = (this.props.result == 'none') ? '' : 
      (this.props.metric_type === '>' && this.props.result.result >= this.props.result.plan) ? 'green' : 
      (this.props.metric_type === '<' && this.props.result.result <= this.props.result.plan) ? 'green' :'red';
    return (
      <div className='metric-result'>
        <div className={`metric-actual ${colorCode}`}>
          {this.props.result.result || ''}
        </div>
        <div className='metric-plan'>
          <div className='metric-type'>
            {this.props.metric_type}
          </div>
          <div className='metric-goal'>
            {this.props.result.plan || ''}
          </div>
        </div>
      </div>
    );
  };
};

export default MetricResult;