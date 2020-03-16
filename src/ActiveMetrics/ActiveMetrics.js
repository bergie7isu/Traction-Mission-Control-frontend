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
            dates_to_show={this.props.dates_to_show}
          />
          {metrics.map(metric => {
            if (metric.status === 'active') {
              return (
                <Metric
                  key={metric.id}
                  id={metric.id}
                  who={metric.who}
                  metric_name={metric.metric_name}
                  metric_type={metric.metric_type}
                  results={metric.results}
                  plan={metric.plan}
                  dates={metric.dates}
                  dates_to_show={this.props.dates_to_show}
                />
              )
            }
          })}
        </div>
      </div>
    );
  };
};

export default ActiveMetrics;