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
          metricname={this.props.metricname}
          metrictype={this.props.metrictype}
        />
        <MetricResults 
          dates={this.props.dates}
        />      
      </div>
    );
  };
};

export default Metric;