import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import MetricResult from '../MetricResult/MetricResult';
import './Metric.css';

class Metric extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric'>
        <div className='metric-info'>
          <div className='metric-buttons'>
            <div className='sort-metric-buttons'>
              <button className='sort-metric-up'>
                UP
              </button>
              <button className='sort-metric-down'>
                DN
              </button>
            </div>
            <div className='archive-metric-button'>
              <button className='archive-metric'>
                Archive
              </button>
            </div>
          </div>
          <div className='metric-info-wrapper'>
            <div className='metric-who'>
              {this.props.who}
            </div>
            <div className='metric-name'>
              {this.props.metric_name}
            </div>
          </div>
        </div>
        <div className='metric-results'>
          {this.props.dates_to_show.map(date =>
            <MetricResult 
              metric_type={this.props.metric_type}
              result={this.props.data.find(result => result.date === date) || 'none'}
            />
          )}
        </div>
      </div>
    );
  };
};

export default Metric;