import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import ScorecardHeadings from '../ScorecardHeadings/ScorecardHeadings';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './ActiveMetrics.css';

class ActiveMetrics extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    const { metrics } = this.context;
    return (
      <div className='active-metrics-wrapper'>
        <div className='active-metrics'>
          <ScorecardHeadings 
            dates={this.props.dates}
          />
          {metrics.map(metric => 
            <Metric
              key={metric.id}
              id={metric.id}
              who={metric.who}
              metricname={metric.metricname}
              metrictype={metric.metrictype}
              dates={this.props.dates}
            />
          )}
        </div>
      </div>
    );
  };
};

export default ActiveMetrics;