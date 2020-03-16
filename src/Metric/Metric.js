import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import MetricInfo from '../MetricInfo/MetricInfo';
import MetricResults from '../MetricResults/MetricResults';
import './Metric.css';

class Metric extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='metric'>
        <MetricInfo
          who={this.props.who}
          metric_name={this.props.metric_name}
        />
        <MetricResults 
          metric_type={this.props.metric_type}
          results={this.props.results}
          plan={this.props.plan}
          dates={this.props.dates}
          dates_to_show={this.props.dates_to_show}
        />      
      </div>
    );
  };
};

export default Metric;