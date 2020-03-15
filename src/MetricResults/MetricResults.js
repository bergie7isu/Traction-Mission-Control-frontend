import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import MetricResult from '../MetricResult/MetricResult';
import './MetricResults.css';

class MetricResults extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric-results'>
        {this.props.dates.map(date =>
          <MetricResult />
        )}
      </div>
    );
  };
};

export default MetricResults;