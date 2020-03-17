import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import ScorecardHeadings from '../ScorecardHeadings/ScorecardHeadings';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './ArchivedMetrics.css';

class ArchivedMetrics extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    const { metrics } = this.context;
    const metricsToDisplay = [];
    metrics.map(metric => {
      if (metric.status === 'archived') {
        metricsToDisplay.push(metric);
      };
    });
    return (
      <div className='archived-metrics-wrapper'>
        <div className='archived-metrics'>
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

export default ArchivedMetrics;