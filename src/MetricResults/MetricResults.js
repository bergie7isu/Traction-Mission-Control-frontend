import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import MetricResult from '../MetricResult/MetricResult';
import './MetricResults.css';

class MetricResults extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric-results'>
        {this.props.dates_to_show.map(date =>
          <MetricResult 
            metric_type={this.props.metric_type}
            result={this.props.results[this.props.dates.indexOf(date)]}
            plan={this.props.plan[this.props.dates.indexOf(date)]}
          />
        )}
      </div>
    );
  };
};

export default MetricResults;