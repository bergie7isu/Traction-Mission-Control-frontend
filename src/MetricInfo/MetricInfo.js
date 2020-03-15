import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './MetricInfo.css';

class MetricInfo extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric-info'>
        <div className='metric-buttons'>
          <div className='sort-metric-buttons'>
            <button className='sort-metric-up'>Up</button>
            <button className='sort-metric-down'>Down</button>
          </div>
          <button>Archive Metric</button>
        </div>
        <div className='metric-who'>
          {this.props.who}
        </div>
        <div className='metric-name'>
          {this.props.metricname}
        </div>
      </div>
    );
  };
};

export default MetricInfo;