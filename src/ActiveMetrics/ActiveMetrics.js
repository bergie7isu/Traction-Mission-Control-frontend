import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import ScorecardHeadings from '../ScorecardHeadings/ScorecardHeadings';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './ActiveMetrics.css';

class ActiveMetrics extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    const { metrics } = this.context;
    const metricsToDisplay = [];
    metrics.map(metric => {
      if (metric.status === 'active') {
        metricsToDisplay.push(metric);
      };
    });
    return (
      <div className='active-metrics-wrapper'>
        <div className='active-metrics'>
          <ScorecardHeadings 
            dates_to_show={this.props.dates_to_show}
          />
          {metricsToDisplay.map(metric => 
            <Metric
              key={metric.id}
              id={metric.id}
              who={metric.who}
              metric_name={metric.metric_name}
              metric_type={metric.metric_type}
              data={metric.data}
              dates_to_show={this.props.dates_to_show}
            />
          )}
        </div>
      </div>
    );
  };
};

export default ActiveMetrics;