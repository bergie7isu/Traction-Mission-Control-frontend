import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './ActiveMetrics.css';

class ActiveMetrics extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='active-metrics'>
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
        <Metric />
      </div>
    );
  };
};

export default ActiveMetrics;